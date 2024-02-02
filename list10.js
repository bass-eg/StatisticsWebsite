import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";
const arabicTranslation = getArabicTranslation();

let date = [];
let chartsDataArrays = {
  buyVolume: [],
  sellVolume: [],
  buyValue: [],
  sellValue: [],
  numoftrades_buy: [],
  numoftrades_sell: [],
  avgBuy: [],
  avgSell: [],
};
let name1 = [
  arabicTranslation[0].list10.buyVolume,
  arabicTranslation[0].list10.sellVolume,
  arabicTranslation[0].list10.buyValue,
  arabicTranslation[0].list10.sellValue,
  arabicTranslation[0].list10.numoftrades_buy,
  arabicTranslation[0].list10.numoftrades_sell,
  arabicTranslation[0].list10.avgBuy,
  arabicTranslation[0].list10.avgSell,
];
let chartObjects = {
  buyVolume: {
    x: date,
    y: [],
    name: name1[0],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.buyVolume}<br>`,
  },
  sellVolume: {
    x: date,
    y: [],
    name: name1[1],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.sellVolume}<br>`,
  },
  buyValue: {
    x: date,
    y: [],
    name: name1[2],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.buyValue}<br>`,
  },
  sellValue: {
    x: date,
    y: [],
    name: name1[3],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.sellValue}<br>`,
  },
  numoftrades_buy: {
    x: date,
    y: [],
    name: name1[4],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.numoftrades_buy}<br>`,
  },
  numoftrades_sell: {
    x: date,
    y: [],
    name: name1[5],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.numoftrades_sell}<br>`,
  },
  avgBuy: {
    x: date,
    y: [],
    name: name1[6],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.avgBuy}<br>`,
  },
  avgSell: {
    x: date,
    y: [],
    name: name1[7],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list10.date}<br>%{y} :${arabicTranslation[0].list10.avgSell}<br>`,
  },
};

function prepareDataForCharts(Objects) {
  date = [];
  chartsDataArrays.buyVolume = [];
  chartsDataArrays.sellVolume = [];
  chartsDataArrays.buyValue = [];
  chartsDataArrays.sellValue = [];
  chartsDataArrays.numoftrades_buy = [];
  chartsDataArrays.numoftrades_sell = [];
  chartsDataArrays.avgBuy = [];
  chartsDataArrays.avgSell = [];
  Objects.map((el) => {
    date.push(el.date);
    chartsDataArrays.buyVolume.push(el.buyVolume);
    chartsDataArrays.sellVolume.push(el.sellVolume);
    chartsDataArrays.buyValue.push(el.buyValue);
    chartsDataArrays.sellValue.push(el.sellValue);
    chartsDataArrays.numoftrades_buy.push(el.numoftrades_buy);
    chartsDataArrays.numoftrades_sell.push(el.numoftrades_sell);
    chartsDataArrays.avgBuy.push(el.avgBuy);
    chartsDataArrays.avgSell.push(el.avgSell);
  });
}
function drawCharts(Objects, selectedItems) {
  let selectedType = $("#selectedType").val();
  if (selectedType != "scatter" && selectedType != "bar") {
    console.log("inside selectedType = ''");
    selectedType = "scatter";
  }
  prepareDataForCharts(Objects);
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
  let selectedItemsObjects = [];
  selectedItems.map((el) => {
    let temp = chartObjects[el];
    temp.x = date;
    temp.y = chartsDataArrays[el];
    temp.type = selectedType;
    selectedItemsObjects.push(temp);
  });
  let data1 = [];
  data1.push(...selectedItemsObjects);
  let layout = { barmode: "group", showlegend: true };
  Plotly.newPlot("chart1", data1, layout, { responsive: true });
}

function updateCharts(chartsData) {
  if ($("#selectCompany").val() && $("#selectNin").val()) {
    let selectedNinObj = customFilter.filterByNin(
      chartsData,
      $("#selectNin").val()
    );
    let selectedCompanyObj = customFilter.filterBySecurityCode(
      selectedNinObj,
      $("#selectCompany").val()
    );
    let selectChartItemsValue = $("#selectChartItems").val();

    if (selectedCompanyObj.length === 0 || selectChartItemsValue.length ===0) {
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
        { data: "date" },
        { data: "nin" },
        { data: "ninName" },
        { data: "buyVolume" },
        { data: "buyValue" },
        { data: "sellVolume" },
        { data: "sellValue" },
        { data: "numoftrades_buy" },
        { data: "numoftrades_sell" },
        { data: "avgBuy" },
        { data: "avgSell" },
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
          for (let key in chartsData[0].details[0]) {
            var option = document.createElement("option");
            option.value = key;
            option.innerHTML = arabicTranslation[0].list10[key];
            selectChartItems.appendChild(option);
          }
          var selectBoxElement = document.querySelector("#selectChartItems");
          dselect(selectBoxElement, {
            search: true,
          });
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
        $("#selectCompany,#selectedType,#selectChartItems").on("change", function () {
          updateCharts(chartsData);
        });
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
          updateCharts(chartsData);
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
