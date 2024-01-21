import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";

function drawCharts(Objects) {
  const arabicTranslation = getArabicTranslation();
  let securityName = [],
  family_relation=[],
    address_relation=[],
    job_relation=[],
    wallets_relation=[],
    ip_matching=[],
    bank_statement=[],
    agency_relation=[],
    phone_calls=[],
    verification_number=[],
    wallet_opening_date=[],
    other=[];
  let name1 = [
    arabicTranslation[0].list3.family_relation,
    arabicTranslation[0].list3.address_relation,
    arabicTranslation[0].list3.job_relation,
    arabicTranslation[0].list3.wallets_relation,
    // arabicTranslation[0].list3.ip_matching,
    // arabicTranslation[0].list3.bank_statement,
    // arabicTranslation[0].list3.agency_relation,
    // arabicTranslation[0].list3.phone_calls,
    // arabicTranslation[0].list3.verification_number,
    // arabicTranslation[0].list3.wallet_opening_date,
    // arabicTranslation[0].list3.other,
  ];
  Objects.map((el) => {
    family_relation.push(el.details[0].family_relation ? 1 : 0 );
    address_relation.push(el.details[0].address_relation ? 1 : 0 );
    job_relation.push(el.details[0].job_relation ? 1 : 0 );
    wallets_relation.push(el.details[0].wallets_relation ? 1 : 0 );
    // ip_matching.push(el.details[0].ip_matching ? 1 : 0 );
    // bank_statement.push(el.details[0].bank_statement ? 1 : 0 );
    // agency_relation.push(el.details[0].agency_relation ? 1 : 0 );
    // phone_calls.push(el.details[0].phone_calls ? 1 : 0 );
    // verification_number.push(el.details[0].verification_number ? 1 : 0 );
    // wallet_opening_date.push(el.details[0].wallet_opening_date ? 1 : 0 );
    // other.push(el.details[0].other ? 1 : 0 );
    securityName.push(el.otherNinName);
  });
  
  let data1 = [];
  var colorscaleValue = [
    [0, '#800020'],
    [1, '#50C878']
  ];
  data1.push(
    {
      z: [family_relation,address_relation,job_relation,wallets_relation,
        // ip_matching,
        // bank_statement,agency_relation,phone_calls,verification_number,wallet_opening_date,other
      ],
      x: securityName,
      y: name1,
      type: 'heatmap',
      colorscale: colorscaleValue,
      showscale: false,
      showarrow: true,
      hoverongaps: false
    }
  );
  let layout1 = { barmode: "group", showlegend: true };
  Plotly.newPlot("chart1", data1);
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
        

        { data: "ninName" },
        { data: "nin" },
        { data: "relation" },
        { data: "address" },
        { data: "wallets" },
        { data: "agencies" },
        { data: "tool" },
        { data: "phone" },
        { data: "nationality" },
        { data: "job" },
        { data: "otherNinName" },
        { data: "otherNin" },
        { data: "otherRelation" },
        { data: "otherAddress" },
        { data: "otherWallets" },
        { data: "otherAgencies" },
        { data: "otherTool" },
        { data: "otherPhone" },
        { data: "otherNationality" },
        { data: "otherJob" },
        {
          data: "family_relation",
          render: function (data, type, row, meta) {
            if (data != null) {
              if (data)
                return "متطابق";
              else
                return "عدم التطابق"
            } else {
              return null;
            }
          },
        },
        {
          data: "address_relation",
          render: function (data, type, row, meta) {
            if (data != null) {
              if (data)
                return "متطابق";
              else
                return "عدم التطابق"
            } else {
              return null;
            }
          },
        },
        {
          data: "job_relation",
          render: function (data, type, row, meta) {
            if (data != null) {
              if (data)
                return "متطابق";
              else
                return "عدم التطابق"
            } else {
              return null;
            }
          },
        },
        {
          data: "wallets_relation",
          render: function (data, type, row, meta) {
            if (data != null) {
              if (data)
                return "متطابق";
              else
                return "عدم التطابق"
            } else {
              return null;
            }
          },
        },
        // {
        //   data: "ip_matching",
        //   render: function (data, type, row, meta) {
        //     if (data != null) {
        //       if (data)
        //         return "متطابق";
        //       else
        //         return "عدم التطابق"
        //     } else {
        //       return null;
        //     }
        //   },
        // },
        // {
        //   data: "bank_statement",
        //   render: function (data, type, row, meta) {
        //     if (data != null) {
        //       if (data)
        //         return "متطابق";
        //       else
        //         return "عدم التطابق"
        //     } else {
        //       return null;
        //     }
        //   },
        // },
        // {
        //   data: "agency_relation",
        //   render: function (data, type, row, meta) {
        //     if (data != null) {
        //       if (data)
        //         return "متطابق";
        //       else
        //         return "عدم التطابق"
        //     } else {
        //       return null;
        //     }
        //   },
        // },
        // {
        //   data: "phone_calls",
        //   render: function (data, type, row, meta) {
        //     if (data != null) {
        //       if (data)
        //         return "متطابق";
        //       else
        //         return "عدم التطابق"
        //     } else {
        //       return null;
        //     }
        //   },
        // },
        // {
        //   data: "verification_number",
        //   render: function (data, type, row, meta) {
        //     if (data != null) {
        //       if (data)
        //         return "متطابق";
        //       else
        //         return "عدم التطابق"
        //     } else {
        //       return null;
        //     }
        //   },
        // },
        // {
        //   data: "wallet_opening_date",
        //   render: function (data, type, row, meta) {
        //     if (data != null) {
        //       if (data)
        //         return "متطابق";
        //       else
        //         return "عدم التطابق"
        //     } else {
        //       return null;
        //     }
        //   },
        // },
        // {
        //   data: "other",
        //   render: function (data, type, row, meta) {
        //     if (data != null) {
        //       if (data)
        //         return "متطابق";
        //       else
        //         return "عدم التطابق"
        //     } else {
        //       return null;
        //     }
        //   },
        // },
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
              console.log(selectedNinObj)
              drawCharts(selectedNinObj);
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
