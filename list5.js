﻿import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();

  let date = [],
    buyRemainingVolume = [],
    sellRemainingVolume = [],
    fullyExecutedBuy = [],
    partiallyExecutedBuy = [],
    fullyExecutedSell = [],
    partiallyExecutedSell = [];
  let name1 = [
    arabicTranslation[0].list5.buyRemainingVolume,
    arabicTranslation[0].list5.sellRemainingVolume,
  ];
  let name2 = [
    arabicTranslation[0].list5.fullyExecutedBuy,
    arabicTranslation[0].list5.partiallyExecutedBuy,
    arabicTranslation[0].list5.fullyExecutedSell,
    arabicTranslation[0].list5.partiallyExecutedSell,
  ];
  Objects.map((el) => {
    date.push(el.date);
    buyRemainingVolume.push(el.buyRemainingVolume);
    sellRemainingVolume.push(el.sellRemainingVolume);
    fullyExecutedBuy.push(el.fullyExecutedBuy);
    partiallyExecutedBuy.push(el.partiallyExecutedBuy);
    fullyExecutedSell.push(el.fullyExecutedSell);
    partiallyExecutedSell.push(el.partiallyExecutedSell);
  });
  let data1 = [],
    data2 = [];
  data1.push(
    {
      x: date,
      y: buyRemainingVolume,
      name: name1[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list5.date}<br>%{y} :${arabicTranslation[0].list5.buyRemainingVolume}<br>`,
    },
    {
      x: date,
      y: sellRemainingVolume,
      name: name1[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list5.date}<br>%{y} :${arabicTranslation[0].list5.sellRemainingVolume}<br>`,
    }
  );
  data2.push(
    {
      x: date,
      y: fullyExecutedBuy,
      name: name2[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list5.date}<br>%{y} :${arabicTranslation[0].list5.fullyExecutedBuy}<br>`,
    },
    {
      x: date,
      y: partiallyExecutedBuy,
      name: name2[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list5.date}<br>%{y} :${arabicTranslation[0].list5.partiallyExecutedBuy}<br>`,
    },
    {
      x: date,
      y: fullyExecutedSell,
      name: name2[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list5.date}<br>%{y} :${arabicTranslation[0].list5.fullyExecutedSell}<br>`,
    },
    {
      x: date,
      y: partiallyExecutedSell,
      name: name2[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list5.date}<br>%{y} :${arabicTranslation[0].list5.partiallyExecutedSell}<br>`,
    }
  );
  let layout = { barmode: "group", showlegend: true };

  Plotly.newPlot("chart1", data1, layout, { responsive: true });
  Plotly.newPlot("chart2", data2, layout, { responsive: true });
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
    $("#datatable6 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable6 thead");
    var table = $("#datatable6").DataTable({
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

              return $("#datatable6").DataTable().column(idx).visible();
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

              return $("#datatable6").DataTable().column(idx).visible();
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

              return $("#datatable6").DataTable().column(idx).visible();
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
        { data: "nbOfEnters" },
        { data: "buyRemainingVolume" },
        { data: "sellRemainingVolume" },
        { data: "fullyExecutedBuy" },
        { data: "partiallyExecutedBuy" },
        { data: "fullyExecutedSell" },
        { data: "partiallyExecutedSell" },
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
            countOfPartiallyExecutedTrades: null,
            countOfFullyExecutedTrades: null,
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
