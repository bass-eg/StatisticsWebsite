import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();

  let date = [],
    sumOfBuyOrgVolumeOfTheDay = [],
    sumOfSellOrgVolumeOfTheDay = [],
    sumOfBuyRemainingVolumeOfTheDay = [],
    sumOfSellRemainingVolumeOfTheDay = [],
    sumOfBuyOrgVolumeOfTheVioTime = [],
    sumOfSellOrgVolumeOfTheVioTime = [],
    sumOfBuyRemainingVolumeOfTheVioTime = [],
    sumOfSellRemainingVolumeOfTheVioTime = [],
    chartValues = [];
  let name1 = [
    arabicTranslation[0].list7.sumOfBuyOrgVolumeOfTheDay,
    arabicTranslation[0].list7.sumOfSellOrgVolumeOfTheDay,
  ];
  let name2 = [
    arabicTranslation[0].list7.sumOfBuyRemainingVolumeOfTheDay,
    arabicTranslation[0].list7.sumOfSellRemainingVolumeOfTheDay,
  ];
  let name3 = [
    arabicTranslation[0].list7.sumOfBuyOrgVolumeOfTheVioTime,
    arabicTranslation[0].list7.sumOfSellOrgVolumeOfTheVioTime,
  ];
  let name4 = [
    arabicTranslation[0].list7.sumOfBuyRemainingVolumeOfTheVioTime,
    arabicTranslation[0].list7.sumOfSellRemainingVolumeOfTheVioTime,
  ];
  let name5 = [
    arabicTranslation[0].list7.percentageOfBuyOrgVolume,
    arabicTranslation[0].list7.percentageOfBuyRemainingVolume,
    arabicTranslation[0].list7.percentageOfSellOrgVolume,
    arabicTranslation[0].list7.percentageOfSellRemainingVolume,
  ];
  Objects.map((el) => {
    date.push(el.date);
    sumOfBuyOrgVolumeOfTheDay.push(el.sumOfBuyOrgVolumeOfTheDay);
    sumOfSellOrgVolumeOfTheDay.push(el.sumOfSellOrgVolumeOfTheDay);
    sumOfBuyRemainingVolumeOfTheDay.push(el.sumOfBuyRemainingVolumeOfTheDay);
    sumOfSellRemainingVolumeOfTheDay.push(el.sumOfSellRemainingVolumeOfTheDay);
    sumOfBuyOrgVolumeOfTheVioTime.push(el.sumOfBuyOrgVolumeOfTheVioTime);
    sumOfSellOrgVolumeOfTheVioTime.push(el.sumOfSellOrgVolumeOfTheVioTime);
    sumOfBuyRemainingVolumeOfTheVioTime.push(el.sumOfBuyRemainingVolumeOfTheVioTime);
    sumOfSellRemainingVolumeOfTheVioTime.push(el.sumOfSellRemainingVolumeOfTheVioTime);
    chartValues.push(el.percentageOfBuyOrgVolume);
    chartValues.push(el.percentageOfBuyRemainingVolume);
    chartValues.push(el.percentageOfSellOrgVolume);
    chartValues.push(el.percentageOfSellRemainingVolume);
  });
  let data1 = [],
    data2 = [],
    data3 = [],
    data4 = [];
  data1.push(
    {
      x: date,
      y: sumOfBuyOrgVolumeOfTheDay,
      name: name1[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sumOfBuyOrgVolumeOfTheDay}<br>`,
    },
    {
      x: date,
      y: sumOfSellOrgVolumeOfTheDay,
      name: name1[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sumOfSellOrgVolumeOfTheDay}<br>`,
    }
  );
  data2.push(
    {
      x: date,
      y: sumOfBuyRemainingVolumeOfTheDay,
      name: name2[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sumOfBuyRemainingVolumeOfTheDay}<br>`,
    },
    {
      x: date,
      y: sumOfSellRemainingVolumeOfTheDay,
      name: name2[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sumOfSellRemainingVolumeOfTheDay}<br>`,
    }
  );
  data3.push(
    {
      x: date,
      y: sumOfBuyOrgVolumeOfTheVioTime,
      name: name3[0],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sumOfBuyOrgVolumeOfTheVioTime}<br>`,
    },
    {
      x: date,
      y: sumOfSellOrgVolumeOfTheVioTime,
      name: name3[1],
      type: "bar",
      hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sumOfSellOrgVolumeOfTheVioTime}<br>`,
    }
  );
  data4.push({
    x: date,
    y: sumOfBuyRemainingVolumeOfTheVioTime,
    name: name4[0],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sumOfBuyRemainingVolumeOfTheVioTime}<br>`,
  },{
    x: date,
    y: sumOfSellRemainingVolumeOfTheVioTime,
    name: name4[1],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sumOfSellRemainingVolumeOfTheVioTime}<br>`,
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
        { data: "date" },
        { data: "nin" },
        { data: "ninName" },
        { data: "sumOfBuyOrgVolumeOfTheDay" },
        { data: "sumOfBuyRemainingVolumeOfTheDay" },
        { data: "sumOfBuyOrgVolumeOfTheVioTime" },
        { data: "sumOfBuyRemainingVolumeOfTheVioTime" },
        {
          data: "percentageOfBuyOrgVolume",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfBuyRemainingVolume",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "sumOfSellOrgVolumeOfTheDay" },
        { data: "sumOfSellRemainingVolumeOfTheDay" },
        { data: "sumOfSellOrgVolumeOfTheVioTime" },
        { data: "sumOfSellRemainingVolumeOfTheVioTime" },
        {
          data: "percentageOfSellOrgVolume",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfSellRemainingVolume",
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
