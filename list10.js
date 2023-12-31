import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();

  let date = [],
    buyVolume = [],
    sellVolume = [],
    meanBuyVolume = [],
    meanSellVolume = [],
    buyValue = [],
    sellValue = [],
    meanBuyValue = [],
    meanSellValue = [],
    priceBuy = [],
    priceSell = [],
    cumulativePriceBuy = [],
    cumulativePriceSell = [];
  let name1 = [
    arabicTranslation[0].list10.buyVolume,
    arabicTranslation[0].list10.sellVolume,
    arabicTranslation[0].list10.meanBuyVolume,
    arabicTranslation[0].list10.meanSellVolume,
  ];
  let name2 = [
    arabicTranslation[0].list10.buyValue,
    arabicTranslation[0].list10.sellValue,
    arabicTranslation[0].list10.meanBuyValue,
    arabicTranslation[0].list10.meanSellValue,
  ];
  let name3 = [
    arabicTranslation[0].list10.priceBuy,
    arabicTranslation[0].list10.priceSell,
    arabicTranslation[0].list10.cumulativePriceBuy,
    arabicTranslation[0].list10.cumulativePriceSell,
  ];

  Objects.map((el) => {
    date.push(el.date);
    buyVolume.push(el.buyVolume);
    sellVolume.push(el.sellVolume);
    meanBuyVolume.push(el.meanBuyVolume);
    meanSellVolume.push(el.meanSellVolume);
    buyValue.push(el.buyValue);
    sellValue.push(el.sellValue);
    meanBuyValue.push(el.meanBuyValue);
    meanSellValue.push(el.meanSellValue);
    priceBuy.push(el.priceBuy);
    priceSell.push(el.priceSell);
    cumulativePriceBuy.push(el.cumulativePriceBuy);
    cumulativePriceSell.push(el.cumulativePriceSell);
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
    data3 = [];
  data1.push(
    {
      x: date,
      y: buyVolume,
      name: name1[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.buyVolume}<br>`,
    },
    {
      x: date,
      y: sellVolume,
      name: name1[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.sellVolume}<br>`,
    },
    {
      x: date,
      y: meanBuyVolume,
      name: name1[2],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.meanBuyVolume}<br>`,
    },
    {
      x: date,
      y: meanSellVolume,
      name: name1[3],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.meanSellVolume}<br>`,
    }
  );
  data2.push(
    {
      x: date,
      y: buyValue,
      name: name2[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.buyValue}<br>`,
    },
    {
      x: date,
      y: sellValue,
      name: name2[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.sellValue}<br>`,
    },
    {
      x: date,
      y: meanBuyValue,
      name: name2[2],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.meanBuyValue}<br>`,
    },
    {
      x: date,
      y: meanSellValue,
      name: name2[3],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.meanSellValue}<br>`,
    }
  );
  data3.push(
    {
      x: date,
      y: priceBuy,
      name: name3[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.priceBuy}<br>`,
    },
    {
      x: date,
      y: priceSell,
      name: name3[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.priceSell}<br>`,
    },
    {
      x: date,
      y: cumulativePriceBuy,
      name: name3[2],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.cumulativePriceBuy}<br>`,
    },
    {
      x: date,
      y: cumulativePriceSell,
      name: name3[3],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.cumulativePriceSell}<br>`,
    }
  );
  let layout = { barmode: "group", showlegend: true };

  Plotly.newPlot("chart1", data1, layout, { responsive: true });
  Plotly.newPlot("chart2", data2, layout, { responsive: true });
  Plotly.newPlot("chart3", data3, layout, { responsive: true });
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
    $("#datatable15 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable15 thead");
    var table = $("#datatable15").DataTable({
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

              return $("#datatable15").DataTable().column(idx).visible();
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

              return $("#datatable15").DataTable().column(idx).visible();
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

              return $("#datatable15").DataTable().column(idx).visible();
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
        { data: "date" },
        { data: "buyVolume" },
        { data: "buyValue" },
        { data: "sellVolume" },
        { data: "sellValue" },
        { data: "meanBuyVolume" },
        { data: "meanBuyValue" },
        { data: "meanSellVolume" },
        { data: "meanSellValue" },
        { data: "priceBuy" },
        { data: "priceSell" },
        { data: "cumulativePriceBuy" },
        { data: "cumulativePriceSell" },
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
            sellVolume: null,
            sellValue: null,
            cumulativeAvgBuyVolume: null,
            cumulativeAvgBuyValue: null,
            cumulativeAvgSellVolume: null,
            cumulativeAvgSellValue: null,
          },
        ];
        let selectedCompanyObj;
        let selectedNinObj;
        $("#selectCompany").on("change", function () {
          if ($("#selectCompany").val() && $("#selectNin").val()) {
            selectedNinObj = customFilter.filterByNin(
              chartsData,
              $("#selectNin").val()
            );
            selectedCompanyObj = customFilter.filterBySecurityCode(
              selectedNinObj,
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
            let selectCompanyElement = document.getElementById("selectCompany");

            selectedNinObj = customFilter.filterByNin(
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
          if ($("#selectCompany").val() && $("#selectNin").val()) {
            selectedCompanyObj = customFilter.filterBySecurityCode(
              selectedNinObj,
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
