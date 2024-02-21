import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";
const arabicTranslation = getArabicTranslation();

let date = [];
let chartsDataArrays = {};
const listNumber = "9D";

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
      hovertemplate: `%{x} :${
        arabicTranslation.date
      }<br>%{y} :${arabicTranslation[el]}<br>`,
    });
  });
  let data1 = [];
  data1.push(...selectedItemsObjects);
  let layout = { barmode: "group", showlegend: true };
  Plotly.newPlot("chart1", data1, layout, { responsive: true });
}

function updateCharts(chartsData) {
  const emptyObj = [
    {
      date: null,
      totalValue: null,
      beforeTotalValue: null,
      afterTotalValue: null,
    },
  ];
  if ($("#selectCompany").val() && $("#selectChartItems").val()) {
    let selectedCompanyObj = customFilter.filterBySecurityCode(
      chartsData,
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
    } else {
      $("#shape-selection").css({
        justifyContent: "center",
        display: "flex",
      });
      drawCharts(selectedCompanyObj[0].details, selectChartItemsValue);
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
    $("#datatable12 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable12 thead");
    var table = $("#datatable12").DataTable({
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

              return $("#datatable12").DataTable().column(idx).visible();
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

              return $("#datatable12").DataTable().column(idx).visible();
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

              return $("#datatable12").DataTable().column(idx).visible();
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
        const emptyObj = [
          {
            date: null,
            totalValue: null,
          },
        ];
        let selectedCompanyObj;
        let allSecurities = [];
        if (chartsData) {
          chartsData.forEach(function (item) {
            let obj = {
              name: item.securityName,
              code: item.securityCode,
            };
            if (!allSecurities.includes(obj)) {
              allSecurities.push(obj);
            }
          });
          helperFunctions.createChartSelectOptions(chartsData, listNumber, [
            "date",
          ]);
        }
        if (allSecurities) {
          let selectCompanyElement = document.getElementById("selectCompany");
          selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;

          allSecurities.forEach((item) => {
            selectCompanyElement.innerHTML += `<option value="${item.code}">${item.code} - ${item.name}</option>`;
          });
          dselect(selectCompanyElement, {
            search: true,
          });
        }

        $("#selectCompany,#selectChartItems,#selectedType").on(
          "change",
          function () {
            updateCharts(chartsData);
          }
        );
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
