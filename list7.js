import * as customFilter from "./filters.js";
import * as helperFunctions from "./helperFunctions.js";
import { getArabicTranslation } from "./arabicTranslation.js";
const arabicTranslation = getArabicTranslation();

let date = [];
let chartsDataArrays = {
  buyBeforeOrgVolume: [],
  buyBeforeRemainingVolume: [],
  buyBeforeFillVolume: [],
  buyDuringOrgVolume: [],
  buyDuringRemainingVolume: [],
  buyDuringFillVolume: [],
  buyAfterOrgVolume: [],
  buyAfterRemainingVolume: [],
  buyAfterFillVolume: [],
  buyTotalOrgVolume: [],
  buyTotalRemainingVolume: [],
  buyTotalFillVolume: [],
  percentageOfBuyOrgVolumeBefore: [],
  percentageOfBuyRemainingVolumeBefore: [],
  percentageOfBuyFillVolumeBefore: [],
  percentageOfBuyOrgVolumeDuring: [],
  percentageOfBuyRemainingVolumeDuring: [],
  percentageOfBuyFillVolumeDuring: [],
  percentageOfBuyOrgVolumeAfter: [],
  percentageOfBuyRemainingVolumeAfter: [],
  percentageOfBuyFillVolumeAfter: [],
  sellBeforeOrgVolume: [],
  sellBeforeRemainingVolume: [],
  sellBeforeFillVolume: [],
  sellDuringOrgVolume: [],
  sellDuringRemainingVolume: [],
  sellDuringFillVolume: [],
  sellAfterOrgVolume: [],
  sellAfterRemainingVolume: [],
  sellAfterFillVolume: [],
  sellTotalOrgVolume: [],
  sellTotalRemainingVolume: [],
  sellTotalFillVolume: [],
  percentageOfSellOrgVolumeBefore: [],
  percentageOfSellRemainingVolumeBefore: [],
  percentageOfSellFillVolumeBefore: [],
  percentageOfSellOrgVolumeDuring: [],
  percentageOfSellRemainingVolumeDuring: [],
  percentageOfSellFillVolumeDuring: [],
  percentageOfSellOrgVolumeAfter: [],
  percentageOfSellRemainingVolumeAfter: [],
  percentageOfSellFillVolumeAfter: [],
};
let name1 = [
  arabicTranslation[0].list7.buyBeforeOrgVolume,
  arabicTranslation[0].list7.buyBeforeRemainingVolume,
  arabicTranslation[0].list7.buyBeforeFillVolume,
  arabicTranslation[0].list7.buyDuringOrgVolume,
  arabicTranslation[0].list7.buyDuringRemainingVolume,
  arabicTranslation[0].list7.buyDuringFillVolume,
  arabicTranslation[0].list7.buyAfterOrgVolume,
  arabicTranslation[0].list7.buyAfterRemainingVolume,
  arabicTranslation[0].list7.buyAfterFillVolume,
  arabicTranslation[0].list7.buyTotalOrgVolume,
  arabicTranslation[0].list7.buyTotalRemainingVolume,
  arabicTranslation[0].list7.buyTotalFillVolume,
  arabicTranslation[0].list7.percentageOfBuyOrgVolumeBefore,
  arabicTranslation[0].list7.percentageOfBuyRemainingVolumeBefore,
  arabicTranslation[0].list7.percentageOfBuyFillVolumeBefore,
  arabicTranslation[0].list7.percentageOfBuyOrgVolumeDuring,
  arabicTranslation[0].list7.percentageOfBuyRemainingVolumeDuring,
  arabicTranslation[0].list7.percentageOfBuyFillVolumeDuring,
  arabicTranslation[0].list7.percentageOfBuyOrgVolumeAfter,
  arabicTranslation[0].list7.percentageOfBuyRemainingVolumeAfter,
  arabicTranslation[0].list7.percentageOfBuyFillVolumeAfter,
  arabicTranslation[0].list7.sellBeforeOrgVolume,
  arabicTranslation[0].list7.sellBeforeRemainingVolume,
  arabicTranslation[0].list7.sellBeforeFillVolume,
  arabicTranslation[0].list7.sellDuringOrgVolume,
  arabicTranslation[0].list7.sellDuringRemainingVolume,
  arabicTranslation[0].list7.sellDuringFillVolume,
  arabicTranslation[0].list7.sellAfterOrgVolume,
  arabicTranslation[0].list7.sellAfterRemainingVolume,
  arabicTranslation[0].list7.sellAfterFillVolume,
  arabicTranslation[0].list7.sellTotalOrgVolume,
  arabicTranslation[0].list7.sellTotalRemainingVolume,
  arabicTranslation[0].list7.sellTotalFillVolume,
  arabicTranslation[0].list7.percentageOfSellOrgVolumeBefore,
  arabicTranslation[0].list7.percentageOfSellRemainingVolumeBefore,
  arabicTranslation[0].list7.percentageOfSellFillVolumeBefore,
  arabicTranslation[0].list7.percentageOfSellOrgVolumeDuring,
  arabicTranslation[0].list7.percentageOfSellRemainingVolumeDuring,
  arabicTranslation[0].list7.percentageOfSellFillVolumeDuring,
  arabicTranslation[0].list7.percentageOfSellOrgVolumeAfter,
  arabicTranslation[0].list7.percentageOfSellRemainingVolumeAfter,
  arabicTranslation[0].list7.percentageOfSellFillVolumeAfter,
];

