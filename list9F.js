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
    arabicTranslation[0].list9F.nbOfDeletedTrades,
    arabicTranslation[0].list9F.nbOfExecutedTrades,
    arabicTranslation[0].list9F.percentageOfDeletedTrades,
    arabicTranslation[0].list9F.percentageOfExecutedTrades,
    arabicTranslation[0].list9F.buyBeforeCountTrades,
    arabicTranslation[0].list9F.buyBeforeCountDelete,
    arabicTranslation[0].list9F.buyBeforePercentage,
    arabicTranslation[0].list9F.buyDuringCountTrades,
    arabicTranslation[0].list9F.buyDuringCountDelete,
    arabicTranslation[0].list9F.buyDuringPercentage,
    arabicTranslation[0].list9F.buyAfterCountTrades,
    arabicTranslation[0].list9F.buyAfterCountDelete,
    arabicTranslation[0].list9F.buyAfterPercentage,
    arabicTranslation[0].list9F.sellBeforeCountTrades,
    arabicTranslation[0].list9F.sellBeforeCountDelete,
    arabicTranslation[0].list9F.sellBeforePercentage,
    arabicTranslation[0].list9F.sellDuringCountTrades,
    arabicTranslation[0].list9F.sellDuringCountDelete,
    arabicTranslation[0].list9F.sellDuringPercentage,
    arabicTranslation[0].list9F.sellAfterCountTrades,
    arabicTranslation[0].list9F.sellAfterCountDelete,
    arabicTranslation[0].list9F.sellAfterPercentage,
  ];
  let name2 = [
    arabicTranslation[0].list9F.total,
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
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyBeforeCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyBeforePercentage}`,
    },
    {
      x: securityName,
      y: buyBeforeCountDelete,
      name: name1[1],
      type: "bar",
      customdata: buyBeforePercentage,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyBeforeCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyBeforePercentage}`,
    },
    {
      x: securityName,
      y: buyDuringCountTrades,
      name: name1[2],
      type: "bar",
      customdata: buyDuringPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyDuringCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyDuringPercentage}`,
    },
    {
      x: securityName,
      y: buyDuringCountDelete,
      name: name1[3],
      type: "bar",
      customdata: buyDuringPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyDuringCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyDuringPercentage}`,
    },
    {
      x: securityName,
      y: buyAfterCountTrades,
      name: name1[4],
      type: "bar",
      customdata: buyAfterPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyAfterCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyAfterPercentage}`,
    },
    {
      x: securityName,
      y: buyAfterCountDelete,
      name: name1[5],
      type: "bar",
      customdata: buyAfterPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyAfterCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyAfterPercentage}`,
    },
    {
      x: securityName,
      y: sellBeforeCountTrades,
      name: name1[6],
      type: "bar",
      customdata: sellBeforePercentage,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellBeforeCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellBeforePercentage}`,
    },
    {
      x: securityName,
      y: sellBeforeCountDelete,
      name: name1[7],
      type: "bar",
      customdata: sellBeforePercentage,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellBeforeCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellBeforePercentage}`,
    },
    {
      x: securityName,
      y: sellDuringCountTrades,
      name: name1[8],
      type: "bar",
      customdata: sellDuringPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellDuringCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellDuringPercentage}`,
    },
    {
      x: securityName,
      y: sellDuringCountDelete,
      name: name1[9],
      type: "bar",
      customdata: sellDuringPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellDuringCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellDuringPercentage}`,
    },
    {
      x: securityName,
      y: sellAfterCountTrades,
      name: name1[10],
      type: "bar",
      customdata: sellAfterPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellAfterCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellAfterPercentage}`,
    },
    {
      x: securityName,
      y: sellAfterCountDelete,
      name: name1[11],
      type: "bar",
      customdata: sellAfterPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellAfterCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellAfterPercentage}`,
    },
  );
  data2.push(
    {
      x: date,
      y: buyBeforeCountTrades,
      name: name1[0],
      type: "bar",
      customdata: buyBeforePercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyBeforeCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyBeforePercentage}`,
    },
    {
      x: date,
      y: buyBeforeCountDelete,
      name: name1[1],
      type: "bar",
      customdata: buyBeforePercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyBeforeCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyBeforePercentage}`,
    },
    {
      x: date,
      y: buyDuringCountTrades,
      name: name1[2],
      type: "bar",
      customdata: buyDuringPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyDuringCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyDuringPercentage}`,
    },
    {
      x: date,
      y: buyDuringCountDelete,
      name: name1[3],
      type: "bar",
      customdata: buyDuringPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyDuringCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyDuringPercentage}`,
    },
    {
      x: date,
      y: buyAfterCountTrades,
      name: name1[4],
      type: "bar",
      customdata: buyAfterPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyAfterCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyAfterPercentage}`,
    },
    {
      x: date,
      y: buyAfterCountDelete,
      name: name1[5],
      type: "bar",
      customdata: buyAfterPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.buyAfterCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.buyAfterPercentage}`,
    },
    {
      x: date,
      y: sellBeforeCountTrades,
      name: name1[6],
      type: "bar",
      customdata: sellBeforePercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellBeforeCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellBeforePercentage}`,
    },
    {
      x: date,
      y: sellBeforeCountDelete,
      name: name1[7],
      type: "bar",
      customdata: sellBeforePercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellBeforeCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellBeforePercentage}`,
    },
    {
      x: date,
      y: sellDuringCountTrades,
      name: name1[8],
      type: "bar",
      customdata: sellDuringPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellDuringCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellDuringPercentage}`,
    },
    {
      x: date,
      y: sellDuringCountDelete,
      name: name1[9],
      type: "bar",
      customdata: sellDuringPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellDuringCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellDuringPercentage}`,
    },
    {
      x: date,
      y: sellAfterCountTrades,
      name: name1[10],
      type: "bar",
      customdata: sellAfterPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellAfterCountTrades}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellAfterPercentage}`,
    },
    {
      x: date,
      y: sellAfterCountDelete,
      name: name1[11],
      type: "bar",
      customdata: sellAfterPercentage,
      hovertemplate: `${arabicTranslation[0].list9F.date}: %{x}<br>%{y} :${arabicTranslation[0].list9F.sellAfterCountDelete}<br>`
      +`%{customdata}% :${arabicTranslation[0].list9F.sellAfterPercentage}`,
    },
  );
  let layout1 = { barmode: "group", showlegend: true };

  Plotly.newPlot("chart1", data1, layout1, { responsive: true });
  Plotly.newPlot("chart2", data2, layout1, { responsive: true });
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
      columns: [
        { data: "securityCode" },
        { data: "securityName" },
        { data: "date" },
        { data: "nin" },
        { data: "ninName" },
        { data: "buyBeforeCountTrades" },
        { data: "buyBeforeCountDelete" },
        {
          data: "buyBeforePercentage",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "buyDuringCountTrades" },
        { data: "buyDuringCountDelete" },
        {
          data: "buyDuringPercentage",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "buyAfterCountTrades" },
        { data: "buyAfterCountDelete" },
        {
          data: "buyAfterPercentage",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "sellBeforeCountTrades" },
        { data: "sellBeforeCountDelete" },
        {
          data: "sellBeforePercentage",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "sellDuringCountTrades" },
        { data: "sellDuringCountDelete" },
        {
          data: "sellDuringPercentage",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "sellAfterCountTrades" },
        { data: "sellAfterCountDelete" },
        {
          data: "sellAfterPercentage",
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
