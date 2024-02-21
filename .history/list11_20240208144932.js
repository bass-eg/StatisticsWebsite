import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";
const arabicTranslation = getArabicTranslation();

let date = [];
let chartsDataArrays = {};
const listNumber = "11";
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
    selectedCompanyObj = customFilter.filterBySecurityCode(
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
    $("#datatable16 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable16 thead");
    var table = $("#datatable16").DataTable({
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

              return $("#datatable16").DataTable().column(idx).visible();
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

              return $("#datatable16").DataTable().column(idx).visible();
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

              return $("#datatable16").DataTable().column(idx).visible();
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
          [
            {
              details: [],
              securityCode: null,
              securityName: null,
              date: null,
              sector: null,
              securityClosingPrice: null,
              securityVolumeTraded: null,
              securityValueTraded: null,
              securityNumberOfTrades: null,
              sectorClosingPrice: null,
              sectorVolumeTraded: null,
              sectorValueTraded: null,
              sectorNumberOfTrades: null,
            },
          ],
        ];
        let selectedCompanyObj;
        let allSectors = [];
        let allSecurities = [];
        let selectSectorElement = document.getElementById("selectSector");
        selectSectorElement.innerHTML = `<option value="" selected disabled hidden>إختر قطاع</option>`;
        let selectCompanyElement = document.getElementById("selectCompany");
        selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;
        dselect(selectCompanyElement, {
          search: true,
        });
        if (chartsData) {
          if (chartsData.securities) {
            helperFunctions.createChartSelectOptions(
              [...chartsData.securities],
              listNumber,
              ["date"]
            );
            chartsData.securities.forEach(function (item) {
              let obj = {
                name: item.securityName,
                code: item.securityCode,
              };
              if (!allSecurities.includes(obj)) {
                allSecurities.push(obj);
              }
            });
          }
          if (chartsData.sectors) {
            helperFunctions.createChartSelectOptions(
              [...chartsData.sectors],
              listNumber,
              ["date"]
            );
            chartsData.sectors.forEach(function (item) {
              if (!allSectors.includes(item.sector)) {
                allSectors.push(item.sector);
              }
            });
          }
        }

        if (allSecurities) {
          allSecurities.forEach((item) => {
            selectCompanyElement.innerHTML += `<option value="${item.code}">${item.code} - ${item.name}</option>`;
          });
          dselect(selectCompanyElement, {
            search: true,
          });
        }

        if (allSectors) {
          allSectors.forEach((item) => {
            selectSectorElement.innerHTML += `<option value="${item}">${item}</option>`;
          });
          dselect(selectSectorElement, {
            search: true,
          });
        }

        $(
          "#selectSector,#selectedType,#selectCompany, #startDate, #endDate"
        ).on("change", function () {
          selectedCompanyObj = [];
          if ($("#selectCompany").val()) {
            let result = customFilter.filterByMultiSecurityCode(
              chartsData.securities,
              $("#selectCompany").val()
            );
            selectedCompanyObj.push(...result);
          }
          if ($("#selectSector").val()) {
            let result = customFilter.filterByMultiSector(
              chartsData.sectors,
              $("#selectSector").val()
            );
            selectedCompanyObj.push(...result);
          }
          if (selectedCompanyObj.length === 0) {
            $("#shape-selection").css({
              display: "none",
            });
            drawCharts(emptyObj);
          } else {
            $("#shape-selection").css({
              justifyContent: "center",
              display: "flex",
            });

            console.log("selectedCompanyObj is ", selectedCompanyObj);
            drawCharts(
              selectedCompanyObj,
              $("#startDate").val(),
              $("#endDate").val(),
              $("#selectedType").val()
            );
          }
        });

        // Columns Filters
        //!!!! Don't TOUCH if you don't know what you are doing !!!!
        // For each column
        var api = this.api();
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
