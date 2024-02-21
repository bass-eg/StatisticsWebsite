import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";
const arabicTranslation = getArabicTranslation();

let date = [];
let chartsDataArrays = {};
const listNumber = "9E";
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
      name: arabicTranslation[0]["list" + listNumber][el],
      type: selectedType,
      hovertemplate: `%{x} :${
        arabicTranslation[0]["list" + listNumber].date
      }<br>%{y} :${arabicTranslation[0]["list" + listNumber][el]}<br>`,
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
    $("#datatable13 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable13 thead");
    var table = $("#datatable13").DataTable({
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

              return $("#datatable13").DataTable().column(idx).visible();
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

              return $("#datatable13").DataTable().column(idx).visible();
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

              return $("#datatable13").DataTable().column(idx).visible();
            },
          },
        },
      ],
      snapshot: null,
      data: tableData,
      columns: [
        { data: "securityCode" },
        { data: "securityName" },
        { data: "date" },
        { data: "nin" },
        { data: "ninName" },
        { data: "buyBeforeRemainingVolume" },
        { data: "buyBeforeOrgVolume" },
        { data: "buyBeforeAmendOrgVolume" },
        {
          data: "buyBeforePercentageEnter",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "buyBeforePercentageAmend",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "buyDuringRemainingVolume" },
        { data: "buyDuringOrgVolume" },
        { data: "buyDuringAmendOrgVolume" },
        {
          data: "buyDuringPercentageEnter",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "buyDuringPercentageAmend",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "buyAfterRemainingVolume" },
        { data: "buyAfterOrgVolume" },
        { data: "buyAfterAmendOrgVolume" },
        {
          data: "buyAfterPercentageEnter",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "buyAfterPercentageAmend",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "sellBeforeRemainingVolume" },
        { data: "sellBeforeOrgVolume" },
        { data: "sellBeforeAmendOrgVolume" },
        {
          data: "sellBeforePercentageEnter",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "sellBeforePercentageAmend",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "sellDuringRemainingVolume" },
        { data: "sellDuringOrgVolume" },
        { data: "sellDuringAmendOrgVolume" },
        {
          data: "sellDuringPercentageEnter",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "sellDuringPercentageAmend",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "sellAfterRemainingVolume" },
        { data: "sellAfterOrgVolume" },
        { data: "sellAfterAmendOrgVolume" },
        {
          data: "sellAfterPercentageEnter",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "sellAfterPercentageAmend",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
      ],
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
