import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();
  let date = [],
    totalBuyValue = [],
    totalBuyVolume = [],
    totalSellValue = [],
    totalSellVolume = [],
    marketTotalBuyValue = [],
    marketTotalBuyVolume = [],
    marketTotalSellValue = [],
    marketTotalSellVolume = [];

  let name1 = [
    arabicTranslation[0].list9A.totalBuyValue,
    arabicTranslation[0].list9A.totalSellValue,
  ];
  let name2 = [
    arabicTranslation[0].list9A.totalBuyVolume,
    arabicTranslation[0].list9A.totalSellVolume,
  ];
  let name3 = [
    arabicTranslation[0].list9A.marketTotalBuyValue,
    arabicTranslation[0].list9A.marketTotalSellValue,
  ];
  let name4 = [
    arabicTranslation[0].list9A.marketTotalBuyVolume,
    arabicTranslation[0].list9A.marketTotalSellVolume,
  ];
  Objects.map((el) => {
    date.push(el.date);
    totalBuyValue.push(el.totalBuyValue);
    totalBuyVolume.push(el.totalBuyVolume);
    totalSellValue.push(el.totalSellValue);
    totalSellVolume.push(el.totalSellVolume);
    marketTotalBuyValue.push(el.marketTotalBuyValue);
    marketTotalBuyVolume.push(el.marketTotalBuyVolume);
    marketTotalSellValue.push(el.marketTotalSellValue);
    marketTotalSellVolume.push(el.marketTotalSellVolume);
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
  ];
  let data1 = [],
    data2 = [],
    data3 = [],
    data4 = [];

  data1.push(
    {
      x: date,
      y: totalBuyValue,
      name: name1[0],
      type: "bar",
      marker: {
        color: colors[0],
      },
      hovertemplate: `%{x} :${arabicTranslation[0].list9A.date}<br>%{y} :${arabicTranslation[0].list9A.totalBuyValue}<br>`,
    },
    {
      x: date,
      y: totalSellValue,
      name: name1[1],
      type: "bar",
      marker: {
        color: colors[1],
      },
      hovertemplate: `%{x} :${arabicTranslation[0].list9A.date}<br>%{y} :${arabicTranslation[0].list9A.totalSellValue}<br>`,
    }
  );

  data2.push(
    {
      x: date,
      y: totalBuyVolume,
      name: name2[0],
      type: "bar",
      marker: {
        color: colors[2],
      },
      hovertemplate: `%{x} :${arabicTranslation[0].list9A.date}<br>%{y} :${arabicTranslation[0].list9A.totalBuyVolume}<br>`,
    },
    {
      x: date,
      y: totalSellVolume,
      name: name2[1],
      type: "bar",
      marker: {
        color: colors[3],
      },
      hovertemplate: `%{x} :${arabicTranslation[0].list9A.date}<br>%{y} :${arabicTranslation[0].list9A.totalSellVolume}<br>`,
    }
  );

  data3.push(
    {
      x: date,
      y: marketTotalBuyValue,
      name: name3[0],
      type: "bar",
      marker: {
        color: colors[4],
      },
      hovertemplate: `%{x} :${arabicTranslation[0].list9A.date}<br>%{y} :${arabicTranslation[0].list9A.marketTotalBuyValue}<br>`,
    },
    {
      x: date,
      y: marketTotalSellValue,
      name: name3[1],
      type: "bar",
      marker: {
        color: colors[5],
      },
      hovertemplate: `%{x} :${arabicTranslation[0].list9A.date}<br>%{y} :${arabicTranslation[0].list9A.marketTotalSellValue}<br>`,
    }
  );

  data4.push(
    {
      x: date,
      y: marketTotalBuyVolume,
      name: name4[0],
      type: "bar",
      marker: {
        color: colors[6],
      },
      hovertemplate: `%{x} :${arabicTranslation[0].list9A.date}<br>%{y} :${arabicTranslation[0].list9A.marketTotalBuyVolume}<br>`,
    },
    {
      x: date,
      y: marketTotalSellVolume,
      name: name4[1],
      type: "bar",
      marker: {
        color: colors[7],
      },
      hovertemplate: `%{x} :${arabicTranslation[0].list9A.date}<br>%{y} :${arabicTranslation[0].list9A.marketTotalSellVolume}<br>`,
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
      columns: [
        { data: "securityCode" },
        { data: "securityName" },
        { data: "nin" },
        { data: "ninName" },
        { data: "date" },
        { data: "totalBuyVolume" },
        { data: "totalBuyValue" },
        { data: "totalSellVolume" },
        { data: "totalSellValue" },
        { data: "marketTotalBuyValue" },
        { data: "marketTotalBuyVolume" },
        { data: "marketTotalSellValue" },
        { data: "marketTotalSellVolume" },
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
