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

export const formatPercentageColumn = () => {
  return function (data) {
    if (data != null) {
      return data + "%";
    } else {
      return null;
    }
  };
};

export const generateColumnsArrayWithPercentageFormatting = (tableData) => {
  let columnsArray = [];
  for (let key in tableData[0]) {
    if (key.toLowerCase().includes("percentage")) {
      columnsArray.push({
        data: `` + key + ``,
        render: formatPercentageColumn(),
      });
    } else {
      columnsArray.push({ data: `` + key + `` });
    }
  }

  return columnsArray;
};

export const createChartSelectOptions = (
  chartsData,
  listNumber,
  keysToIgnore
) => {
  for (let key in chartsData[0].details[0]) {
    if (!keysToIgnore.includes(key)) {
      var option = document.createElement("option");
      option.value = key;
      option.innerHTML = arabicTranslation[0]["list" + listNumber][key];
      selectChartItems.appendChild(option);
    }
  }
  dselect(selectChartItems, {
    search: true,
  });
};
