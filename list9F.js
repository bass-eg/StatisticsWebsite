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
    nbOfDeletedTrades = [],
    nbOfExecutedTrades = [],
    total = [],
    percentageOfDeletedTrades = [],
    percentageOfExecutedTrades = [];
  let name1 = [
    arabicTranslation[0].list9F.nbOfDeletedTrades,
    arabicTranslation[0].list9F.nbOfExecutedTrades,
    arabicTranslation[0].list9F.percentageOfDeletedTrades,
    arabicTranslation[0].list9F.percentageOfExecutedTrades,
  ];
  let name2 = [arabicTranslation[0].list9F.total];
  Objects.map((el) => {
    securityName.push(el.securityName);
    nbOfDeletedTrades.push(el.nbOfDeletedTrades);
    nbOfExecutedTrades.push(el.nbOfExecutedTrades);
    total.push(el.total);
    percentageOfDeletedTrades.push(el.percentageOfDeletedTrades);
    percentageOfExecutedTrades.push(el.percentageOfExecutedTrades);
  });
  let data1 = [],
    data2 = [];
  data1.push(
    {
      x: securityName,
      y: nbOfExecutedTrades,
      name: name1[0],
      type: "bar",
      customdata: percentageOfExecutedTrades,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.nbOfExecutedTrades}<br>%{customdata}% :${arabicTranslation[0].list9F.percentageOfExecutedTrades}`,
    },
    {
      x: securityName,
      y: nbOfDeletedTrades,
      name: name1[1],
      type: "bar",
      customdata: percentageOfDeletedTrades,
      hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.nbOfDeletedTrades}<br>%{customdata}% :${arabicTranslation[0].list9F.percentageOfDeletedTrades}`,
    }
  );
  data2.push({
    x: securityName,
    y: total,
    name: name2[0],
    type: "bar",
    hovertemplate: `${arabicTranslation[0].list9F.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list9F.total}<br>`,
  });
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
        { data: "nin" },
        { data: "ninName" },
        { data: "nbOfDeletedTrades" },
        { data: "nbOfExecutedTrades" },
        { data: "total" },
        {
          data: "percentageOfDeletedTrades",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfExecutedTrades",
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
