import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

const arabicTranslation = getArabicTranslation();
let chartsDataArrays = {
  securityName: [],
  family_relation: [],
  address_relation: [],
  job_relation: [],
  wallets_relation: [],
  ip_matching: [],
  bank_statement: [],
  agency_relation: [],
  phone_calls: [],
  verification_number: [],
  wallet_opening_date: [],
  other: [],
};
let name1 = {
  family_relation: arabicTranslation.family_relation,
  address_relation: arabicTranslation.address_relation,
  job_relation: arabicTranslation.job_relation,
  wallets_relation: arabicTranslation.wallets_relation,
  ip_matching: arabicTranslation.ip_matching,
  bank_statement: arabicTranslation.bank_statement,
  agency_relation: arabicTranslation.agency_relation,
  phone_calls: arabicTranslation.phone_calls,
  verification_number: arabicTranslation.verification_number,
  wallet_opening_date: arabicTranslation.wallet_opening_date,
  other: arabicTranslation.other,
};
function prepareDataForCharts(Objects) {
  (chartsDataArrays.securityName = []),
    (chartsDataArrays.family_relation = []),
    (chartsDataArrays.address_relation = []),
    (chartsDataArrays.job_relation = []),
    (chartsDataArrays.wallets_relation = []),
    (chartsDataArrays.ip_matching = []),
    (chartsDataArrays.bank_statement = []),
    (chartsDataArrays.agency_relation = []),
    (chartsDataArrays.phone_calls = []),
    (chartsDataArrays.verification_number = []),
    (chartsDataArrays.wallet_opening_date = []),
    (chartsDataArrays.other = []);
  Objects.map((el) => {
    chartsDataArrays.family_relation.push(
      el.details[0].family_relation ? 1 : 0
    );
    chartsDataArrays.address_relation.push(
      el.details[0].address_relation ? 1 : 0
    );
    chartsDataArrays.job_relation.push(el.details[0].job_relation ? 1 : 0);
    chartsDataArrays.wallets_relation.push(
      el.details[0].wallets_relation ? 1 : 0
    );
    chartsDataArrays.ip_matching.push(el.details[0].ip_matching ? 1 : 0);
    chartsDataArrays.bank_statement.push(el.details[0].bank_statement ? 1 : 0);
    chartsDataArrays.agency_relation.push(
      el.details[0].agency_relation ? 1 : 0
    );
    chartsDataArrays.phone_calls.push(el.details[0].phone_calls ? 1 : 0);
    chartsDataArrays.verification_number.push(
      el.details[0].verification_number ? 1 : 0
    );
    chartsDataArrays.wallet_opening_date.push(
      el.details[0].wallet_opening_date ? 1 : 0
    );
    chartsDataArrays.other.push(el.details[0].other ? 1 : 0);
    chartsDataArrays.securityName.push(el.otherNinName);
  });
}
function drawCharts(Objects, selectedItems) {
  prepareDataForCharts(Objects);
  let tempZ = [];
  let tempName = [];
  for (let i = 0; i < selectedItems.length; i++) {
    tempZ.push(chartsDataArrays[selectedItems[i]]);
    tempName.push(name1[selectedItems[i]]);
  }
  let data1 = [];
  var colorscaleValue = [
    [0, "white"],
    [1, "#50C878"],
  ];
  data1.push({
    z: tempZ,
    x: chartsDataArrays.securityName,
    y: tempName,
    zmin: 0, // Set the minimum value for the color scale
    zmax: 1,
    type: "heatmap",
    colorscale: colorscaleValue,
    showscale: false,
    hoverongaps: false,
  });
  Plotly.newPlot("chart1", data1);
}

function updateCharts(chartsData) {
  if ($("#selectNin").val() && $("#selectChartItems").val()) {
    let selectedNinObj = customFilter.filterByNin(
      chartsData,
      $("#selectNin").val()
    );
    let selectChartItemsValue = $("#selectChartItems").val();

    if (selectChartItemsValue.length === 0 || selectChartItemsValue === null) {
      drawCharts(emptyObj, selectChartItemsValue);
      helperFunctions.hidePrintContainer();
    } else {
      helperFunctions.showPrintContainer();
      drawCharts(selectedNinObj, selectChartItemsValue);
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
          // for (let key in chartsData[0].details[0]) {
          //   var option = document.createElement("option");
          //   option.value = key;
          //   option.innerHTML = arabicTranslation[key];
          //   selectChartItems.appendChild(option);
          // }
          var option = document.createElement("option");
          option.value = "family_relation";
          option.innerHTML = arabicTranslation["family_relation"];
          selectChartItems.appendChild(option);

          option = document.createElement("option");
          option.value = "address_relation";
          option.innerHTML = arabicTranslation["address_relation"];
          selectChartItems.appendChild(option);

          option = document.createElement("option");
          option.value = "job_relation";
          option.innerHTML = arabicTranslation["job_relation"];
          selectChartItems.appendChild(option);

          option = document.createElement("option");
          option.value = "wallets_relation";
          option.innerHTML = arabicTranslation["wallets_relation"];
          selectChartItems.appendChild(option);

          var selectBoxElement = document.querySelector("#selectChartItems");
          dselect(selectBoxElement, {
            search: true,
          });
        }
        // const emptyObj = [
        //   {
        //     securityName: null,
        //     percentageOwnership: null,
        //   },
        // ];
        let selectedNinObj;
        $("#selectNin").on("change", function () {
          updateCharts(chartsData);
        });
        $("#selectChartItems").on("change", function () {
          updateCharts(chartsData);
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
