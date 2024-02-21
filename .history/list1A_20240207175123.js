import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

const arabicTranslation = getArabicTranslation();

let securityNames = [];
let chartsDataArrays = {};
const listNumber = "1A";

function prepareDataForCharts(Objects) {
  securityNames = [];
  for (let key in Objects[0]) {
    chartsDataArrays[key] = [];
  }
  Objects.map((el) => {
    securityNames.push(el.securityName);
    for (let key in el) {
      if (key !== "date" && key !== "securityName") {
        chartsDataArrays[key].push(el[key]);
      }
    }
  });
}

function drawCharts(Objects, selectedItems) {
  let selectedType = $("#selectedType").val();
  if (selectedType != "scatter" && selectedType != "bar") {
    selectedType = "scatter";
  }
  prepareDataForCharts(Objects);
  let selectedItemsObjects = [];

  selectedItems.map((obj) => {
    selectedItemsObjects.push({
      x: securityNames,
      y: chartsDataArrays[obj],
      name: arabicTranslation[obj],
      type: selectedType,
      hovertemplate: `${
        arabicTranslation.securityName
      }: %{x}<br>%{y} :${arabicTranslation[obj]}<br>`,
    });
  });
  let layout = { barmode: "group", showlegend: true };
  Plotly.newPlot("chart1", selectedItemsObjects, layout, { responsive: true });
}

function updateCharts(chartsData) {
  const emptyObj = [
    {
    },
  ];
  if ($("#selectNin").val() && $("#selectChartItems").val()) {
    let selectChartItemsValue = $("#selectChartItems").val();
    let selectedNinObj = customFilter.filterByNin(
      chartsData,
      $("#selectNin").val()
    );

    if (selectChartItemsValue.length === 0 || selectChartItemsValue === null) {
      $("#shape-selection").css({
        display: "none",
      });
      drawCharts(emptyObj, selectChartItemsValue);
    } else {
      $("#shape-selection").css({
        justifyContent: "center",
        display: "flex",
      });
      drawCharts(selectedNinObj[0].details, selectChartItemsValue);
    }
  }
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
    $("#datatable1 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable1 thead");
    var table = $("#datatable1").DataTable({
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
              return $("#datatable1").DataTable().column(idx).visible();
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
              return $("#datatable1").DataTable().column(idx).visible();
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
              return $("#datatable1").DataTable().column(idx).visible();
            },
          },
        },
      ],
      snapshot: null,
      data: tableData,
      columns: columnArray,
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
          helperFunctions.createChartSelectOptions(chartsData, listNumber, [
            "securityName",
            "date",
          ]);
        }
        $("#selectChartItems,#selectedType").on("change", function () {
          updateCharts(chartsData);
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
