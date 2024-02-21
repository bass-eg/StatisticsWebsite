import * as customFilter from "./filters.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(
  Objects,
  startDate = null,
  endDate = null,
  selectedType = ""
) {
  const arabicTranslation = getArabicTranslation();

  let date = [],
    // securityClosingPrice = [],
    // sectorClosingPrice = [],
    // sectorHigh = [],
    // sectorLow = []
    closingPrice = [],
    volumeTraded = [],
    valueTraded = [],
    numberOfTrades = [];
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
    selectedType = "scatter";
  }

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
          closingPrice.push(
            inner.securityCode ? el.securityClosingPrice : el.sectorClosingPrice
          );
          volumeTraded.push(
            inner.securityCode ? el.securityVolumeTraded : el.sectorVolumeTraded
          );
          valueTraded.push(
            inner.securityCode ? el.securityValueTraded : el.sectorValueTraded
          );
          numberOfTrades.push(
            inner.securityCode
              ? el.securityNumberOfTrades
              : el.sectorNumberOfTrades
          );
        });
      data1.push({
        x: date,
        y: closingPrice,
        name: inner.securityCode
          ? arabicTranslation[0].list11ChartsLabels.ClosingPrice +
            " " +
            inner.securityName
          : arabicTranslation[0].list11ChartsLabels.ClosingPrice +
            " " +
            inner.sector,
        type: selectedType,
        hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${
          inner.securityCode
            ? arabicTranslation[0].list11ChartsLabels.ClosingPrice +
              " " +
              inner.securityName
            : arabicTranslation[0].list11ChartsLabels.ClosingPrice +
              " " +
              inner.sector
        }<br>`,
      });
      data2.push({
        x: date,
        y: volumeTraded,
        name: inner.securityCode
          ? arabicTranslation[0].list11ChartsLabels.VolumeTraded +
            " " +
            inner.securityName
          : arabicTranslation[0].list11ChartsLabels.VolumeTraded +
            " " +
            inner.sector,
        type: selectedType,
        hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${
          inner.securityCode
            ? arabicTranslation[0].list11ChartsLabels.VolumeTraded +
              " " +
              inner.securityName
            : arabicTranslation[0].list11ChartsLabels.VolumeTraded +
              " " +
              inner.sector
        }<br>`,
      });
      data3.push({
        x: date,
        y: valueTraded,
        name: inner.securityCode
          ? arabicTranslation[0].list11ChartsLabels.ValueTraded +
            " " +
            inner.securityName
          : arabicTranslation[0].list11ChartsLabels.ValueTraded +
            " " +
            inner.sector,
        type: selectedType,
        hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${
          inner.securityCode
            ? arabicTranslation[0].list11ChartsLabels.ValueTraded +
              " " +
              inner.securityName
            : arabicTranslation[0].list11ChartsLabels.ValueTraded +
              " " +
              inner.sector
        }<br>`,
      });
      data4.push({
        x: date,
        y: numberOfTrades,
        name: inner.securityCode
          ? arabicTranslation[0].list11ChartsLabels.NumberOfTrades +
            " " +
            inner.securityName
          : arabicTranslation[0].list11ChartsLabels.NumberOfTrades +
            " " +
            inner.sector,
        type: selectedType,
        hovertemplate: `%{x} :${arabicTranslation[0].list11.date}<br>%{y} :${
          inner.securityCode
            ? arabicTranslation[0].list11ChartsLabels.NumberOfTrades +
              " " +
              inner.securityName
            : arabicTranslation[0].list11ChartsLabels.NumberOfTrades +
              " " +
              inner.sector
        }<br>`,
      });
      date = [];
      closingPrice = [];
      volumeTraded = [];
      valueTraded = [];
      numberOfTrades = [];
    });
  });
  let layout1 = { barmode: "group", showlegend: true };

  Plotly.newPlot("chart1", data1, layout1, { responsive: true });
  Plotly.newPlot("chart2", data2, layout1, { responsive: true });
  Plotly.newPlot("chart3", data3, layout1, { responsive: true });
  Plotly.newPlot("chart4", data4, layout1, { responsive: true });
}

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
        { data: "securityVolumeTraded" },
        { data: "securityValueTraded" },
        { data: "securityNumberOfTrades" },
        { data: "sectorClosingPrice" },
        { data: "sectorVolumeTraded" },
        { data: "sectorValueTraded" },
        { data: "sectorNumberOfTrades" },
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
              securityVolumeTraded: null,
              securityValueTraded: null,
              securityNumberOfTrades: null,
              sectorClosingPrice: null,
              sectorVolumeTraded: null,
              sectorValueTraded: null,
              sectorNumberOfTrades: null,
            },
          ],
        ];
        let selectedCompanyObj;
        let allSectors = [];
        let allSecurities = [];
        let selectSectorElement = document.getElementById("selectSector");
        selectSectorElement.innerHTML = `<option value="" selected disabled hidden>إختر قطاع</option>`;
        let selectCompanyElement = document.getElementById("selectCompany");
        selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;
        dselect(selectCompanyElement, {
          search: true,
        });

        if (chartsData.securities) {
          chartsData.securities.forEach(function (item) {
            let obj = {
              name: item.securityName,
              code: item.securityCode,
            };
            if (!allSecurities.includes(obj)) {
              allSecurities.push(obj);
            }
          });
        }
        if (chartsData.sectors) {
          chartsData.sectors.forEach(function (item) {
            if (!allSectors.includes(item.sector)) {
              allSectors.push(item.sector);
            }
          });
        }

        if (allSecurities) {
          allSecurities.forEach((item) => {
            selectCompanyElement.innerHTML += `<option value="${item.code}">${item.code} - ${item.name}</option>`;
          });
          dselect(selectCompanyElement, {
            search: true,
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

        // $("#selectSector").on("change", function () {
        //   selectCompanyElement.innerHTML = `<option value="" selected disabled hidden>إختر شركة</option>`;

        //   chartsData.forEach((item) => {
        //     if (item.sector == $("#selectSector").val()) {
        //       selectCompanyElement.innerHTML += `<option value="${item.securityCode}">${item.securityCode} - ${item.securityName}</option>`;
        //     }
        //   });
        //   if ($("#selectCompany").val()) {
        //     $("#shape-selection").css({
        //       display: "none",
        //     });
        //     drawCharts(emptyObj);
        //   }
        //   dselect(selectCompanyElement, {
        //     search: true,
        //   });
        // });

        $(
          "#selectSector,#selectedType,#selectCompany, #startDate, #endDate"
        ).on("change", function () {
          selectedCompanyObj = [];
          if ($("#selectCompany").val()) {
            let result = customFilter.filterByMultiSecurityCode(
              chartsData.securities,
              $("#selectCompany").val()
            );
            selectedCompanyObj.push(...result);
          }
          if ($("#selectSector").val()) {
            let result = customFilter.filterByMultiSector(
              chartsData.sectors,
              $("#selectSector").val()
            );
            selectedCompanyObj.push(...result);
          }
          if (selectedCompanyObj.length === 0) {
            $("#shape-selection").css({
              display: "none",
            });
            drawCharts(emptyObj);
          } else {
            $("#shape-selection").css({
              justifyContent: "center",
              display: "flex",
            });

            drawCharts(
              selectedCompanyObj,
              $("#startDate").val(),
              $("#endDate").val(),
              $("#selectedType").val()
            );
          }
        });

        // Columns Filters
        //!!!! Don't TOUCH if you don't know what you are doing !!!!
        // For each column
        var api = this.api();
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
