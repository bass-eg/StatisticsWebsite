import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();

  let date = [],
    buyBeforeRemainingVolume = [],
    buyBeforeOrgVolume = [],
    buyBeforeAmendOrgVolume = [],
    buyBeforePercentageEnter = [],
    buyBeforePercentageAmend = [],
    buyDuringRemainingVolume = [],
    buyDuringOrgVolume = [],
    buyDuringAmendOrgVolume = [],
    buyDuringPercentageEnter = [],
    buyDuringPercentageAmend = [],
    buyAfterRemainingVolume = [],
    buyAfterOrgVolume = [],
    buyAfterAmendOrgVolume = [],
    buyAfterPercentageEnter = [],
    buyAfterPercentageAmend = [],
    sellBeforeRemainingVolume = [],
    sellBeforeOrgVolume = [],
    sellBeforeAmendOrgVolume = [],
    sellBeforePercentageEnter = [],
    sellBeforePercentageAmend = [],
    sellDuringRemainingVolume = [],
    sellDuringOrgVolume = [],
    sellDuringAmendOrgVolume = [],
    sellDuringPercentageEnter = [],
    sellDuringPercentageAmend = [],
    sellAfterRemainingVolume = [],
    sellAfterOrgVolume = [],
    sellAfterAmendOrgVolume = [],
    sellAfterPercentageEnter = [],
    sellAfterPercentageAmend = [];

  let name1 = [
     arabicTranslation.buyBeforeRemainingVolume,
     arabicTranslation.buyBeforeOrgVolume,
     arabicTranslation.buyBeforeAmendOrgVolume,
     arabicTranslation.buyBeforePercentageEnter,
     arabicTranslation.buyBeforePercentageAmend,
     arabicTranslation.buyDuringRemainingVolume,
     arabicTranslation.buyDuringOrgVolume,
     arabicTranslation.buyDuringAmendOrgVolume,
     arabicTranslation.buyDuringPercentageEnter,
     arabicTranslation.buyDuringPercentageAmend,
     arabicTranslation.buyAfterRemainingVolume,
     arabicTranslation.buyAfterOrgVolume,
     arabicTranslation.buyAfterAmendOrgVolume,
     arabicTranslation.buyAfterPercentageEnter,
     arabicTranslation.buyAfterPercentageAmend,
  ];
  let name2 = [
     arabicTranslation.sellBeforeRemainingVolume,
     arabicTranslation.sellBeforeOrgVolume,
     arabicTranslation.sellBeforeAmendOrgVolume,
     arabicTranslation.sellBeforePercentageEnter,
     arabicTranslation.sellBeforePercentageAmend,
     arabicTranslation.sellDuringRemainingVolume,
     arabicTranslation.sellDuringOrgVolume,
     arabicTranslation.sellDuringAmendOrgVolume,
     arabicTranslation.sellDuringPercentageEnter,
     arabicTranslation.sellDuringPercentageAmend,
     arabicTranslation.sellAfterRemainingVolume,
     arabicTranslation.sellAfterOrgVolume,
     arabicTranslation.sellAfterAmendOrgVolume,
     arabicTranslation.sellAfterPercentageEnter,
     arabicTranslation.sellAfterPercentageAmend,
  ];
  Objects.map((el) => {
    date.push(el.date);
    buyBeforeRemainingVolume.push(el.buyBeforeRemainingVolume);
    buyBeforeOrgVolume.push(el.buyBeforeOrgVolume);
    buyBeforeAmendOrgVolume.push(el.buyBeforeAmendOrgVolume);
    buyBeforePercentageEnter.push(el.buyBeforePercentageEnter);
    buyBeforePercentageAmend.push(el.buyBeforePercentageAmend);
    buyDuringRemainingVolume.push(el.buyDuringRemainingVolume);
    buyDuringOrgVolume.push(el.buyDuringOrgVolume);
    buyDuringAmendOrgVolume.push(el.buyDuringAmendOrgVolume);
    buyDuringPercentageEnter.push(el.buyDuringPercentageEnter);
    buyDuringPercentageAmend.push(el.buyDuringPercentageAmend);
    buyAfterRemainingVolume.push(el.buyAfterRemainingVolume);
    buyAfterOrgVolume.push(el.buyAfterOrgVolume);
    buyAfterAmendOrgVolume.push(el.buyAfterAmendOrgVolume);
    buyAfterPercentageEnter.push(el.buyAfterPercentageEnter);
    buyAfterPercentageAmend.push(el.buyAfterPercentageAmend);
    sellBeforeRemainingVolume.push(el.sellBeforeRemainingVolume);
    sellBeforeOrgVolume.push(el.sellBeforeOrgVolume);
    sellBeforeAmendOrgVolume.push(el.sellBeforeAmendOrgVolume);
    sellBeforePercentageEnter.push(el.sellBeforePercentageEnter);
    sellBeforePercentageAmend.push(el.sellBeforePercentageAmend);
    sellDuringRemainingVolume.push(el.sellDuringRemainingVolume);
    sellDuringOrgVolume.push(el.sellDuringOrgVolume);
    sellDuringAmendOrgVolume.push(el.sellDuringAmendOrgVolume);
    sellDuringPercentageEnter.push(el.sellDuringPercentageEnter);
    sellDuringPercentageAmend.push(el.sellDuringPercentageAmend);
    sellAfterRemainingVolume.push(el.sellAfterRemainingVolume);
    sellAfterOrgVolume.push(el.sellAfterOrgVolume);
    sellAfterAmendOrgVolume.push(el.sellAfterAmendOrgVolume);
    sellAfterPercentageEnter.push(el.sellAfterPercentageEnter);
    sellAfterPercentageAmend.push(el.sellAfterPercentageAmend);
  });
  let data1 = [];
  let data2 = [];
  data1.push(
    {
      x: date,
      y: buyBeforeRemainingVolume,
      name: name1[0],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforeRemainingVolume}<br>`,
    },
    {
      x: date,
      y: buyBeforeOrgVolume,
      name: name1[1],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforeOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyBeforeAmendOrgVolume,
      name: name1[2],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforeAmendOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyBeforePercentageEnter,
      name: name1[3],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforePercentageEnter}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyBeforePercentageAmend,
      name: name1[4],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyBeforePercentageAmend}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyDuringRemainingVolume,
      name: name1[5],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringRemainingVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyDuringOrgVolume,
      name: name1[6],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyDuringAmendOrgVolume,
      name: name1[7],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringAmendOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyDuringPercentageEnter,
      name: name1[8],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringPercentageEnter}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyDuringPercentageAmend,
      name: name1[9],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyDuringPercentageAmend}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyAfterRemainingVolume,
      name: name1[10],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterRemainingVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyAfterOrgVolume,
      name: name1[11],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyAfterAmendOrgVolume,
      name: name1[12],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterAmendOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyAfterPercentageEnter,
      name: name1[13],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterPercentageEnter}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: buyAfterPercentageAmend,
      name: name1[14],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.buyAfterPercentageAmend}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    }
  );
  data2.push(
    {
      x: date,
      y: sellBeforeRemainingVolume,
      name: name2[0],
      type: "bar",
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforeRemainingVolume}<br>`,
    },
    {
      x: date,
      y: sellBeforeOrgVolume,
      name: name2[1],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforeOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellBeforeAmendOrgVolume,
      name: name2[2],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforeAmendOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellBeforePercentageEnter,
      name: name2[3],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforePercentageEnter}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellBeforePercentageAmend,
      name: name2[4],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellBeforePercentageAmend}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellDuringRemainingVolume,
      name: name2[5],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringRemainingVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellDuringOrgVolume,
      name: name2[6],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellDuringAmendOrgVolume,
      name: name2[7],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringAmendOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellDuringPercentageEnter,
      name: name2[8],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringPercentageEnter}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellDuringPercentageAmend,
      name: name2[9],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellDuringPercentageAmend}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellAfterRemainingVolume,
      name: name2[10],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterRemainingVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellAfterOrgVolume,
      name: name2[11],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellAfterAmendOrgVolume,
      name: name2[12],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterAmendOrgVolume}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellAfterPercentageEnter,
      name: name2[13],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterPercentageEnter}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    },
    {
      x: date,
      y: sellAfterPercentageAmend,
      name: name2[14],
      type: "bar",
      // customdata: percentageRemaining,
      hovertemplate: `%{x} :${ arabicTranslation.date}<br>%{y} :${ arabicTranslation.sellAfterPercentageAmend}<br>`
// +`%{customdata}% :${ arabicTranslation.percentageRemaining}`,
    }
  );
  let layout1 = { barmode: "group", showlegend: true };

  Plotly.newPlot("chart1", data1, layout1, { responsive: true });
  Plotly.newPlot("chart2", data2, layout1, { responsive: true });
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
    $("#datatable13 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable13 thead");
    var table = $("#datatable13").DataTable({
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

              return $("#datatable13").DataTable().column(idx).visible();
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

              return $("#datatable13").DataTable().column(idx).visible();
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

              return $("#datatable13").DataTable().column(idx).visible();
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
            originalVolume: null,
            remainingVolume: null,
            percentageRemaining: null,
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
