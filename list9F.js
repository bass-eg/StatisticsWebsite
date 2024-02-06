import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();
  // nbOfDeletedTrades: "عدد الأوامر الملغاة",
  // nbOfExecutedTrades: "عدد الأوامر المنفذة",
  // total: "الاجمالي", // need to be camel case
  // percentageOfDeletedTrades: "نسبة الأوامر الملغاة",
  // percentageOfExecutedTrades: "نسبة الأوامر المنفذة",
  let securityName = [],
    date = [],
    buyBeforeCountTrades = [],
    buyBeforeCountDelete = [],
    buyBeforePercentage = [],
    buyDuringCountTrades = [],
    buyDuringCountDelete = [],
    buyDuringPercentage = [],
    buyAfterCountTrades = [],
    buyAfterCountDelete = [],
    buyAfterPercentage = [],
    sellBeforeCountTrades = [],
    sellBeforeCountDelete = [],
    sellBeforePercentage = [],
    sellDuringCountTrades = [],
    sellDuringCountDelete = [],
    sellDuringPercentage = [],
    sellAfterCountTrades = [],
    sellAfterCountDelete = [],
    sellAfterPercentage = [];
  let name1 = [
     arabicTranslation.nbOfDeletedTrades,
     arabicTranslation.nbOfExecutedTrades,
     arabicTranslation.percentageOfDeletedTrades,
     arabicTranslation.percentageOfExecutedTrades,
     arabicTranslation.buyBeforeCountTrades,
     arabicTranslation.buyBeforeCountDelete,
     arabicTranslation.buyBeforePercentage,
     arabicTranslation.buyDuringCountTrades,
     arabicTranslation.buyDuringCountDelete,
     arabicTranslation.buyDuringPercentage,
     arabicTranslation.buyAfterCountTrades,
     arabicTranslation.buyAfterCountDelete,
     arabicTranslation.buyAfterPercentage,
     arabicTranslation.sellBeforeCountTrades,
     arabicTranslation.sellBeforeCountDelete,
     arabicTranslation.sellBeforePercentage,
     arabicTranslation.sellDuringCountTrades,
     arabicTranslation.sellDuringCountDelete,
     arabicTranslation.sellDuringPercentage,
     arabicTranslation.sellAfterCountTrades,
     arabicTranslation.sellAfterCountDelete,
     arabicTranslation.sellAfterPercentage,
  ];
  let name2 = [
     arabicTranslation.total,
  ];
  Objects.map((el) => {
    securityName.push(el.securityName);
    date.push(el.date);
    buyBeforeCountTrades.push(el.buyBeforeCountTrades);
    buyBeforeCountDelete.push(el.buyBeforeCountDelete);
    buyBeforePercentage.push(el.buyBeforePercentage);
    buyDuringCountTrades.push(el.buyDuringCountTrades);
    buyDuringCountDelete.push(el.buyDuringCountDelete);
    buyDuringPercentage.push(el.buyDuringPercentage);
    buyAfterCountTrades.push(el.buyAfterCountTrades);
    buyAfterCountDelete.push(el.buyAfterCountDelete);
    buyAfterPercentage.push(el.buyAfterPercentage);
    sellBeforeCountTrades.push(el.sellBeforeCountTrades);
    sellBeforeCountDelete.push(el.sellBeforeCountDelete);
    sellBeforePercentage.push(el.sellBeforePercentage);
    sellDuringCountTrades.push(el.sellDuringCountTrades);
    sellDuringCountDelete.push(el.sellDuringCountDelete);
    sellDuringPercentage.push(el.sellDuringPercentage);
    sellAfterCountTrades.push(el.sellAfterCountTrades);
    sellAfterCountDelete.push(el.sellAfterCountDelete);
    sellAfterPercentage.push(el.sellAfterPercentage);
  });
  let data1 = [],
    data2 = [];
  data1.push(
    {
      x: securityName,
      y: buyBeforeCountTrades,
      name: name1[0],
      type: "bar",
      customdata: buyBeforePercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.buyBeforeCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.buyBeforePercentage}`,
    },
    {
      x: securityName,
      y: buyBeforeCountDelete,
      name: name1[1],
      type: "bar",
      customdata: buyBeforePercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.buyBeforeCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.buyBeforePercentage}`,
    },
    {
      x: securityName,
      y: buyDuringCountTrades,
      name: name1[2],
      type: "bar",
      customdata: buyDuringPercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.buyDuringCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.buyDuringPercentage}`,
    },
    {
      x: securityName,
      y: buyDuringCountDelete,
      name: name1[3],
      type: "bar",
      customdata: buyDuringPercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.buyDuringCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.buyDuringPercentage}`,
    },
    {
      x: securityName,
      y: buyAfterCountTrades,
      name: name1[4],
      type: "bar",
      customdata: buyAfterPercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.buyAfterCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.buyAfterPercentage}`,
    },
    {
      x: securityName,
      y: buyAfterCountDelete,
      name: name1[5],
      type: "bar",
      customdata: buyAfterPercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.buyAfterCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.buyAfterPercentage}`,
    },
    {
      x: securityName,
      y: sellBeforeCountTrades,
      name: name1[6],
      type: "bar",
      customdata: sellBeforePercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.sellBeforeCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.sellBeforePercentage}`,
    },
    {
      x: securityName,
      y: sellBeforeCountDelete,
      name: name1[7],
      type: "bar",
      customdata: sellBeforePercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.sellBeforeCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.sellBeforePercentage}`,
    },
    {
      x: securityName,
      y: sellDuringCountTrades,
      name: name1[8],
      type: "bar",
      customdata: sellDuringPercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.sellDuringCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.sellDuringPercentage}`,
    },
    {
      x: securityName,
      y: sellDuringCountDelete,
      name: name1[9],
      type: "bar",
      customdata: sellDuringPercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.sellDuringCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.sellDuringPercentage}`,
    },
    {
      x: securityName,
      y: sellAfterCountTrades,
      name: name1[10],
      type: "bar",
      customdata: sellAfterPercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.sellAfterCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.sellAfterPercentage}`,
    },
    {
      x: securityName,
      y: sellAfterCountDelete,
      name: name1[11],
      type: "bar",
      customdata: sellAfterPercentage,
      hovertemplate: `${ arabicTranslation.securityName}: %{x}<br>%{y} :${ arabicTranslation.sellAfterCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.sellAfterPercentage}`,
    },
  );
  data2.push(
    {
      x: date,
      y: buyBeforeCountTrades,
      name: name1[0],
      type: "bar",
      customdata: buyBeforePercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.buyBeforeCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.buyBeforePercentage}`,
    },
    {
      x: date,
      y: buyBeforeCountDelete,
      name: name1[1],
      type: "bar",
      customdata: buyBeforePercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.buyBeforeCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.buyBeforePercentage}`,
    },
    {
      x: date,
      y: buyDuringCountTrades,
      name: name1[2],
      type: "bar",
      customdata: buyDuringPercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.buyDuringCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.buyDuringPercentage}`,
    },
    {
      x: date,
      y: buyDuringCountDelete,
      name: name1[3],
      type: "bar",
      customdata: buyDuringPercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.buyDuringCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.buyDuringPercentage}`,
    },
    {
      x: date,
      y: buyAfterCountTrades,
      name: name1[4],
      type: "bar",
      customdata: buyAfterPercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.buyAfterCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.buyAfterPercentage}`,
    },
    {
      x: date,
      y: buyAfterCountDelete,
      name: name1[5],
      type: "bar",
      customdata: buyAfterPercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.buyAfterCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.buyAfterPercentage}`,
    },
    {
      x: date,
      y: sellBeforeCountTrades,
      name: name1[6],
      type: "bar",
      customdata: sellBeforePercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.sellBeforeCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.sellBeforePercentage}`,
    },
    {
      x: date,
      y: sellBeforeCountDelete,
      name: name1[7],
      type: "bar",
      customdata: sellBeforePercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.sellBeforeCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.sellBeforePercentage}`,
    },
    {
      x: date,
      y: sellDuringCountTrades,
      name: name1[8],
      type: "bar",
      customdata: sellDuringPercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.sellDuringCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.sellDuringPercentage}`,
    },
    {
      x: date,
      y: sellDuringCountDelete,
      name: name1[9],
      type: "bar",
      customdata: sellDuringPercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.sellDuringCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.sellDuringPercentage}`,
    },
    {
      x: date,
      y: sellAfterCountTrades,
      name: name1[10],
      type: "bar",
      customdata: sellAfterPercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.sellAfterCountTrades}<br>`
      +`%{customdata}% :${ arabicTranslation.sellAfterPercentage}`,
    },
    {
      x: date,
      y: sellAfterCountDelete,
      name: name1[11],
      type: "bar",
      customdata: sellAfterPercentage,
      hovertemplate: `${ arabicTranslation.date}: %{x}<br>%{y} :${ arabicTranslation.sellAfterCountDelete}<br>`
      +`%{customdata}% :${ arabicTranslation.sellAfterPercentage}`,
    },
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
    $("#datatable14 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable14 thead");
    var table = $("#datatable14").DataTable({
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

              return $("#datatable14").DataTable().column(idx).visible();
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

              return $("#datatable14").DataTable().column(idx).visible();
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

              return $("#datatable14").DataTable().column(idx).visible();
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
            countOfMatchingDays: null,
            nbOfDeletedTrades: null,
            nbOfExecutedTrades: null,
            totalSellVolume: null,
            totalSellValue: null,
            avgBuyVolume: null,
            avgBuyValue: null,
            avgSellVolume: null,
            avgSellValue: null,
          },
        ];
        let selectedNinObj;
        $("#selectNin").on("change", function () {
          if ($("#selectNin").val()) {
            selectedNinObj = customFilter.filterByNin(
              chartsData,
              $("#selectNin").val()
            );

            if (selectedNinObj.length === 0) {
              drawCharts(emptyObj);
            } else {
              drawCharts(selectedNinObj[0].details);
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
