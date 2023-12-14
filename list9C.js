import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();

  let date = [],
    firstPrice = [],
    lastPrice = [],
    maxPrice = [],
    minPrice = [],
    beforeViolationFirstPrice = [],
    beforeViolationLastPrice = [],
    beforeViolationMaxPrice = [],
    beforeViolationMinPrice = [],
    afterViolationFirstPrice = [],
    afterViolationLastPrice = [],
    afterViolationMaxPrice = [],
    afterViolationMinPrice = [];
  let name1 = [
    arabicTranslation[0].list9C.firstPrice,
    arabicTranslation[0].list9C.lastPrice,
    arabicTranslation[0].list9C.maxPrice,
    arabicTranslation[0].list9C.minPrice,
    arabicTranslation[0].list9C.beforeViolationFirstPrice,
    arabicTranslation[0].list9C.beforeViolationLastPrice,
    arabicTranslation[0].list9C.beforeViolationMaxPrice,
    arabicTranslation[0].list9C.beforeViolationMinPrice,
    arabicTranslation[0].list9C.afterViolationFirstPrice,
    arabicTranslation[0].list9C.afterViolationLastPrice,
    arabicTranslation[0].list9C.afterViolationMaxPrice,
    arabicTranslation[0].list9C.afterViolationMinPrice,
  ];
  Objects.map((el) => {
    date.push(el.date);
    firstPrice.push(el.firstPrice);
    lastPrice.push(el.lastPrice);
    maxPrice.push(el.maxPrice);
    minPrice.push(el.minPrice);
    beforeViolationFirstPrice.push(el.beforeViolationFirstPrice);
    beforeViolationLastPrice.push(el.beforeViolationLastPrice);
    beforeViolationMaxPrice.push(el.beforeViolationMaxPrice);
    beforeViolationMinPrice.push(el.beforeViolationMinPrice);
    afterViolationFirstPrice.push(el.afterViolationFirstPrice);
    afterViolationLastPrice.push(el.afterViolationLastPrice);
    afterViolationMaxPrice.push(el.afterViolationMaxPrice);
    afterViolationMinPrice.push(el.afterViolationMinPrice);
  });
  let data1 = [];
  const { layout: layout1, config: config1 } = helperFunctions.getMinMax(
    firstPrice,
    lastPrice,
    maxPrice,
    minPrice,
    beforeViolationFirstPrice,
    beforeViolationLastPrice,
    beforeViolationMaxPrice,
    beforeViolationMinPrice,
    afterViolationFirstPrice,
    afterViolationLastPrice,
    afterViolationMaxPrice,
    afterViolationMinPrice
  );
  data1.push(
    {
      x: date,
      y: firstPrice,
      name: name1[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.firstPrice}<br>`,
    },
    {
      x: date,
      y: lastPrice,
      name: name1[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.lastPrice}<br>`,
    },
    {
      x: date,
      y: maxPrice,
      name: name1[2],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.maxPrice}<br>`,
    },
    {
      x: date,
      y: minPrice,
      name: name1[3],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.minPrice}<br>`,
    },
    {
      x: date,
      y: beforeViolationFirstPrice,
      name: name1[4],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.beforeViolationFirstPrice}<br>`,
    },
    {
      x: date,
      y: beforeViolationLastPrice,
      name: name1[5],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.beforeViolationLastPrice}<br>`,
    },
    {
      x: date,
      y: beforeViolationMaxPrice,
      name: name1[6],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.beforeViolationMaxPrice}<br>`,
    },
    {
      x: date,
      y: beforeViolationMinPrice,
      name: name1[7],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.beforeViolationMinPrice}<br>`,
    },
    {
      x: date,
      y: afterViolationFirstPrice,
      name: name1[8],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.afterViolationFirstPrice}<br>`,
    },
    {
      x: date,
      y: afterViolationLastPrice,
      name: name1[9],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.afterViolationLastPrice}<br>`,
    },
    {
      x: date,
      y: afterViolationMaxPrice,
      name: name1[10],
      type: "bar",
      marker: {
        color: "indigo",
      },
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.afterViolationMaxPrice}<br>`,
    },
    {
      x: date,
      y: afterViolationMinPrice,
      name: name1[11],
      type: "bar",
      marker: {
        color: "deeppink",
      },
      hovertemplate: `%{x} :${arabicTranslation[0].list9C.date}<br>%{y} :${arabicTranslation[0].list9C.afterViolationMinPrice}<br>`,
    }
  );

  Plotly.newPlot("chart1", data1, layout1, config1);
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
      columns: [
        { data: "securityCode" },
        { data: "securityName" },
        { data: "nin" },
        { data: "ninName" },
        { data: "date" },
        { data: "firstPrice" },
        { data: "lastPrice" },
        { data: "maxPrice" },
        { data: "minPrice" },
        { data: "beforeViolationFirstPrice" },
        { data: "beforeViolationLastPrice" },
        { data: "beforeViolationMaxPrice" },
        { data: "beforeViolationMinPrice" },
        { data: "afterViolationFirstPrice" },
        { data: "afterViolationLastPrice" },
        { data: "afterViolationMaxPrice" },
        { data: "afterViolationMinPrice" },
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
            firstPrice: null,
            lastPrice: null,
            maxPrice: null,
            minPrice: null,
            beforeViolationFirstPrice: null,
            beforeViolationLastPrice: null,
            beforeViolationMaxPrice: null,
            beforeViolationMinPrice: null,
            afterViolationFirstPrice: null,
            afterViolationLastPrice: null,
            afterViolationMaxPrice: null,
            afterViolationMinPrice: null,
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
