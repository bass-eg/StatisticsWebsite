import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();
  let date = [],
    // buyVolume = [],
    // secondViolatorBuyVolume = [],
    // totalBuyVolume = [],
    // percentageBuyVolume = [],
    // percentageBuyVolumesecondV = [],
    // sellVolume = [],
    // secondViolatorSellVolume = [],
    // totalSellVolume = [],
    // percentageSellVolume = [],
    // percentageSellVolumesecondV = [],
    // buyValue = [],
    // secondViolatorBuyValue = [],
    // totalBuyValue = [],
    // percentageBuyValue = [],
    // percentageBuyValuesecondV = [],
    // sellValue = [],
    // secondViolatorSellValue = [],
    // totalSellValue = [],
    // percentageSellValue = [],
    // percentageSellValuesecondV = [],


    buyVolume= [],
    buyValue=[],
    sellVolume=[],
    sellValue=[],
    numoftrades_buy=[],
    numoftrades_sell=[],
    percentageamountbuy=[],
    percentagevaluebuy=[],
    percentageamountsell=[],
    percentagevaluesell=[],
    countMatching=[],
    totalViolation=[],
    percentage=[];

  Objects.map((el) => {
    date.push(new Date());
    buyVolume.push(el.buyVolume);
    buyValue.push(el.buyValue);
    sellVolume.push(el.sellVolume);
    sellValue.push(el.sellValue);
    numoftrades_buy.push(el.numoftrades_buy);
    numoftrades_sell.push(el.numoftrades_sell);
    percentageamountbuy.push(el.percentageamountbuy);
    percentagevaluebuy.push(el.percentagevaluebuy);
    percentageamountsell.push(el.percentageamountsell);
    percentagevaluesell.push(el.percentagevaluesell);
    countMatching.push(el.countMatching);
    totalViolation.push(el.totalViolation);
    percentage.push(el.percentage);
  });

  // const colors = [
  //   "#1f77b4", //blue
  //   "#17becf", //aqua
  //   "#ff7f0e", //orange
  //   "#d62728", //red
  //   "#228B22", //green
  //   "#2F4F4F", //lawn-green
  //   "#9467bd", //violet
  //   "#e377c2", //pink
  //   "#8c564b", //brown
  //   "#7f7f7f", //grey
  // ];
  let data1 = [],
    data2 = [],
    data3 = [],
    data4 = [];
  data1.push(
    {
      x: [
        "الشراء"
      ],
      y: buyVolume,
      name:  arabicTranslation.buyVolume,
      type: "bar",
      customdata: percentageamountbuy,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyVolume}<br>%{customdata}% :${ arabicTranslation.percentageamountbuy}`,
    },
    {
      x: [
        "الشراء"
      ],
      y: buyValue,
      name:  arabicTranslation.buyValue,
      type: "bar",
      customdata: percentagevaluebuy,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyValue}<br>%{customdata}% :${ arabicTranslation.percentagevaluebuy}`,
    },
  );

  data2.push(
    {
      x: ["البيع"],
      y: sellVolume,
      name:  arabicTranslation.sellVolume,
      type: "bar",
      customdata: percentageamountsell,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellVolume}<br>%{customdata}% :${ arabicTranslation.percentageamountsell}`,
    },
    {
      x: ["البيع"],
      y: sellValue,
      name:  arabicTranslation.sellValue,
      type: "bar",
      customdata: percentagevaluesell,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellValue}<br>%{customdata}% :${ arabicTranslation.percentagevaluesell}`,
    },
  );
  data3.push(
    {
      x: ["الاوامر"],
      y: numoftrades_buy,
      name:  arabicTranslation.numoftrades_buy,
      type: "bar",
      // customdata: percentageBuyValue,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.numoftrades_buy}<br>`
      // +`%{customdata}% :${ arabicTranslation.percentageBuyValue}`,
    },
    {
      x: ["الاوامر"],
      y: numoftrades_sell,
      name:  arabicTranslation.numoftrades_sell,
      type: "bar",
      // customdata: percentageBuyValuesecondV,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.numoftrades_sell}<br>`
      // +`%{customdata}% :${ arabicTranslation.percentageBuyValuesecondV}`,
    }
  );

  data4.push(
    {
      x: ["المخالفات"],
      y: countMatching,
      name:  arabicTranslation.countMatching,
      type: "bar",
      // customdata: percentageSellValue,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.countMatching}<br>`
      // +`%{customdata}% :${ arabicTranslation.percentageSellValue}`,
    },
    {
      x: ["المخالفات"],
      y: totalViolation,
      name:  arabicTranslation.totalViolation,
      type: "bar",
      // customdata: percentageSellValuesecondV,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.totalViolation}<br>`
      // +`%{customdata}% :${ arabicTranslation.percentageSellValuesecondV}`,
    },
  );
  let layout = { barmode: "group", showlegend: true };

  Plotly.newPlot("chart1", data1, layout, { responsive: true });
  Plotly.newPlot("chart2", data2, layout, { responsive: true });
  Plotly.newPlot("chart3", data3, layout, { responsive: true });
  Plotly.newPlot("chart4", data4, layout, { responsive: true });
}

export function startTable(tableData, chartsData, lang, ninData, columnsArray) {
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
      columns: columnsArray,
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
        let selectedCompanyObj;
        let selectedNinObj;
        let selectedSecondNinObj;

        $("#selectCompany").on("change", function () {
          if (
            $("#selectCompany").val() &&
            $("#selectNin").val() &&
            $("#selectNin2").val()
          ) {
            selectedNinObj = customFilter.filterByNin(
              chartsData,
              $("#selectNin").val()
            );
            selectedSecondNinObj = customFilter.filterBySecondNin(
              selectedNinObj,
              $("#selectNin2").val()
            );
            selectedCompanyObj = customFilter.filterBySecurityCode(
              selectedSecondNinObj,
              $("#selectCompany").val()
            );
            if (selectedCompanyObj.length === 0) {
              drawCharts(emptyObj);
            } else {
              drawCharts(selectedCompanyObj[0].details);
            }
          }
        });

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

          if ($("#selectNin").val() && $("#selectNin2").val()) {
            let selectCompanyElement = document.getElementById("selectCompany");

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

            var selectBoxElement = document.querySelector("#selectCompany");
            dselect(selectBoxElement, {
              search: true,
            });
          }

          if (
            $("#selectCompany").val() &&
            $("#selectNin").val() &&
            $("#selectNin2").val()
          ) {
            selectedCompanyObj = customFilter.filterBySecurityCode(
              selectedSecondNinObj,
              $("#selectCompany").val()
            );
            if (selectedCompanyObj.length === 0) {
              drawCharts(emptyObj);
            } else {
              drawCharts(selectedCompanyObj[0].details);
            }
          }
        });

        $("#selectNin2").on("change", function () {
          if ($("#selectNin").val() && $("#selectNin2").val()) {
            let selectCompanyElement = document.getElementById("selectCompany");

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

            var selectBoxElement = document.querySelector("#selectCompany");
            dselect(selectBoxElement, {
              search: true,
            });
          }

          if (
            $("#selectCompany").val() &&
            $("#selectNin").val() &&
            $("#selectNin2").val()
          ) {
            selectedCompanyObj = customFilter.filterBySecurityCode(
              selectedSecondNinObj,
              $("#selectCompany").val()
            );
            if (selectedCompanyObj.length === 0) {
              drawCharts(emptyObj);
            } else {
              drawCharts(selectedCompanyObj[0].details);
            }
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
