import * as customFilter from "./filters.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(
  Objects,
  startDate = null,
  endDate = null,
  selectedType = ""
) {
  console.log("selectedType is ", selectedType);
  const arabicTranslation = getArabicTranslation();

  let date = [],
    securityClosingPrice = [],
    sectorClosingPrice = [],
    sectorHigh = [],
    sectorLow = [];
  let data1 = [],
    data2 = [],
    data3 = [],
    data4 = [];

  startDate = startDate ? new Date(startDate) : null;
  endDate = endDate ? new Date(endDate) : null;

  if (startDate && isNaN(startDate.getTime())) {
    console.error("Invalid startDate");
    return;
  }

  if (endDate && isNaN(endDate.getTime())) {
    console.error("Invalid endDate");
    return;
  }

  if (selectedType != "scatter" && selectedType != "bar") {
    console.log("inside selectedType = ''");
    selectedType = "scatter";
  }
  console.log("selectedType is ", selectedType);

  Objects.map((ob) => {
    ob.map((inner) => {
      inner.details
        .filter((a) => {
          var date = new Date(a.date);
          return (
            (!startDate || date >= startDate) && (!endDate || date <= endDate)
          );
        })
        .sort(
          (objA, objB) =>
            Number(new Date(objA.date)) - Number(new Date(objB.date))
        )
        .map((el) => {
          date.push(el.date);
          securityClosingPrice.push(el.securityClosingPrice);
          sectorClosingPrice.push(el.sectorClosingPrice);
          sectorHigh.push(el.sectorHigh);
          sectorLow.push(el.sectorLow);
        });
      data1.push({
        x: date,
        y: sectorClosingPrice,
        name:
          arabicTranslation[0].list11.sectorClosingPrice + inner.securityName,
        type: selectedType,
        hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${arabicTranslation[0].list11.sectorClosingPrice}<br>`,
      });
      data2.push({
        x: date,
        y: sectorHigh,
        name: arabicTranslation[0].list11.sectorHigh + inner.securityName,
        type: selectedType,
        hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${arabicTranslation[0].list11.sectorHigh}<br>`,
      });
      data3.push({
        x: date,
        y: sectorLow,
        name: arabicTranslation[0].list11.sectorLow + inner.securityName,
        type: selectedType,
        hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${arabicTranslation[0].list11.sectorLow}<br>`,
      });
      data4.push({
        x: date,
        y: securityClosingPrice,
        name: arabicTranslation[0].list11.securityClosingPrice,
        type: selectedType,
        hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${arabicTranslation[0].list11.securityClosingPrice}<br>`,
      });
      date = [];
      sectorHigh = [];
      sectorLow = [];
      sectorClosingPrice = [];
      securityClosingPrice = [];
    });
  });

  Plotly.newPlot("chart1", data1, { responsive: true });
  Plotly.newPlot("chart2", data2, { responsive: true });
  Plotly.newPlot("chart3", data3, { responsive: true });
  Plotly.newPlot("chart4", data4, { responsive: true });
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
          [
            {
              details: [],
              securityCode: null,
              securityName: null,
              date: null,
              sector: null,
              securityClosingPrice: null,
              sectorClosingPrice: null,
              sectorHigh: null,
              sectorLow: null,
            },
          ],
        ];
        let selectedCompanyObj;
        let allSectors = [];
        let selectSectorElement = document.getElementById("selectSector");
        selectSectorElement.innerHTML = `<option value="" selected disabled hidden>إختر قطاع</option>`;
        let selectCompanyElement = document.getElementById("selectCompany");
        selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;
        dselect(selectCompanyElement, {
          search: true,
        });

        if (chartsData) {
          chartsData.forEach(function (item) {
            if (!allSectors.includes(item.sector)) {
              allSectors.push(item.sector);
            }
          });
        }

        if (allSectors) {
          allSectors.forEach((item) => {
            selectSectorElement.innerHTML += `<option value="${item}">${item}</option>`;
          });
          dselect(selectSectorElement, {
            search: true,
          });
        }
        $("#selectSector").on("change", function () {
          selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;

          chartsData.forEach((item) => {
            if (item.sector == $("#selectSector").val()) {
              selectCompanyElement.innerHTML += `<option value="${item.securityCode}">${item.securityCode} - ${item.securityName}</option>`;
            }
          });
          if ($("#selectCompany").val()) {
            $("#shape-selection").css({
              display: "none",
            });
            drawCharts(emptyObj);
          }
          dselect(selectCompanyElement, {
            search: true,
          });
        });

        $("#selectedType,#selectCompany, #startDate, #endDate").on(
          "change",
          function () {
            if ($("#selectCompany").val()) {
              selectedCompanyObj = customFilter.filterByMultiSecurityCode(
                chartsData,
                $("#selectCompany").val()
              );
              if (selectedCompanyObj.length === 0) {
                $("#shape-selection").css({
                  display: "none",
                });
                drawCharts(emptyObj);
              } else {
                $("#shape-selection").css({
                  justifyContent: "right",
                  display: "flex",
                });

                drawCharts(
                  selectedCompanyObj,
                  $("#startDate").val(),
                  $("#endDate").val(),
                  $("#selectedType").val()
                );
              }
            }
          }
        );
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
