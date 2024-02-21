import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";
const arabicTranslation = getArabicTranslation();
let securityNames = [];
let chartsDataArrays = {};
const listNumber = "4";
function prepareDataForCharts(Objects) {
  securityNames = [];
  for (let key in Objects[0]) {
    chartsDataArrays[key] = [];
  }
  Objects.map((el) => {
    securityNames.push(el.securityName);
    for (let key in el) {
      if (key !== "date" && key !== "securityName") {
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

  selectedItems.map((obj) => {
    selectedItemsObjects.push({
      x: securityNames,
      y: chartsDataArrays[obj],
      name: arabicTranslation[0]["list" + listNumber][obj],
      type: selectedType,
      hovertemplate: `${
        arabicTranslation[0]["list" + listNumber].securityName
      }: %{x}<br>%{y} :${arabicTranslation[0]["list" + listNumber][obj]}<br>`,
    });
  });
  let layout = { barmode: "group", showlegend: true };
  Plotly.newPlot("chart1", selectedItemsObjects, layout, { responsive: true });
}

function updateCharts(chartsData) {
  const emptyObj = [
    {
      securityName: null,
    },
  ];
  if ($("#selectNin").val() && $("#selectChartItems").val()) {
    let selectChartItemsValue = $("#selectChartItems").val();
    let selectedNinObj = customFilter.filterByNin(
      chartsData,
      $("#selectNin").val()
    );

    if (selectChartItemsValue.length === 0 || selectChartItemsValue === null) {
      $("#shape-selection").css({
        display: "none",
      });
      drawCharts(emptyObj, selectChartItemsValue);
    } else {
      $("#shape-selection").css({
        justifyContent: "center",
        display: "flex",
      });
      drawCharts(selectedNinObj[0].details, selectChartItemsValue);
    }
  }
}
// function drawCharts(Objects) {
//   let securityName = [],
//     nbOfBuyEnter_fullydisclosed = [],
//     nbOfSellEnter_fullydisclosed = [],
//     valueOfBuyEnter_partiallydiscolsed = [],
//     valueOfSellEnter_partiallydiscolsed = [],
//     valueOfBuyAmend_partiallydiscolsed = [],
//     valueOfSellAmend_partiallydiscolsed = [];
//   let name1 = [
//     arabicTranslation[0].list4.nbOfBuyEnter_fullydisclosed,
//     arabicTranslation[0].list4.nbOfSellEnter_fullydisclosed,
//   ];
//   let name2 = [
//     arabicTranslation[0].list4.valueOfBuyEnter_partiallydiscolsed,
//     arabicTranslation[0].list4.valueOfSellEnter_partiallydiscolsed,
//   ];
//   let name3 = [
//     arabicTranslation[0].list4.valueOfBuyAmend_partiallydiscolsed,
//     arabicTranslation[0].list4.valueOfSellAmend_partiallydiscolsed,
//   ];
//   Objects.map((el) => {
//     securityName.push(el.securityName);
//     nbOfBuyEnter_fullydisclosed.push(el.nbOfBuyEnter_fullydisclosed);
//     nbOfSellEnter_fullydisclosed.push(el.nbOfSellEnter_fullydisclosed);
//     valueOfBuyEnter_partiallydiscolsed.push(
//       el.valueOfBuyEnter_partiallydiscolsed
//     );
//     valueOfSellEnter_partiallydiscolsed.push(
//       el.valueOfSellEnter_partiallydiscolsed
//     );
//     valueOfBuyAmend_partiallydiscolsed.push(
//       el.valueOfBuyAmend_partiallydiscolsed
//     );
//     valueOfSellAmend_partiallydiscolsed.push(
//       el.valueOfSellAmend_partiallydiscolsed
//     );
//   });
//   let data1 = [];
//   let data2 = [];
//   let data3 = [];
//   data1.push(
//     {
//       x: securityName,
//       y: nbOfBuyEnter_fullydisclosed,
//       name: name1[0],
//       type: "bar",
//       hovertemplate: `${arabicTranslation[0].list2.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list4.buyOrg}<br>`,
//     },
//     {
//       x: securityName,
//       y: nbOfSellEnter_fullydisclosed,
//       name: name1[1],
//       type: "bar",
//       hovertemplate: `${arabicTranslation[0].list2.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list4.nbOfSellEnter_fullydisclosed}<br>`,
//     }
//   );
//   data2.push(
//     {
//       x: securityName,
//       y: valueOfBuyEnter_partiallydiscolsed,
//       name: name2[0],
//       type: "bar",
//       hovertemplate: `${arabicTranslation[0].list2.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list4.valueOfBuyEnter_partiallydiscolsed}<br>`,
//     },
//     {
//       x: securityName,
//       y: valueOfSellEnter_partiallydiscolsed,
//       name: name2[1],
//       type: "bar",
//       hovertemplate: `${arabicTranslation[0].list2.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list4.valueOfSellEnter_partiallydiscolsed}<br>`,
//     }
//   );
//   data3.push(
//     {
//       x: securityName,
//       y: valueOfBuyAmend_partiallydiscolsed,
//       name: name3[0],
//       type: "bar",
//       hovertemplate: `${arabicTranslation[0].list2.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list4.valueOfBuyAmend_partiallydiscolsed}<br>`,
//     },
//     {
//       x: securityName,
//       y: valueOfSellAmend_partiallydiscolsed,
//       name: name3[1],
//       type: "bar",
//       hovertemplate: `${arabicTranslation[0].list2.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list4.valueOfSellAmend_partiallydiscolsed}<br>`,
//     }
//   );
//   let layout = { barmode: "group", showlegend: true };

//   Plotly.newPlot("chart1", data1, layout, { responsive: true });
//   Plotly.newPlot("chart2", data2, layout, { responsive: true });
//   Plotly.newPlot("chart3", data3, layout, { responsive: true });
// }

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
    $("#datatable5 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable5 thead");
    var table = $("#datatable5").DataTable({
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

              return $("#datatable5").DataTable().column(idx).visible();
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

              return $("#datatable5").DataTable().column(idx).visible();
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

              return $("#datatable5").DataTable().column(idx).visible();
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
            "securityName",
            "date",
          ]);
        }
        $("#selectChartItems,#selectedType").on("change", function () {
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
