import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();

  let date = [],
    buyFillVolume = [],
    sellFillVolume = [],
    buyBeforeTotalValue = [],
    sellBeforeTotalValue = [],
    buyAfterTotalValue = [],
    sellAfterTotalValue = [],
    totalValue = [],
    chartValues = [];
  let name1 = [
    arabicTranslation[0].list7.buyFillVolume,
    arabicTranslation[0].list7.sellFillVolume,
  ];
  let name2 = [
    arabicTranslation[0].list7.buyBeforeTotalValue,
    arabicTranslation[0].list7.sellBeforeTotalValue,
  ];
  let name3 = [
    arabicTranslation[0].list7.buyAfterTotalValue,
    arabicTranslation[0].list7.sellAfterTotalValue,
  ];
  let name4 = [arabicTranslation[0].list7.totalValue];
  let name5 = [
    arabicTranslation[0].list7.percentageTotalValueBuy,
    arabicTranslation[0].list7.percentageBeforeTotalValueBuy,
    arabicTranslation[0].list7.percentageAfterTotalValueBuy,
    arabicTranslation[0].list7.percentageTotalValueSell,
    arabicTranslation[0].list7.percentageBeforeTotalValueSell,
    arabicTranslation[0].list7.percentageAfterTotalValueSell,
  ];
  Objects.map((el) => {
    date.push(el.date);
    buyFillVolume.push(el.buyFillVolume);
    sellFillVolume.push(el.sellFillVolume);
    buyBeforeTotalValue.push(el.buyBeforeTotalValue);
    sellBeforeTotalValue.push(el.sellBeforeTotalValue);
    buyAfterTotalValue.push(el.buyAfterTotalValue);
    sellAfterTotalValue.push(el.sellAfterTotalValue);
    totalValue.push(el.totalValue);
    chartValues.push(el.percentageTotalValueBuy);
    chartValues.push(el.percentageBeforeTotalValueBuy);
    chartValues.push(el.percentageAfterTotalValueBuy);
    chartValues.push(el.percentageTotalValueSell);
    chartValues.push(el.percentageBeforeTotalValueSell);
    chartValues.push(el.percentageAfterTotalValueSell);
  });
  let data1 = [],
    data2 = [],
    data3 = [],
    data4 = [];
  data1.push(
    {
      x: date,
      y: buyFillVolume,
      name: name1[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyFillVolume}<br>`,
    },
    {
      x: date,
      y: sellFillVolume,
      name: name1[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellFillVolume}<br>`,
    }
  );
  data2.push(
    {
      x: date,
      y: buyBeforeTotalValue,
      name: name2[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyBeforeTotalValue}<br>`,
    },
    {
      x: date,
      y: sellBeforeTotalValue,
      name: name2[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellBeforeTotalValue}<br>`,
    }
  );
  data3.push(
    {
      x: date,
      y: buyAfterTotalValue,
      name: name3[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyAfterTotalValue}<br>`,
    },
    {
      x: date,
      y: sellAfterTotalValue,
      name: name3[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellAfterTotalValue}<br>`,
    }
  );
  data4.push({
    x: date,
    y: totalValue,
    name: name4[0],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.totalValue}<br>`,
  });
  const data5 = [
    {
      values: chartValues,
      labels: name5,
      type: "pie",
    },
  ];
  let layout = { barmode: "group", showlegend: true };

  Plotly.newPlot("chart1", data1, layout, { responsive: true });
  Plotly.newPlot("chart2", data2, layout, { responsive: true });
  Plotly.newPlot("chart3", data3, layout, { responsive: true });
  Plotly.newPlot("chart4", data4, layout, { responsive: true });
  Plotly.newPlot("chart5", data5, {}, { responsive: true });
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
    $("#datatable8 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable8 thead");
    var table = $("#datatable8").DataTable({
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

              return $("#datatable8").DataTable().column(idx).visible();
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

              return $("#datatable8").DataTable().column(idx).visible();
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

              return $("#datatable8").DataTable().column(idx).visible();
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
        { data: "buyFillVolume" },
        { data: "sellFillVolume" },
        { data: "buyBeforeTotalValue" },
        { data: "sellBeforeTotalValue" },
        { data: "buyAfterTotalValue" },
        { data: "sellAfterTotalValue" },
        { data: "totalValue" },
        {
          data: "percentageTotalValueBuy",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageBeforeTotalValueBuy",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageAfterTotalValueBuy",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageTotalValueSell",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageBeforeTotalValueSell",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageAfterTotalValueSell",
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
            totalValue: null,
            beforeTotalValue: null,
            afterTotalValue: null,
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
