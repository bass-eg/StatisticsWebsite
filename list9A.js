import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();
  let date = [],
    buyBeforeFillVolume = [],
    buyBeforeTotalValue = [],
    buyDuringFillVolume = [],
    buyDuringTotalValue = [],
    buyAfterFillVolume = [],
    buyAfterTotalValue = [],
    sellBeforeFillVolume = [],
    sellBeforeTotalValue = [],
    sellDuringFillVolume = [],
    sellDuringTotalValue = [],
    sellAfterFillVolume = [],
    sellAfterTotalValue = [],

    buyEnterBeforeTotalValue = [],
    buyBeforeOrgVolume = [],
    buyEnterDuringTotalValue = [],
    buyDuringOrgVolume = [],
    buyEnterAfterTotalValue = [],
    buyAfterOrgVolume = [],
    sellEnterBeforeTotalValue = [],
    sellBeforeOrgVolume = [],
    sellEnterDuringTotalValue = [],
    sellDuringOrgVolume = [],
    sellEnterAfterTotalValue = [],
    sellAfterOrgVolume = [];
  let name1 = [
     arabicTranslation.buyBeforeFillVolume,
     arabicTranslation.buyBeforeTotalValue,
     arabicTranslation.buyDuringFillVolume,
     arabicTranslation.buyDuringTotalValue,
     arabicTranslation.buyAfterFillVolume,
     arabicTranslation.buyAfterTotalValue,
     arabicTranslation.sellBeforeFillVolume,
     arabicTranslation.sellBeforeTotalValue,
     arabicTranslation.sellDuringFillVolume,
     arabicTranslation.sellDuringTotalValue,
     arabicTranslation.sellAfterFillVolume,
     arabicTranslation.sellAfterTotalValue,
  ];
  let name2 = [
     arabicTranslation.buyEnterBeforeTotalValue,
     arabicTranslation.buyBeforeOrgVolume,
     arabicTranslation.buyEnterDuringTotalValue,
     arabicTranslation.buyDuringOrgVolume,
     arabicTranslation.buyEnterAfterTotalValue,
     arabicTranslation.buyAfterOrgVolume,
     arabicTranslation.sellEnterBeforeTotalValue,
     arabicTranslation.sellBeforeOrgVolume,
     arabicTranslation.sellEnterDuringTotalValue,
     arabicTranslation.sellDuringOrgVolume,
     arabicTranslation.sellEnterAfterTotalValue,
     arabicTranslation.sellAfterOrgVolume,
  ];
  Objects.map((el) => {
    date.push(el.date);
    buyBeforeFillVolume.push(el.buyBeforeFillVolume);
    buyBeforeTotalValue.push(el.buyBeforeTotalValue);
    buyDuringFillVolume.push(el.buyDuringFillVolume);
    buyDuringTotalValue.push(el.buyDuringTotalValue);
    buyAfterFillVolume.push(el.buyAfterFillVolume);
    buyAfterTotalValue.push(el.buyAfterTotalValue);
    sellBeforeFillVolume.push(el.sellBeforeFillVolume);
    sellBeforeTotalValue.push(el.sellBeforeTotalValue);
    sellDuringFillVolume.push(el.sellDuringFillVolume);
    sellDuringTotalValue.push(el.sellDuringTotalValue);
    sellAfterFillVolume.push(el.sellAfterFillVolume);
    sellAfterTotalValue.push(el.sellAfterTotalValue);

    buyEnterBeforeTotalValue.push(el.buyEnterBeforeTotalValue);
    buyBeforeOrgVolume.push(el.buyBeforeOrgVolume);
    buyEnterDuringTotalValue.push(el.buyEnterDuringTotalValue);
    buyDuringOrgVolume.push(el.buyDuringOrgVolume);
    buyEnterAfterTotalValue.push(el.buyEnterAfterTotalValue);
    buyAfterOrgVolume.push(el.buyAfterOrgVolume);
    sellEnterBeforeTotalValue.push(el.sellEnterBeforeTotalValue);
    sellBeforeOrgVolume.push(el.sellBeforeOrgVolume);
    sellEnterDuringTotalValue.push(el.sellEnterDuringTotalValue);
    sellDuringOrgVolume.push(el.sellDuringOrgVolume);
    sellEnterAfterTotalValue.push(el.sellEnterAfterTotalValue);
    sellAfterOrgVolume.push(el.sellAfterOrgVolume);
  });
  const colors = [
    "#1f77b4", //blue
    "#17becf", //aqua
    "#ff7f0e", //orange
    "#d62728", //red
    "#228B22", //green
    "#2F4F4F", //lawn-green
    "#9467bd", //violet
    "#e377c2", //pink
    "#8c564b", //brown
    "#7f7f7f", //grey
    "#1f77b4", //blue
    "#17becf", //aqua
    "#ff7f0e", //orange
    "#d62728", //red
    "#228B22", //green
    "#2F4F4F", //lawn-green
    "#9467bd", //violet
    "#e377c2", //pink
    "#8c564b", //brown
    "#7f7f7f", //grey
  ];
  let data1 = [],
    data2 = [];
  data1.push(
    {
      x: date,
      y: buyBeforeFillVolume,
      name: name1[0],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforeFillVolume}<br>`,
    },
    {
      x: date,
      y: buyBeforeTotalValue,
      name: name1[1],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforeTotalValue}<br>`,
    },
    {
      x: date,
      y: buyDuringFillVolume,
      name: name1[2],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringFillVolume}<br>`,
    },
    {
      x: date,
      y: buyDuringTotalValue,
      name: name1[3],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringTotalValue}<br>`,
    },
    {
      x: date,
      y: buyAfterFillVolume,
      name: name1[4],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterFillVolume}<br>`,
    },
    {
      x: date,
      y: buyAfterTotalValue,
      name: name1[5],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterTotalValue}<br>`,
    },
    {
      x: date,
      y: sellBeforeFillVolume,
      name: name1[6],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforeFillVolume}<br>`,
    },
    {
      x: date,
      y: sellBeforeTotalValue,
      name: name1[7],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforeTotalValue}<br>`,
    },
    {
      x: date,
      y: sellDuringFillVolume,
      name: name1[8],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringFillVolume}<br>`,
    },
    {
      x: date,
      y: sellDuringTotalValue,
      name: name1[9],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringTotalValue}<br>`,
    },
    {
      x: date,
      y: sellAfterFillVolume,
      name: name1[10],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterFillVolume}<br>`,
    },
    {
      x: date,
      y: sellAfterTotalValue,
      name: name1[11],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterTotalValue}<br>`,
    },
  );

  data2.push(
    {
      x: date,
      y: buyEnterBeforeTotalValue,
      name: name2[0],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyEnterBeforeTotalValue}<br>`,
    },
    {
      x: date,
      y: buyBeforeOrgVolume,
      name: name2[1],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforeOrgVolume}<br>`,
    },
    {
      x: date,
      y: buyEnterDuringTotalValue,
      name: name2[2],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyEnterDuringTotalValue}<br>`,
    },
    {
      x: date,
      y: buyDuringOrgVolume,
      name: name2[3],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringOrgVolume}<br>`,
    },
    {
      x: date,
      y: buyEnterAfterTotalValue,
      name: name2[4],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyEnterAfterTotalValue}<br>`,
    },
    {
      x: date,
      y: buyAfterOrgVolume,
      name: name2[5],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterOrgVolume}<br>`,
    },
    {
      x: date,
      y: sellEnterBeforeTotalValue,
      name: name2[6],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellEnterBeforeTotalValue}<br>`,
    },
    {
      x: date,
      y: sellBeforeOrgVolume,
      name: name2[colors.length % 7],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforeOrgVolume}<br>`,
    },
    {
      x: date,
      y: sellEnterDuringTotalValue,
      name: name2[8],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellEnterDuringTotalValue}<br>`,
    },
    {
      x: date,
      y: sellDuringOrgVolume,
      name: name2[9],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringOrgVolume}<br>`,
    },
    {
      x: date,
      y: sellEnterAfterTotalValue,
      name: name2[10],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellEnterAfterTotalValue}<br>`,
    },
    {
      x: date,
      y: sellAfterOrgVolume,
      name: name2[11],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterOrgVolume}<br>`,
    },
  );

  let layout = { barmode: "group", showlegend: true };
  Plotly.newPlot("chart1", data1, layout, { responsive: true });
  Plotly.newPlot("chart2", data2, layout, { responsive: true });
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
    $("#datatable9 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable9 thead");
    var table = $("#datatable9").DataTable({
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

              return $("#datatable9").DataTable().column(idx).visible();
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

              return $("#datatable9").DataTable().column(idx).visible();
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

              return $("#datatable9").DataTable().column(idx).visible();
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
            totalBuyValue: null,
            totalSellValue: null,
            totalSellVolume: null,
            totalBuyVolume: null,
            marketTotalBuyValue: null,
            marketTotalSellValue: null,
            marketTotalSellVolume: null,
            marketTotalBuyVolume: null,
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
