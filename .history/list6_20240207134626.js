import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

const arabicTranslation = getArabicTranslation();
let date = [];
let chartsDataArrays = {
  balance: [],
  balanceValue: [],
  percentageOwnership: [],
  totalBalanceByDay: [],
}
let name1 = [
  arabicTranslation[0].list6.balance,
  arabicTranslation[0].list6.balanceValue,
  arabicTranslation[0].list6.percentageOwnership,
  arabicTranslation[0].list6.totalBalanceByDay,
];
let chartObjects = {
  balance: {
    x: date,
    y: [],
    name: name1[0],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list6.date}<br>%{y} :${arabicTranslation[0].list6.balance}<br>`,
  },
  balanceValue: {
    x: date,
    y: [],
    name: name1[1],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list6.date}<br>%{y} :${arabicTranslation[0].list6.balanceValue}<br>`,
  },
  percentageOwnership: {
    x: date,
    y: [],
    name: name1[2],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list6.date}<br>%{y} :${arabicTranslation[0].list6.percentageOwnership}<br>`,
  },
  totalBalanceByDay: {
    x: date,
    y: [],
    name: name1[3],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list6.date}<br>%{y} :${arabicTranslation[0].list6.totalBalanceByDay}<br>`,
  },
}

function prepareDataForCharts(Objects) {
  date = [];
  chartsDataArrays.balance = [];
  chartsDataArrays.balanceValue = [];
  chartsDataArrays.percentageOwnership = [];
  chartsDataArrays.totalBalanceByDay = [];
  Objects.map((el) => {
    date.push(el.date);
    chartsDataArrays.balance.push(el.balance);
    chartsDataArrays.balanceValue.push(el.balanceValue);
    chartsDataArrays.percentageOwnership.push(el.percentageOwnership);
    chartsDataArrays.totalBalanceByDay.push(el.totalBalanceByDay);
  });
}
function drawCharts(Objects, selectedItems) {
  let selectedType = $("#selectedType").val();
  if (selectedType != "scatter" && selectedType != "bar") {
    selectedType = "scatter";
  }
  prepareDataForCharts(Objects);
  let selectedItemsObjects = [];
  selectedItems.map((el) => {
    console.log(el);
    console.log(chartObjects[el]);
    let temp = chartObjects[el];
    temp.x = date;
    temp.y = chartsDataArrays[el];
    temp.type = selectedType;
    selectedItemsObjects.push(temp);
  });
  let data1 = [];
  data1.push(...selectedItemsObjects);

  let layout = { barmode: "group", showlegend: true };
  Plotly.newPlot("chart1", data1, layout, { responsive: true });
  // Plotly.newPlot("chart3", data3, layout, { responsive: true });

  // let values = [];
  // let totalValue;
  // arr.map((el) => {
  //   values.push(el.position);
  //   values.push(el.totalValue - el.position);
  //   totalValue = el.totalValue;
  // });
  // const labels = ["المركز", "القيمة المتبقية"];
  // const data = [
  //   {
  //     values: values,
  //     labels: labels,
  //     type: "pie",
  //   },
  // ];
  // if (totalValue == null) totalValue = 0;
  // var layout1 = {
  //   title: `المجموع: ${totalValue}`,
  // };
  // Plotly.newPlot("chart1", data, layout1, { responsive: true });
}

function updateCharts(chartsData) {
  if ($("#selectCompany").val() && $("#selectNin").val()) {
    let selectedNinObj = customFilter.filterByNin(
      chartsData,
      $("#selectNin").val()
    );
    let selectedCompanyObj = customFilter.filterBySecurityCode(
      selectedNinObj,
      $("#selectCompany").val()
    );
    let selectChartItemsValue = $("#selectChartItems").val();
    if (selectedCompanyObj.length === 0 || selectChartItemsValue.length === 0) {
      $("#shape-selection").css({
        display: "none",
      });
      drawCharts(emptyObj, selectChartItemsValue);
    } else {
      $("#shape-selection").css({
        justifyContent: "center",
        display: "flex",
      });
      drawCharts(selectedCompanyObj[0].details, selectChartItemsValue);
    }
  }
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
    $("#datatable7 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable7 thead");
    var table = $("#datatable7").DataTable({
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

              return $("#datatable7").DataTable().column(idx).visible();
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

              return $("#datatable7").DataTable().column(idx).visible();
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

              return $("#datatable7").DataTable().column(idx).visible();
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
        { data: "date" },
        { data: "balance" },
        { data: "balanceValue" },
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
        { data: "totalBalanceByDay" },
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
          for (let key in chartsData[0].details[0]) {
            if (key !== "date") {
              var option = document.createElement("option");
              option.value = key;
              option.innerHTML = arabicTranslation[0].list6[key];
              selectChartItems.appendChild(option);
            }
          }
          var selectBoxElement = document.querySelector("#selectChartItems");
          dselect(selectBoxElement, {
            search: true,
          });
        }
        const emptyObj = [
          {
            date: null,
            position: null,
            totalValue: null,
          },
        ];
        $("#selectCompany,#selectChartItems,#selectedType").on("change", function () {
          updateCharts(chartsData);
        });
        $("#selectNin").on("change", function () {
          if ($("#selectNin").val()) {
            let selectCompanyElement = document.getElementById("selectCompany");
            let selectedNinObj = customFilter.filterByNin(
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
            updateCharts(updateCharts);
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
