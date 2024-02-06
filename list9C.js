import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();

  let date = [],
    buyBeforeFirstPrice = [],
    buyBeforeLastPrice = [],
    buyBeforeMinPrice = [],
    buyBeforeMaxPrice = [],
    buyDuringFirstPrice = [],
    buyDuringLastPrice = [],
    buyDuringMinPrice = [],
    buyDuringMaxPrice = [],
    buyAfterFirstPrice = [],
    buyAfterLastPrice = [],
    buyAfterMinPrice = [],
    buyAfterMaxPrice = [],
    sellBeforeFirstPrice = [],
    sellBeforeLastPrice = [],
    sellBeforeMinPrice = [],
    sellBeforeMaxPrice = [],
    sellDuringFirstPrice = [],
    sellDuringLastPrice = [],
    sellDuringMinPrice = [],
    sellDuringMaxPrice = [],
    sellAfterFirstPrice = [],
    sellAfterLastPrice = [],
    sellAfterMinPrice = [],
    sellAfterMaxPrice = [];
  let name1 = [
     arabicTranslation.buyBeforeFirstPrice,
     arabicTranslation.buyBeforeLastPrice,
     arabicTranslation.buyBeforeMinPrice,
     arabicTranslation.buyBeforeMaxPrice,
     arabicTranslation.buyDuringFirstPrice,
     arabicTranslation.buyDuringLastPrice,
     arabicTranslation.buyDuringMinPrice,
     arabicTranslation.buyDuringMaxPrice,
     arabicTranslation.buyAfterFirstPrice,
     arabicTranslation.buyAfterLastPrice,
     arabicTranslation.buyAfterMinPrice,
     arabicTranslation.buyAfterMaxPrice,
  ];
  let name2 = [
     arabicTranslation.sellBeforeLastPrice,
     arabicTranslation.sellBeforeFirstPrice,
     arabicTranslation.sellBeforeMinPrice,
     arabicTranslation.sellBeforeMaxPrice,
     arabicTranslation.sellDuringFirstPrice,
     arabicTranslation.sellDuringLastPrice,
     arabicTranslation.sellDuringMinPrice,
     arabicTranslation.sellDuringMaxPrice,
     arabicTranslation.sellAfterFirstPrice,
     arabicTranslation.sellAfterLastPrice,
     arabicTranslation.sellAfterMinPrice,
     arabicTranslation.sellAfterMaxPrice,
  ];
  Objects.map((el) => {
    date.push(el.date);
    buyBeforeFirstPrice.push(el.buyBeforeFirstPrice);
    buyBeforeLastPrice.push(el.buyBeforeLastPrice);
    buyBeforeMinPrice.push(el.buyBeforeMinPrice);
    buyBeforeMaxPrice.push(el.buyBeforeMaxPrice);
    buyDuringFirstPrice.push(el.buyDuringFirstPrice);
    buyDuringLastPrice.push(el.buyDuringLastPrice);
    buyDuringMinPrice.push(el.buyDuringMinPrice);
    buyDuringMaxPrice.push(el.buyDuringMaxPrice);
    buyAfterFirstPrice.push(el.buyAfterFirstPrice);
    buyAfterLastPrice.push(el.buyAfterLastPrice);
    buyAfterMinPrice.push(el.buyAfterMinPrice);
    buyAfterMaxPrice.push(el.buyAfterMaxPrice);
    sellBeforeFirstPrice.push(el.sellBeforeFirstPrice);
    sellBeforeLastPrice.push(el.sellBeforeLastPrice);
    sellBeforeMinPrice.push(el.sellBeforeMinPrice);
    sellBeforeMaxPrice.push(el.sellBeforeMaxPrice);
    sellDuringFirstPrice.push(el.sellDuringFirstPrice);
    sellDuringLastPrice.push(el.sellDuringLastPrice);
    sellDuringMinPrice.push(el.sellDuringMinPrice);
    sellDuringMaxPrice.push(el.sellDuringMaxPrice);
    sellAfterFirstPrice.push(el.sellAfterFirstPrice);
    sellAfterLastPrice.push(el.sellAfterLastPrice);
    sellAfterMinPrice.push(el.sellAfterMinPrice);
    sellAfterMaxPrice.push(el.sellAfterMaxPrice);
  });
  let data1 = [];
  let data2 = [];
  const { layout: layout1, config: config1 } = helperFunctions.getMinMax(
    buyBeforeFirstPrice,
    buyBeforeLastPrice,
    buyBeforeMinPrice,
    buyBeforeMaxPrice,
    buyDuringFirstPrice,
    buyDuringLastPrice,
    buyDuringMinPrice,
    buyDuringMaxPrice,
    buyAfterFirstPrice,
    buyAfterLastPrice,
    buyAfterMinPrice,
    buyAfterMaxPrice
  );
  const { layout: layout2, config: config2 } = helperFunctions.getMinMax(
    sellBeforeFirstPrice,
    sellBeforeLastPrice,
    sellBeforeMinPrice,
    sellBeforeMaxPrice,
    sellDuringFirstPrice,
    sellDuringLastPrice,
    sellDuringMinPrice,
    sellDuringMaxPrice,
    sellAfterFirstPrice,
    sellAfterLastPrice,
    sellAfterMinPrice,
    sellAfterMaxPrice
  );
  data1.push(
    {
      x: date,
      y: buyBeforeFirstPrice,
      name: name1[0],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforeFirstPrice}<br>`,
    },
    {
      x: date,
      y: buyBeforeLastPrice,
      name: name1[1],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforeLastPrice}<br>`,
    },
    {
      x: date,
      y: buyBeforeMinPrice,
      name: name1[2],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforeMinPrice}<br>`,
    },
    {
      x: date,
      y: buyBeforeMaxPrice,
      name: name1[3],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforeMaxPrice}<br>`,
    },
    {
      x: date,
      y: buyDuringFirstPrice,
      name: name1[4],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringFirstPrice}<br>`,
    },
    {
      x: date,
      y: buyDuringLastPrice,
      name: name1[5],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringLastPrice}<br>`,
    },
    {
      x: date,
      y: buyDuringMinPrice,
      name: name1[6],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringMinPrice}<br>`,
    },
    {
      x: date,
      y: buyDuringMaxPrice,
      name: name1[7],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringMaxPrice}<br>`,
    },
    {
      x: date,
      y: buyAfterFirstPrice,
      name: name1[8],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterFirstPrice}<br>`,
    },
    {
      x: date,
      y: buyAfterLastPrice,
      name: name1[9],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterLastPrice}<br>`,
    },
    {
      x: date,
      y: buyAfterMinPrice,
      name: name1[10],
      type: "bar",
      marker: {
        color: "indigo",
      },
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterMinPrice}<br>`,
    },
    {
      x: date,
      y: buyAfterMaxPrice,
      name: name1[11],
      type: "bar",
      marker: {
        color: "deeppink",
      },
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterMaxPrice}<br>`,
    }
  );
  data2.push(
    {
      x: date,
      y: sellBeforeFirstPrice,
      name: name2[0],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforeFirstPrice}<br>`,
    },
    {
      x: date,
      y: sellBeforeLastPrice,
      name: name2[1],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforeLastPrice}<br>`,
    },
    {
      x: date,
      y: sellBeforeMinPrice,
      name: name2[2],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforeMinPrice}<br>`,
    },
    {
      x: date,
      y: sellBeforeMaxPrice,
      name: name2[3],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforeMaxPrice}<br>`,
    },
    {
      x: date,
      y: sellDuringFirstPrice,
      name: name2[4],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringFirstPrice}<br>`,
    },
    {
      x: date,
      y: sellDuringLastPrice,
      name: name2[5],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringLastPrice}<br>`,
    },
    {
      x: date,
      y: sellDuringMinPrice,
      name: name2[6],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringMinPrice}<br>`,
    },
    {
      x: date,
      y: sellDuringMaxPrice,
      name: name2[7],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringMaxPrice}<br>`,
    },
    {
      x: date,
      y: sellAfterFirstPrice,
      name: name2[8],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterFirstPrice}<br>`,
    },
    {
      x: date,
      y: sellAfterLastPrice,
      name: name2[9],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterLastPrice}<br>`,
    },
    {
      x: date,
      y: sellAfterMinPrice,
      name: name2[10],
      type: "bar",
      marker: {
        color: "indigo",
      },
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterMinPrice}<br>`,
    },
    {
      x: date,
      y: sellAfterMaxPrice,
      name: name2[11],
      type: "bar",
      marker: {
        color: "deeppink",
      },
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterMaxPrice}<br>`,
    }
  );

  Plotly.newPlot("chart1", data1, layout1, config1);
  Plotly.newPlot("chart2", data2, layout2, config2);
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
    $("#datatable11 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable11 thead");
    var table = $("#datatable11").DataTable({
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

              return $("#datatable11").DataTable().column(idx).visible();
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

              return $("#datatable11").DataTable().column(idx).visible();
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

              return $("#datatable11").DataTable().column(idx).visible();
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
            buyBeforeFirstPrice: null,
            buyBeforeLastPrice: null,
            buyBeforeMinPrice: null,
            buyBeforeMaxPrice: null,
            buyDuringFirstPrice: null,
            buyDuringLastPrice: null,
            buyDuringMinPrice: null,
            buyDuringMaxPrice: null,
            buyAfterFirstPrice: null,
            buyAfterLastPrice: null,
            buyAfterMinPrice: null,
            buyAfterMaxPrice: null,
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
