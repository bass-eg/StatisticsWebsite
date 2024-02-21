import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";
const arabicTranslation = getArabicTranslation();

let date = [];
let chartsDataArrays = {};
const listNumber = "1C";

function prepareDataForCharts(Objects) {
  date = [];
  for (let key in Objects[0]) {
    chartsDataArrays[key] = [];
  }
  Objects.map((el) => {
    date.push(el.date);
    for (let key in el) {
      if (key !== "date") {
        chartsDataArrays[key].push(el[key]);
      }
    }
  });
}

function drawCharts(Objects, selectedItems) {
  let selectedType = $("#selectedType").val();
  if (selectedType != "scatter" && selectedType != "bar") {
    selectedType = "scatter";
  }
  prepareDataForCharts(Objects);
  let selectedItemsObjects = [];
  selectedItems.map((el) => {
    selectedItemsObjects.push({
      x: date,
      y: chartsDataArrays[el],
      name: arabicTranslation[el],
      type: selectedType,
      hovertemplate: `%{x} :${arabicTranslation.date}<br>%{y} :${arabicTranslation[el]}<br>`,
    });
  });
  let data1 = [];
  data1.push(...selectedItemsObjects);
  let layout = { barmode: "group", showlegend: true };
  Plotly.newPlot("chart1", data1, layout, { responsive: true });
}

function updateCharts(chartsData) {
  const emptyObj = [{}];
  if (
    $("#selectCompany").val() &&
    $("#selectNin").val() &&
    $("#selectChartItems").val()
  ) {
    let selectedNinObj = customFilter.filterByNin(
      chartsData,
      $("#selectNin").val()
    );
    let selectedCompanyObj = customFilter.filterBySecurityCode(
      selectedNinObj,
      $("#selectCompany").val()
    );
    let selectChartItemsValue = $("#selectChartItems").val();

    if (
      selectedCompanyObj.length === 0 ||
      selectChartItemsValue.length === 0 ||
      selectChartItemsValue === null
    ) {
      $("#shape-selection").css({
        display: "none",
      });
      drawCharts(emptyObj, selectChartItemsValue);
      $("#print-container").css({"display":"none"});
      $("#no-content-container").css({"display":"none"});
      $("#globalDownload").removeClass("btn-active");
    } else {
      $("#shape-selection").css({
        justifyContent: "center",
        display: "flex",
      });
      drawCharts(selectedCompanyObj[0].details, selectChartItemsValue);
      $("#print-container").css({"display":"none"});
      $("#no-content-container").css({"display":"flex"});
      $("#globalDownload").addClass("btn-active");
    }
  }
}

export function startTable(tableData, chartsData, lang, ninData, columnArray) {
  $(document).ready(function () {
    function hideSearchInputs(columns) {
      for (let i = 0; i < columns.length; i++) {
        if (columns[i]) {
          $(".filterhead:eq(" + i + ")").show();
        } else {
          $(".filterhead:eq(" + i + ")").hide();
        }
      }
    }
    // Setup - add a text input to each footer cell
    $("#datatable3 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable3 thead");
    var table = $("#datatable3").DataTable({
      dom:
        "<'row'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-5'il><'col-sm-12 col-md-7'p>>",
      buttons: [
        {
          extend: "excel",
          title: "Excel Report",
          exportOptions: {
            columns: function (idx, data, node) {
              if ($(node).hasClass("noVis")) {
                return false;
              }

              return $("#datatable3").DataTable().column(idx).visible();
            },
          },
        },
        {
          extend: "print",
          exportOptions: {
            columns: function (idx, data, node) {
              if ($(node).hasClass("noVis")) {
                return false;
              }

              return $("#datatable3").DataTable().column(idx).visible();
            },
          },
        },
        {
          extend: "copy",
          exportOptions: {
            columns: function (idx, data, node) {
              if ($(node).hasClass("noVis")) {
                return false;
              }

              return $("#datatable3").DataTable().column(idx).visible();
            },
          },
        },
      ],
      snapshot: null,
      data: tableData,
      columns: columnArray,
      orderCellsTop: true,

      language: lang,
      rowReorder: {
        selector: "td:nth-child(2)",
      },
      responsive: true,
      keys: true,
      initComplete: function () {
        if (chartsData) {
          helperFunctions.fillNinDropdownList(ninData);
          //filling selectChartItems <select> options and filling chartObjects data
          helperFunctions.createChartSelectOptions(chartsData, listNumber, [
            "date",
          ]);
        }
        $("#selectCompany,#selectChartItems,#selectedType").on(
          "change",
          function () {
            updateCharts(chartsData);
          }
        );
        $("#selectNin").on("change", function () {
          if ($("#selectNin").val()) {
            let selectCompanyElement = document.getElementById("selectCompany");

            let selectedNinObj = customFilter.filterByNin(
              chartsData,
              $("#selectNin").val()
            );
            selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;
            selectedNinObj.forEach(function (item) {
              selectCompanyElement.innerHTML += `<option value="${item.securityCode}">${item.securityCode} - ${item.securityName}</option>`;
            });

            var selectBoxElement = document.querySelector("#selectCompany");
            dselect(selectBoxElement, {
              search: true,
            });
          }
        });
        var api = this.api();

        // For each column
        api
          .columns()
          .eq(0)
          .each(function (colIdx) {
            // Set the header cell to contain the input element
            var cell = $(".filters th")
              .addClass("filterhead")
              .eq($(api.column(colIdx).header()).index());
            var title = $(cell).text();
            $(cell).html('<input type="text" placeholder="' + title + '" />');

            // On every keypress in this input
            $(
              "input",
              $(".filters th").eq($(api.column(colIdx).header()).index())
            )
              .off("keyup change")
              .on("keyup change", function (e) {
                e.stopPropagation();
                // Get the search value
                $(this).attr("title", $(this).val());
                var regexr = "({search})"; //$(this).parents('th').find('select').val();
                var cursorPosition = this.selectionStart;
                // Search the column for that value
                api
                  .column(colIdx)
                  .search(
                    this.value != ""
                      ? regexr.replace("{search}", "(((" + this.value + ")))")
                      : "",
                    this.value != "",
                    this.value == ""
                  )
                  .draw();
                $(this)
                  .focus()[0]
                  .setSelectionRange(cursorPosition, cursorPosition);
              });
          });
        hideSearchInputs(api.columns().responsiveHidden().toArray());
      },
    });
    table.on("responsive-resize", function (e, datatable, columns) {
      hideSearchInputs(columns);
    });
  });
}
