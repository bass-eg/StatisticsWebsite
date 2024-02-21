import { getArabicTranslation } from "./arabicTranslation.js";
const arabicTranslation = getArabicTranslation();

export function getMinMax(...arr) {
  const newArray = arr.flat().filter(Boolean);
  const minData = Math.min.apply(null, newArray);
  const maxData = Math.max.apply(null, newArray);
  let scale;
  if (minData < 15 && maxData > 50) scale = 1;
  else if (minData < 50) scale = 0.02;
  else if (minData >= 50 && minData < 100) scale = 0.04;
  else if (minData >= 100 && minData < 500) scale = 0.06;
  else if (minData >= 500 && minData < 1000) scale = 0.15;
  else if (minData >= 1000 && minData < 10000) scale = 0.2;
  else if (minData >= 10000 && minData < 100000) scale = 0.3;
  else if (minData >= 100000 && minData < 1000000) scale = 0.35;
  else if (minData >= 1000000) scale = 0.4;
  const layout = {
    barmode: "group",
    showlegend: true,
    yaxis: {
      range: [minData - minData * scale, maxData],
    },
  };

  const config = {
    responsive: true,
    modeBarButtonsToAdd: [
      {
        name: "Small range",
        icon: Plotly.Icons.pencil,
        click: function (gd) {
          Plotly.relayout(gd, "yaxis.range", [
            minData - minData * scale,
            maxData,
          ]);
        },
      },
    ],
  };
  return { layout, config };
}
export function fillNinDropdownList(ninData) {
  ninData.forEach(function (item) {
    var option = document.createElement("option");
    option.value = item.nin;
    option.innerHTML = item.ninName;
    selectNin.appendChild(option);
  });
  var selectBoxElement = document.querySelector("#selectNin");
  dselect(selectBoxElement, {
    search: true,
  });
}

export function constructDataTable(structure) {
  let columnsArray = [];
  let tableRows = document.getElementById("tableRows");
  tableRows.innerHTML = ``;

  const relationsAttr = [
    "family_relation",
    "address_relation",
    "job_relation",
    "wallets_relation",
    "ip_matching",
    "bank_statement",
    "agency_relation",
    "phone_calls",
    "verification_number",
    "wallet_opening_date",
    "other",
  ];

  structure.forEach((key) => {
    //add to html page
    tableRows.innerHTML += `<th class="${key}"></th>`;

    //prepare column array for the jquery datatable
    if (key.toLowerCase().includes("percentage")) {
      columnsArray.push({
        data: `` + key + ``,
        render: function (data, type, row, meta) {
          if (data != null) {
            return data + "%";
          } else {
            return null;
          }
        },
      });
    } else if (relationsAttr.includes(key)) {
      columnsArray.push({
        data: `` + key + ``,
        render: function (data, type, row, meta) {
          if (data != null) {
            if (data) {
              return "متطابق";
            } else {
              return "غير متطابق";
            }
          } else {
            return null;
          }
        },
      });
    } else {
      columnsArray.push({ data: `` + key + `` });
    }
  });
  //put translation in the page
  structure.forEach((key) => {
    const htmlElements = document.querySelector(`.${key}`);
    if (htmlElements !== null) {
      htmlElements.textContent = arabicTranslation[key];
    }
  });

  return columnsArray;
}

export const createChartSelectOptions = (
  chartsData,
  listNumber,
  keysToIgnore
) => {
  for (let key in chartsData[0].details[0]) {
    console.log("key is ", key);
    if (!keysToIgnore.includes(key)) {
      var option = document.createElement("option");
      option.value = key;
      option.innerHTML = arabicTranslation[key];
      console.log("arabicTranslation[key] is ", arabicTranslation[key]);
      selectChartItems.appendChild(option);
    }
  }
  dselect(selectChartItems, {
    search: true,
  });
};
