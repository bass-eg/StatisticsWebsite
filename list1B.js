import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();
  let date = [],
    buyVolume = [],
    secondViolatorBuyVolume = [],
    totalBuyVolume = [],
    percentageBuyVolume = [],
    percentageBuyVolumesecondV = [],
    sellVolume = [],
    secondViolatorSellVolume = [],
    totalSellVolume = [],
    percentageSellVolume = [],
    percentageSellVolumesecondV = [],
    buyValue = [],
    secondViolatorBuyValue = [],
    totalBuyValue = [],
    percentageBuyValue = [],
    percentageBuyValuesecondV = [],
    sellValue = [],
    secondViolatorSellValue = [],
    totalSellValue = [],
    percentageSellValue = [],
    percentageSellValuesecondV = [];

  Objects.map((el) => {
    date.push(el.date);

    buyVolume.push(el.buyVolume);
    secondViolatorBuyVolume.push(el.secondViolatorBuyVolume);
    totalBuyVolume.push(el.totalBuyVolume);
    percentageBuyVolume.push(el.percentageBuyVolume);
    percentageBuyVolumesecondV.push(el.percentageBuyVolumesecondV);

    sellVolume.push(el.sellVolume);
    secondViolatorSellVolume.push(el.secondViolatorSellVolume);
    totalSellVolume.push(el.totalSellVolume);
    percentageSellVolume.push(el.percentageSellVolume);
    percentageSellVolumesecondV.push(el.percentageSellVolumesecondV);

    buyValue.push(el.buyValue);
    secondViolatorBuyValue.push(el.secondViolatorBuyValue);
    totalBuyValue.push(el.totalBuyValue);
    percentageBuyValue.push(el.percentageBuyValue);
    percentageBuyValuesecondV.push(el.percentageBuyValuesecondV);

    sellValue.push(el.sellValue);
    secondViolatorSellValue.push(el.secondViolatorSellValue);
    totalSellValue.push(el.totalSellValue);
    percentageSellValue.push(el.percentageSellValue);
    percentageSellValuesecondV.push(el.percentageSellValuesecondV);
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
      x: date,
      y: buyVolume,
      name: arabicTranslation[0].list1B.buyVolume,
      type: "bar",
      customdata: percentageBuyVolume,
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.buyVolume}<br>%{customdata}% :${arabicTranslation[0].list1B.percentageBuyVolume}`,
    },
    {
      x: date,
      y: secondViolatorBuyVolume,
      name: arabicTranslation[0].list1B.secondViolatorBuyVolume,
      type: "bar",
      customdata: percentageBuyVolumesecondV,
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.secondViolatorBuyVolume}<br>%{customdata}% :${arabicTranslation[0].list1B.percentageBuyVolumesecondV}`,
    },
    {
      x: date,
      y: totalBuyVolume,
      name: arabicTranslation[0].list1B.totalBuyVolume,
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.totalBuyVolume}<br>`,
    }
  );

  data2.push(
    {
      x: date,
      y: sellVolume,
      name: arabicTranslation[0].list1B.sellVolume,
      type: "bar",
      customdata: percentageSellVolume,
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.sellVolume}<br>%{customdata}% :${arabicTranslation[0].list1B.percentageSellVolume}`,
    },
    {
      x: date,
      y: secondViolatorSellVolume,
      name: arabicTranslation[0].list1B.secondViolatorSellVolume,
      type: "bar",
      customdata: percentageSellVolumesecondV,
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.secondViolatorSellVolume}<br>%{customdata}% :${arabicTranslation[0].list1B.percentageSellVolumesecondV}`,
    },
    {
      x: date,
      y: totalSellVolume,
      name: arabicTranslation[0].list1B.totalSellVolume,
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.totalSellVolume}<br>`,
    }
  );
  data3.push(
    {
      x: date,
      y: buyValue,
      name: arabicTranslation[0].list1B.buyValue,
      type: "bar",
      customdata: percentageBuyValue,
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.buyValue}<br>%{customdata}% :${arabicTranslation[0].list1B.percentageBuyValue}`,
    },
    {
      x: date,
      y: secondViolatorBuyValue,
      name: arabicTranslation[0].list1B.secondViolatorBuyValue,
      type: "bar",
      customdata: percentageBuyValuesecondV,
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.secondViolatorBuyValue}<br>%{customdata}% :${arabicTranslation[0].list1B.percentageBuyValuesecondV}`,
    },
    {
      x: date,
      y: totalBuyValue,
      name: arabicTranslation[0].list1B.totalBuyValue,
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.totalBuyValue}<br>`,
    }
  );

  data4.push(
    {
      x: date,
      y: sellValue,
      name: arabicTranslation[0].list1B.sellValue,
      type: "bar",
      customdata: percentageSellValue,
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.sellValue}<br>%{customdata}% :${arabicTranslation[0].list1B.percentageSellValue}`,
    },
    {
      x: date,
      y: secondViolatorSellValue,
      name: arabicTranslation[0].list1B.secondViolatorSellValue,
      type: "bar",
      customdata: percentageSellValuesecondV,
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.secondViolatorSellValue}<br>%{customdata}% :${arabicTranslation[0].list1B.percentageSellValuesecondV}`,
    },
    {
      x: date,
      y: totalSellValue,
      name: arabicTranslation[0].list1B.totalSellValue,
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list1B.date}<br>%{y} :${arabicTranslation[0].list1B.totalSellValue}<br>`,
    }
  );
  let layout = { barmode: "group", showlegend: true };

  Plotly.newPlot("chart1", data1, layout, { responsive: true });
  Plotly.newPlot("chart2", data2, layout, { responsive: true });
  Plotly.newPlot("chart3", data3, layout, { responsive: true });
  Plotly.newPlot("chart4", data4, layout, { responsive: true });
}
export function startTable(tableData, chartsData, lang, ninData) {
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
      columns: [
        { data: "securityCode" },
        { data: "securityName" },
        { data: "nin" },
        { data: "ninName" },
        { data: "secondViolator" },
        { data: "secondViolatorName" },
        { data: "date" },
        { data: "nbOfBuyTrades" },
        { data: "nbOfSellTrades" },
        { data: "buyVolume" },
        { data: "secondViolatorBuyVolume" },
        { data: "totalBuyVolume" },
        {
          data: "percentageBuyVolume",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageBuyVolumesecondV",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "sellVolume" },
        { data: "secondViolatorSellVolume" },
        { data: "totalSellVolume" },
        {
          data: "percentageSellVolume",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageSellVolumesecondV",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "buyValue" },
        { data: "secondViolatorBuyValue" },
        { data: "totalBuyValue" },
        {
          data: "percentageBuyValue",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageBuyValuesecondV",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "sellValue" },
        { data: "secondViolatorSellValue" },
        { data: "totalSellValue" },
        {
          data: "percentageSellValue",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageSellValuesecondV",
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
