import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();
  let securityName = [],
    balance = [],
    buyVolume = [];
  let name1 = [
    arabicTranslation[0].list2.balance,
    arabicTranslation[0].list2.buyVolume,
  ];
  Objects.map((el) => {
    securityName.push(el.securityName);
    balance.push(el.balance);
    buyVolume.push(el.buyVolume);
  });
  let data1 = [];
  data1.push(
    {
      x: securityName,
      y: balance,
      name: name1[0],
      type: "bar",
      hovertemplate: `${arabicTranslation[0].list2.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list2.balance}<br>`,
    },
    {
      x: securityName,
      y: buyVolume,
      name: name1[1],
      type: "bar",
      hovertemplate: `${arabicTranslation[0].list2.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list2.buyVolume}<br>`,
    }
  );
  let layout1 = { barmode: "group", showlegend: true };
  Plotly.newPlot("chart1", data1, layout1, { responsive: true });
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
    $("#datatable4 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable4 thead");
    var table = $("#datatable4").DataTable({
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

              return $("#datatable4").DataTable().column(idx).visible();
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

              return $("#datatable4").DataTable().column(idx).visible();
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

              return $("#datatable4").DataTable().column(idx).visible();
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
        { data: "buyVolume" },
        { data: "buyValue" },
        { data: "sellVolume" },
        { data: "sellValue" },
        { data: "numoftrades_buy" },
        { data: "numoftrades_sell" },
        { data: "close" },
        { data: "balance" },
        { data: "balanceValue" },
        { data: "capital" },
        {
          data: "percentageOwnership",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageBalance",
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
        // const emptyObj = [
        //   {
        //     securityName: null,
        //     percentageOwnership: null,
        //   },
        // ];
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
