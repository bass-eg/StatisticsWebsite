import * as customFilter from "./filters.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();

  let date = [],
    securityClosingPrice = [],
    sectorClosingPrice = [],
    sectorHigh = [],
    sectorLow = [];
  let name1 = [arabicTranslation[0].list11.securityClosingPrice];
  let name2 = [
    arabicTranslation[0].list11.sectorClosingPrice,
    arabicTranslation[0].list11.sectorHigh,
    arabicTranslation[0].list11.sectorLow,
  ];

  Objects.map((el) => {
    date.push(el.date);
    securityClosingPrice.push(el.securityClosingPrice);
    sectorClosingPrice.push(el.sectorClosingPrice);
    sectorHigh.push(el.sectorHigh);
    sectorLow.push(el.sectorLow);
  });
  let data1 = [],
    data2 = [];
  data1.push(
    {
      x: date,
      y: sectorClosingPrice,
      name: name2[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${arabicTranslation[0].list11.sectorClosingPrice}<br>`,
    },
    {
      x: date,
      y: sectorHigh,
      name: name2[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${arabicTranslation[0].list11.sectorHigh}<br>`,
    },
    {
      x: date,
      y: sectorLow,
      name: name2[2],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${arabicTranslation[0].list11.sectorLow}<br>`,
    }
  );
  data2.push({
    x: date,
    y: securityClosingPrice,
    name: name1[0],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${arabicTranslation[0].list11.securityClosingPrice}<br>`,
  });

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
    $("#datatable16 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable16 thead");
    var table = $("#datatable16").DataTable({
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

              return $("#datatable16").DataTable().column(idx).visible();
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

              return $("#datatable16").DataTable().column(idx).visible();
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

              return $("#datatable16").DataTable().column(idx).visible();
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
        { data: "sector" },
        { data: "securityClosingPrice" },
        { data: "sectorClosingPrice" },
        { data: "sectorHigh" },
        { data: "sectorLow" },
      ],
      orderCellsTop: true,

      language: lang,
      rowReorder: {
        selector: "td:nth-child(2)",
      },
      responsive: true,
      keys: true,
      initComplete: function () {
        const emptyObj = [
          {
            date: null,
            countOfMatchingDays: null,
            securityClosingPrice: null,
            securityChange: null,
            securityPercentageChange: null,
            securityVolumeTraded: null,
            securityVolumeTradedSar: null,
            nbOfTrades: null,
            sectorClosingPrice: null,
            sectorVolumeTraded: null,
            sectorValueTraded: null,
            sectorNbOfTrades: null,
          },
        ];
        let selectedCompanyObj;
        let selectCompanyElement = document.getElementById("selectCompany");
        selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;
        if (chartsData) {
          chartsData.forEach(function (item) {
            selectCompanyElement.innerHTML += `<option value="${item.securityCode}">${item.securityCode} - ${item.securityName}</option>`;
          });

          var selectBoxElement = document.querySelector("#selectCompany");
          dselect(selectBoxElement, {
            search: true,
          });
        }

        $("#selectCompany").on("change", function () {
          if ($("#selectCompany").val()) {
            selectedCompanyObj = customFilter.filterBySecurityCode(
              chartsData,
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