let chartObjects = {
  buyBeforeOrgVolume: {
    x: date,
    y: [],
    name: name1[0],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyBeforeOrgVolume}<br>`,
  },
  buyBeforeRemainingVolume: {
    x: date,
    y: [],
    name: name1[1],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyBeforeRemainingVolume}<br>`,
  },
  buyBeforeFillVolume: {
    x: date,
    y: [],
    name: name1[2],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyBeforeFillVolume}<br>`,
  },
  buyDuringOrgVolume: {
    x: date,
    y: [],
    name: name1[3],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyDuringOrgVolume}<br>`,
  },
  buyDuringRemainingVolume: {
    x: date,
    y: [],
    name: name1[4],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyDuringRemainingVolume}<br>`,
  },
  buyDuringFillVolume: {
    x: date,
    y: [],
    name: name1[5],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyDuringFillVolume}<br>`,
  },
  buyAfterOrgVolume: {
    x: date,
    y: [],
    name: name1[6],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyAfterOrgVolume}<br>`,
  },
  buyAfterRemainingVolume: {
    x: date,
    y: [],
    name: name1[7],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyAfterRemainingVolume}<br>`,
  },
  buyAfterFillVolume: {
    x: date,
    y: [],
    name: name1[8],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyAfterFillVolume}<br>`,
  },
  buyTotalOrgVolume: {
    x: date,
    y: [],
    name: name1[9],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyTotalOrgVolume}<br>`,
  },
  buyTotalRemainingVolume: {
    x: date,
    y: [],
    name: name1[10],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyTotalRemainingVolume}<br>`,
  },
  buyTotalFillVolume: {
    x: date,
    y: [],
    name: name1[11],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.buyTotalFillVolume}<br>`,
  },
  percentageOfBuyOrgVolumeBefore: {
    x: date,
    y: [],
    name: name1[12],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfBuyOrgVolumeBefore}<br>`,
  },
  percentageOfBuyRemainingVolumeBefore: {
    x: date,
    y: [],
    name: name1[13],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfBuyRemainingVolumeBefore}<br>`,
  },
  percentageOfBuyFillVolumeBefore: {
    x: date,
    y: [],
    name: name1[14],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfBuyFillVolumeBefore}<br>`,
  },
  percentageOfBuyOrgVolumeDuring: {
    x: date,
    y: [],
    name: name1[15],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfBuyOrgVolumeDuring}<br>`,
  },
  percentageOfBuyRemainingVolumeDuring: {
    x: date,
    y: [],
    name: name1[16],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfBuyRemainingVolumeDuring}<br>`,
  },
  percentageOfBuyFillVolumeDuring: {
    x: date,
    y: [],
    name: name1[17],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfBuyFillVolumeDuring}<br>`,
  },
  percentageOfBuyOrgVolumeAfter: {
    x: date,
    y: [],
    name: name1[18],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfBuyOrgVolumeAfter}<br>`,
  },
  percentageOfBuyRemainingVolumeAfter: {
    x: date,
    y: [],
    name: name1[19],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfBuyRemainingVolumeAfter}<br>`,
  },
  percentageOfBuyFillVolumeAfter: {
    x: date,
    y: [],
    name: name1[20],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfBuyFillVolumeAfter}<br>`,
  },
  sellBeforeOrgVolume: {
    x: date,
    y: [],
    name: name1[21],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellBeforeOrgVolume}<br>`,
  },
  sellBeforeRemainingVolume: {
    x: date,
    y: [],
    name: name1[22],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellBeforeRemainingVolume}<br>`,
  },
  sellBeforeFillVolume: {
    x: date,
    y: [],
    name: name1[23],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellBeforeFillVolume}<br>`,
  },
  sellDuringOrgVolume: {
    x: date,
    y: [],
    name: name1[24],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellDuringOrgVolume}<br>`,
  },
  sellDuringRemainingVolume: {
    x: date,
    y: [],
    name: name1[25],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellDuringRemainingVolume}<br>`,
  },
  sellDuringFillVolume: {
    x: date,
    y: [],
    name: name1[26],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellDuringFillVolume}<br>`,
  },
  sellAfterOrgVolume: {
    x: date,
    y: [],
    name: name1[27],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellAfterOrgVolume}<br>`,
  },
  sellAfterRemainingVolume: {
    x: date,
    y: [],
    name: name1[28],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellAfterRemainingVolume}<br>`,
  },
  sellAfterFillVolume: {
    x: date,
    y: [],
    name: name1[29],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellAfterFillVolume}<br>`,
  },
  sellTotalOrgVolume: {
    x: date,
    y: [],
    name: name1[30],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellTotalOrgVolume}<br>`,
  },
  sellTotalRemainingVolume: {
    x: date,
    y: [],
    name: name1[31],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellTotalRemainingVolume}<br>`,
  },
  sellTotalFillVolume: {
    x: date,
    y: [],
    name: name1[32],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.sellTotalFillVolume}<br>`,
  },
  percentageOfSellOrgVolumeBefore: {
    x: date,
    y: [],
    name: name1[33],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfSellOrgVolumeBefore}<br>`,
  },
  percentageOfSellRemainingVolumeBefore: {
    x: date,
    y: [],
    name: name1[34],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfSellRemainingVolumeBefore}<br>`,
  },
  percentageOfSellFillVolumeBefore: {
    x: date,
    y: [],
    name: name1[35],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfSellFillVolumeBefore}<br>`,
  },
  percentageOfSellOrgVolumeDuring: {
    x: date,
    y: [],
    name: name1[36],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfSellOrgVolumeDuring}<br>`,
  },
  percentageOfSellRemainingVolumeDuring: {
    x: date,
    y: [],
    name: name1[37],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfSellRemainingVolumeDuring}<br>`,
  },
  percentageOfSellFillVolumeDuring: {
    x: date,
    y: [],
    name: name1[38],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfSellFillVolumeDuring}<br>`,
  },
  percentageOfSellOrgVolumeAfter: {
    x: date,
    y: [],
    name: name1[39],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfSellOrgVolumeAfter}<br>`,
  },
  percentageOfSellRemainingVolumeAfter: {
    x: date,
    y: [],
    name: name1[40],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfSellRemainingVolumeAfter}<br>`,
  },
  percentageOfSellFillVolumeAfter: {
    x: date,
    y: [],
    name: name1[41],
    type: "bar",
    hovertemplate: `%{x} :${arabicTranslation[0].list7.date}<br>%{y} :${arabicTranslation[0].list7.percentageOfSellFillVolumeAfter}<br>`,
  },
};
function prepareDataForCharts(Objects) {
  date = [];
  chartsDataArrays.buyBeforeOrgVolume = [];
  chartsDataArrays.buyBeforeRemainingVolume = [];
  chartsDataArrays.buyBeforeFillVolume = [];
  chartsDataArrays.buyDuringOrgVolume = [];
  chartsDataArrays.buyDuringRemainingVolume = [];
  chartsDataArrays.buyDuringFillVolume = [];
  chartsDataArrays.buyAfterOrgVolume = [];
  chartsDataArrays.buyAfterRemainingVolume = [];
  chartsDataArrays.buyAfterFillVolume = [];
  chartsDataArrays.buyTotalOrgVolume = [];
  chartsDataArrays.buyTotalRemainingVolume = [];
  chartsDataArrays.buyTotalFillVolume = [];
  chartsDataArrays.percentageOfBuyOrgVolumeBefore = [];
  chartsDataArrays.percentageOfBuyRemainingVolumeBefore = [];
  chartsDataArrays.percentageOfBuyFillVolumeBefore = [];
  chartsDataArrays.percentageOfBuyOrgVolumeDuring = [];
  chartsDataArrays.percentageOfBuyRemainingVolumeDuring = [];
  chartsDataArrays.percentageOfBuyFillVolumeDuring = [];
  chartsDataArrays.percentageOfBuyOrgVolumeAfter = [];
  chartsDataArrays.percentageOfBuyRemainingVolumeAfter = [];
  chartsDataArrays.percentageOfBuyFillVolumeAfter = [];
  chartsDataArrays.sellBeforeOrgVolume = [];
  chartsDataArrays.sellBeforeRemainingVolume = [];
  chartsDataArrays.sellBeforeFillVolume = [];
  chartsDataArrays.sellDuringOrgVolume = [];
  chartsDataArrays.sellDuringRemainingVolume = [];
  chartsDataArrays.sellDuringFillVolume = [];
  chartsDataArrays.sellAfterOrgVolume = [];
  chartsDataArrays.sellAfterRemainingVolume = [];
  chartsDataArrays.sellAfterFillVolume = [];
  chartsDataArrays.sellTotalOrgVolume = [];
  chartsDataArrays.sellTotalRemainingVolume = [];
  chartsDataArrays.sellTotalFillVolume = [];
  chartsDataArrays.percentageOfSellOrgVolumeBefore = [];
  chartsDataArrays.percentageOfSellRemainingVolumeBefore = [];
  chartsDataArrays.percentageOfSellFillVolumeBefore = [];
  chartsDataArrays.percentageOfSellOrgVolumeDuring = [];
  chartsDataArrays.percentageOfSellRemainingVolumeDuring = [];
  chartsDataArrays.percentageOfSellFillVolumeDuring = [];
  chartsDataArrays.percentageOfSellOrgVolumeAfter = [];
  chartsDataArrays.percentageOfSellRemainingVolumeAfter = [];
  chartsDataArrays.percentageOfSellFillVolumeAfter = [];
  Objects.map((el) => {
    date.push(el.date);
    chartsDataArrays.buyBeforeOrgVolume.push(el.buyBeforeOrgVolume);
    chartsDataArrays.buyBeforeRemainingVolume.push(el.buyBeforeRemainingVolume);
    chartsDataArrays.buyBeforeFillVolume.push(el.buyBeforeFillVolume);
    chartsDataArrays.buyDuringOrgVolume.push(el.buyDuringOrgVolume);
    chartsDataArrays.buyDuringRemainingVolume.push(el.buyDuringRemainingVolume);
    chartsDataArrays.buyDuringFillVolume.push(el.buyDuringFillVolume);
    chartsDataArrays.buyAfterOrgVolume.push(el.buyAfterOrgVolume);
    chartsDataArrays.buyAfterRemainingVolume.push(el.buyAfterRemainingVolume);
    chartsDataArrays.buyAfterFillVolume.push(el.buyAfterFillVolume);
    chartsDataArrays.buyTotalOrgVolume.push(el.buyTotalOrgVolume);
    chartsDataArrays.buyTotalRemainingVolume.push(el.buyTotalRemainingVolume);
    chartsDataArrays.buyTotalFillVolume.push(el.buyTotalFillVolume);
    chartsDataArrays.percentageOfBuyOrgVolumeBefore.push(el.percentageOfBuyOrgVolumeBefore);
    chartsDataArrays.percentageOfBuyRemainingVolumeBefore.push(
      el.percentageOfBuyRemainingVolumeBefore
    );
    chartsDataArrays.percentageOfBuyFillVolumeBefore.push(el.percentageOfBuyFillVolumeBefore);
    chartsDataArrays.percentageOfBuyOrgVolumeDuring.push(el.percentageOfBuyOrgVolumeDuring);
    chartsDataArrays.percentageOfBuyRemainingVolumeDuring.push(
      el.percentageOfBuyRemainingVolumeDuring
    );
    chartsDataArrays.percentageOfBuyFillVolumeDuring.push(el.percentageOfBuyFillVolumeDuring);
    chartsDataArrays.percentageOfBuyOrgVolumeAfter.push(el.percentageOfBuyOrgVolumeAfter);
    chartsDataArrays.percentageOfBuyRemainingVolumeAfter.push(
      el.percentageOfBuyRemainingVolumeAfter
    );
    chartsDataArrays.percentageOfBuyFillVolumeAfter.push(el.percentageOfBuyFillVolumeAfter);
    chartsDataArrays.sellBeforeOrgVolume.push(el.sellBeforeOrgVolume);
    chartsDataArrays.sellBeforeRemainingVolume.push(el.sellBeforeRemainingVolume);
    chartsDataArrays.sellBeforeFillVolume.push(el.sellBeforeFillVolume);
    chartsDataArrays.sellDuringOrgVolume.push(el.sellDuringOrgVolume);
    chartsDataArrays.sellDuringRemainingVolume.push(el.sellDuringRemainingVolume);
    chartsDataArrays.sellDuringFillVolume.push(el.sellDuringFillVolume);
    chartsDataArrays.sellAfterOrgVolume.push(el.sellAfterOrgVolume);
    chartsDataArrays.sellAfterRemainingVolume.push(el.sellAfterRemainingVolume);
    chartsDataArrays.sellAfterFillVolume.push(el.sellAfterFillVolume);
    chartsDataArrays.sellTotalOrgVolume.push(el.sellTotalOrgVolume);
    chartsDataArrays.sellTotalRemainingVolume.push(el.sellTotalRemainingVolume);
    chartsDataArrays.sellTotalFillVolume.push(el.sellTotalFillVolume);
    chartsDataArrays.percentageOfSellOrgVolumeBefore.push(el.percentageOfSellOrgVolumeBefore);
    chartsDataArrays.percentageOfSellRemainingVolumeBefore.push(
      el.percentageOfSellRemainingVolumeBefore
    );
    chartsDataArrays.percentageOfSellFillVolumeBefore.push(el.percentageOfSellFillVolumeBefore);
    chartsDataArrays.percentageOfSellOrgVolumeDuring.push(el.percentageOfSellOrgVolumeDuring);
    chartsDataArrays.percentageOfSellRemainingVolumeDuring.push(
      el.percentageOfSellRemainingVolumeDuring
    );
    chartsDataArrays.percentageOfSellFillVolumeDuring.push(el.percentageOfSellFillVolumeDuring);
    chartsDataArrays.percentageOfSellOrgVolumeAfter.push(el.percentageOfSellOrgVolumeAfter);
    chartsDataArrays.percentageOfSellRemainingVolumeAfter.push(
      el.percentageOfSellRemainingVolumeAfter
    );
    chartsDataArrays.percentageOfSellFillVolumeAfter.push(el.percentageOfSellFillVolumeAfter);
  });
}

function drawCharts(Objects, selectedItems) {
  prepareDataForCharts(Objects);
  let selectedItemsObjects = [];
  selectedItems.map((el) => {
    let temp = chartObjects[el];
    temp.x = date;
    temp.y = chartsDataArrays[el];
    selectedItemsObjects.push(temp);
  });
  console.log(selectedItemsObjects);
  let data1 = [];
  data1.push(...selectedItemsObjects);
  let layout = { barmode: "group", showlegend: true };
  Plotly.newPlot("chart1", data1, layout, { responsive: true });
}
function updateCharts(chartsData) {
  if (
    $("#selectCompany").val() &&
    $("#selectNin").val() &&
    $("#selectChartItems").val()
  ) {
    let selectedNinObj = customFilter.filterByNin(
      chartsData,
      $("#selectNin").val()
    );
    let selectedCompanyObj = customFilter.filterBySecurityCode(
      selectedNinObj,
      $("#selectCompany").val()
    );
    let selectChartItemsValue = $("#selectChartItems").val();

    if (
      selectedCompanyObj.length === 0 ||
      selectChartItems.length === 0 ||
      selectChartItems === null
    ) {
      drawCharts(emptyObj, selectChartItemsValue);
    } else {
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
    $("#datatable8 thead tr")
      .clone(true)
      .addClass("filters")
      .appendTo("#datatable8 thead");
    var table = $("#datatable8").DataTable({
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

              return $("#datatable8").DataTable().column(idx).visible();
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

              return $("#datatable8").DataTable().column(idx).visible();
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

              return $("#datatable8").DataTable().column(idx).visible();
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
        { data: "buyBeforeOrgVolume" },
        { data: "buyBeforeRemainingVolume" },
        { data: "buyBeforeFillVolume" },
        { data: "buyDuringOrgVolume" },
        { data: "buyDuringRemainingVolume" },
        { data: "buyDuringFillVolume" },
        { data: "buyAfterOrgVolume" },
        { data: "buyAfterRemainingVolume" },
        { data: "buyAfterFillVolume" },
        { data: "buyTotalOrgVolume" },
        { data: "buyTotalRemainingVolume" },
        { data: "buyTotalFillVolume" },
        {
          data: "percentageOfBuyOrgVolumeBefore",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfBuyRemainingVolumeBefore",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfBuyFillVolumeBefore",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfBuyOrgVolumeDuring",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfBuyRemainingVolumeDuring",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfBuyFillVolumeDuring",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfBuyOrgVolumeAfter",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfBuyRemainingVolumeAfter",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfBuyFillVolumeAfter",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        { data: "sellBeforeOrgVolume" },
        { data: "sellBeforeRemainingVolume" },
        { data: "sellBeforeFillVolume" },
        { data: "sellDuringOrgVolume" },
        { data: "sellDuringRemainingVolume" },
        { data: "sellDuringFillVolume" },
        { data: "sellAfterOrgVolume" },
        { data: "sellAfterRemainingVolume" },
        { data: "sellAfterFillVolume" },
        { data: "sellTotalOrgVolume" },
        { data: "sellTotalRemainingVolume" },
        { data: "sellTotalFillVolume" },
        {
          data: "percentageOfSellOrgVolumeBefore",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfSellRemainingVolumeBefore",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfSellFillVolumeBefore",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfSellOrgVolumeDuring",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfSellRemainingVolumeDuring",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfSellFillVolumeDuring",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfSellOrgVolumeAfter",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfSellRemainingVolumeAfter",
          render: function (data, type, row, meta) {
            if (data != null) {
              return data + "%";
            } else {
              return null;
            }
          },
        },
        {
          data: "percentageOfSellFillVolumeAfter",
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

          for (let key in chartsData[0].details[0]) {
            var option = document.createElement("option");
            option.value = key;
            option.innerHTML = arabicTranslation[0].list7[key];
            selectChartItems.appendChild(option);
          }
          var selectBoxElement = document.querySelector("#selectChartItems");
          dselect(selectBoxElement, {
            search: true,
          });
        }
        const emptyObj = [
          {
            date: null,
            totalValue: null,
            beforeTotalValue: null,
            afterTotalValue: null,
          },
        ];

        $("#selectCompany").on("change", function () {
          updateCharts(chartsData);
        });
        $("#selectChartItems").on("change", function () {
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
