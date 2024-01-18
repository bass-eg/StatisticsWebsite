import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();
  let securityName = [],
    countMatching = [],
    totalViolation = [],
    percentage = [];
  let name1 = [
    arabicTranslation[0].list1A.countMatching,
  ];
  let name2 = [
    arabicTranslation[0].list1A.totalViolation,
  ];
  let name3 = [
    arabicTranslation[0].list1A.percentage,
  ];
  Objects.map((el) => {
    securityName.push(el.securityName);
    countMatching.push(el.countMatching);
    totalViolation.push(el.totalViolation);
    percentage.push(el.percentage);
  });
  let data1 = [],
    data2 = [],
    data3 = [];
  data1.push(
    {
      x: securityName,
      y: countMatching,
      name: name1[0],
      type: "bar",
      hovertemplate: `${arabicTranslation[0].list1A.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list1A.countMatching}<br>`,
    }
  );
  data2.push(
    {
      x: securityName,
      y: totalViolation,
      name: name2[0],
      type: "bar",
      hovertemplate: `${arabicTranslation[0].list1A.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list1A.totalViolation}<br>`,
    }
  );
  data3.push(
    {
      x: securityName,
      y: percentage,
      name: name3[0],
      type: "bar",
      hovertemplate: `${arabicTranslation[0].list1A.securityName}: %{x}<br>%{y} :${arabicTranslation[0].list1A.percentage}<br>`,
    }
  );

  let layout = { barmode: "group", showlegend: true };

  Plotly.newPlot("chart1", data1, layout, { responsive: true });
  Plotly.newPlot("chart2", data2, layout, { responsive: true });
  Plotly.newPlot("chart3", data3, layout, { responsive: true });
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
      columns: [
        { data: "securityCode" },
        { data: "securityName" },
        { data: "nin" },
        { data: "ninName" },
        { data: "countMatching" },
        { data: "combination" },
        { data: "violators" },
        { data: "totalViolation" },
        {
          data: "percentage",
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
        let selectedNinObj;
        $("#selectNin").on("change", function () {
          if ($("#selectNin").val()) {
            selectedNinObj = customFilter.filterByNin(
              chartsData,
              $("#selectNin").val()
            );
            drawCharts(selectedNinObj[0].details);
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
