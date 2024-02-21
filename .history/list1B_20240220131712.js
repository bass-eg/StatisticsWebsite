import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";
const arabicTranslation = getArabicTranslation();

let date = [];
let chartsDataArrays = {};
const listNumber = "1B";
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
  console.log("selectedItemsObjects are ", selectedItemsObjects);
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

    let selectedSecondNinObj = customFilter.filterBySecondNin(
      selectedNinObj,
      $("#selectNin2").val()
    );
    let selectedCompanyObj = customFilter.filterBySecurityCode(
      selectedSecondNinObj,
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
        helperFunctions.hidePrintContainer();
      } else {
      $("#shape-selection").css({
        justifyContent: "center",
        display: "flex",
      });
      helperFunctions.showPrintContainer();
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
    $("#datatable2 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable2 thead");
    var table = $("#datatable2").DataTable({
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

              return $("#datatable2").DataTable().column(idx).visible();
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

              return $("#datatable2").DataTable().column(idx).visible();
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

              return $("#datatable2").DataTable().column(idx).visible();
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
          helperFunctions.createChartSelectOptions(chartsData, listNumber, [
            "date",
          ]);
        }
        const emptyObj = [
          {
            date: null,
            buyVolume: null,
            buyValue: null,
            nbOfBuyTrades: null,
            sellVolume: null,
            sellValue: null,
            nbOfSellTrades: null,
          },
        ];
        let selectedNinObj;
        let selectedSecondNinObj;

        $("#selectNin").on("change", function () {
          if ($("#selectNin").val()) {
            let selectedNin2Element = document.getElementById("selectNin2");
            var filteredNin2 = ninData.filter(function (value, index, arr) {
              return value.nin !== $("#selectNin").val();
            });
            selectedNin2Element.innerHTML = `<option value="" selected disabled hidden>إختر المشتبه به الثاني</option>`;
            filteredNin2.forEach(function (item) {
              selectedNin2Element.innerHTML += `<option value="${item.nin}">${item.ninName}</option>`;
            });
            var selectBoxElement = document.querySelector("#selectNin2");
            dselect(selectBoxElement, {
              search: true,
            });
          }

          let selectCompanyElement = document.getElementById("selectCompany");
          var selectBoxElement = document.querySelector("#selectCompany");
          if ($("#selectNin").val() && $("#selectNin2").val()) {
            selectedNinObj = customFilter.filterByNin(
              chartsData,
              $("#selectNin").val()
            );
            selectedSecondNinObj = customFilter.filterBySecondNin(
              selectedNinObj,
              $("#selectNin2").val()
            );
            selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;
            selectedSecondNinObj.forEach(function (item) {
              selectCompanyElement.innerHTML += `<option value="${item.securityCode}">${item.securityCode} - ${item.securityName}</option>`;
            });

          } else {
            selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;
 
          }
          dselect(selectBoxElement, {
            search: true,
          });
        });

        $("#selectNin2").on("change", function () {
          let selectCompanyElement = document.getElementById("selectCompany");
          var selectBoxElement = document.querySelector("#selectCompany");
          if ($("#selectNin").val() && $("#selectNin2").val()) {
            selectedNinObj = customFilter.filterByNin(
              chartsData,
              $("#selectNin").val()
            );
            selectedSecondNinObj = customFilter.filterBySecondNin(
              selectedNinObj,
              $("#selectNin2").val()
            );
            selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;
            selectedSecondNinObj.forEach(function (item) {
              selectCompanyElement.innerHTML += `<option value="${item.securityCode}">${item.securityCode} - ${item.securityName}</option>`;
            });

          } else {
            selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;
          }
          dselect(selectBoxElement, {
            search: true,
          });
        });

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
