const tablesStructures = {
  list1A: [
    "securityCode",
    "securityName",
    "nin",
    "ninName",
    "countMatching",
    "combination",
    "violators",
    "totalViolation",
    "percentage",
  ],
  list1B: [
    "securityCode",
    "securityName",
    "nin",
    "ninName",
    "secondNin",
    "secondNinName",
    "combination",
    "numoftrades_buy",
    "numoftrades_sell",
    "buyVolume",
    "buyValue",
    "percentageamountbuy",
    "percentagevaluebuy",
    "sellVolume",
    "sellValue",
    "percentageamountsell",
    "percentagevaluesell",
    "countMatching",
    "totalViolation",
    "percentage",
  ],
  list1C: [
    "securityCode",
    "securityName",
    "nin",
    "ninName",
    "date",
    "buyVolume",
    "buyValue",
    "totalBuyVolume",
    "totalBuyValue",
    "buyVolumePercentage",
    "buyValuePercentage",
    "sellVolume",
    "sellValue",
    "totalSellVolume",
    "totalSellValue",
    "sellVolumePercentage",
    "sellValuePercentage",
    "buyAvgPriceByNin",
    "sellAvgPriceByNin",
    "buyAvgPriceBysc",
    "sellAvgPriceBySc",
    "sector",
    "percentageTradesBuy",
    "percentageTradesSell",
  ],
  list2: [
    "securityCode",
    "securityName",
    "date",
    "buyVolume",
    "buyValue",
    "sellVolume",
    "sellValue",
    "numoftrades_buy",
    "numoftrades_sell",
    "close",
    "balance",
    "balanceValue",
    "capital",
    "percentageOwnership",
    "percentageBalance",
  ],
  list3: [
    "ninName",
    "nin",
    "relation",
    "address",
    "wallets",
    "agencies",
    "tool",
    "phone",
    "nationality",
    "job",
    "otherNinName",
    "otherNin",
    "otherRelation",
    "otherAddress",
    "otherWallets",
    "otherAgencies",
    "otherTool",
    "otherPhone",
    "otherNationality",
    "otherJob",
    "family_relation",
    "address_relation",
    "job_relation",
    "wallets_relation",
  ],
  list4: [
    "securityCode",
    "securityName",
    "volumeOfBuyEnter_fullydisclosed",
    "valueOfBuyEnter_fullydisclosed",
    "nbOfBuyEnter_fullydisclosed",
    "volumeOfBuyEnter_partiallydiscolsed",
    "valueOfBuyEnter_partiallydiscolsed",
    "nbOfBuyEnter_partiallydiscolsed",
    "volumeOfSellEnter_partiallydiscolsed",
    "valueOfSellEnter_partiallydiscolsed",
    "nbOfSellEnter_partiallydiscolsed",
    "volumeOfSellAmend_partiallydiscolsed",
    "valueOfSellAmend_partiallydiscolsed",
    "nbOfSellAmend_partiallydiscolsed",
    "volumeOfSellEnter_fullydisclosed",
    "valueOfSellEnter_fullydisclosed",
    "nbOfSellEnter_fullydisclosed",
    "volumeOfBuyAmend_partiallydiscolsed",
    "valueOfBuyAmend_partiallydiscolsed",
    "nbOfBuyAmend_partiallydiscolsed",
    "volumeOfSellAmend_fullydisclosed",
    "valueOfSellAmend_fullydisclosed",
    "nbOfSellAmend_fullydisclosed",
    "volumeOfBuyAmend_fullydisclosed",
    "valueOfBuyAmend_fullydisclosed",
    "nbOfBuyAmend_fullydisclosed",
    "buyEnterPercentage",
    "buyAmendPercentage",
    "sellEnterPercentage",
    "sellAmendPercentage",
  ],
  list5: [
    "securityCode",
    "securityName",
    "nin",
    "ninName",
    "date",
    "fullyExecutedBuyOrderTotalVolume",
    "fullyExecutedBuyOrderTotalValue",
    "partiallyExecutedBuyOrderTotalValue",
    "partiallyExecutedBuyOrderTotalVolume",
    "fullyExecutedSellOrderTotalValue",
    "fullyExecutedSellOrderTotalVolume",
    "partiallyExecutedSellOrderTotalValue",
    "partiallyExecutedSellOrderTotalVolume",
    "totalVolume",
    "totalValue",
    "percentageOfFullyExecutedBuyTradesVolume",
    "percentageOfFullyExecutedBuyTradesValue",
    "percentageOfPartiallyExecutedBuyTradesVolume",
    "percentageOfPartiallyExecutedBuyTradesValue",
    "percentageOfFullyExecutedSellTradesVolume",
    "percentageOfFullyExecutedSellTradesValue",
    "percentageOfPartiallyExecutedSellTradesVolume",
    "percentageOfPartiallyExecutedSellTradesValue",
  ],
  list6: [
    "securityCode",
    "securityName",
    "nin",
    "ninName",
    "date",
    "balance",
    "balanceValue",
    "percentageOwnership",
    "totalBalanceByDay",
  ],
  list7: [
    "securityCode",
    "securityName",
    "date",
    "nin",
    "ninName",
    "buyBeforeOrgVolume",
    "buyBeforeRemainingVolume",
    "buyBeforeFillVolume",
    "buyDuringOrgVolume",
    "buyDuringRemainingVolume",
    "buyDuringFillVolume",
    "buyAfterOrgVolume",
    "buyAfterRemainingVolume",
    "buyAfterFillVolume",
    "buyTotalOrgVolume",
    "buyTotalRemainingVolume",
    "buyTotalFillVolume",
    "percentageOfBuyOrgVolumeBefore",
    "percentageOfBuyRemainingVolumeBefore",
    "percentageOfBuyFillVolumeBefore",
    "percentageOfBuyOrgVolumeDuring",
    "percentageOfBuyRemainingVolumeDuring",
    "percentageOfBuyFillVolumeDuring",
    "percentageOfBuyOrgVolumeAfter",
    "percentageOfBuyRemainingVolumeAfter",
    "percentageOfBuyFillVolumeAfter",
    "sellBeforeOrgVolume",
    "sellBeforeRemainingVolume",
    "sellBeforeFillVolume",
    "sellDuringOrgVolume",
    "sellDuringRemainingVolume",
    "sellDuringFillVolume",
    "sellAfterOrgVolume",
    "sellAfterRemainingVolume",
    "sellAfterFillVolume",
    "sellTotalOrgVolume",
    "sellTotalRemainingVolume",
    "sellTotalFillVolume",
    "percentageOfSellOrgVolumeBefore",
    "percentageOfSellRemainingVolumeBefore",
    "percentageOfSellFillVolumeBefore",
    "percentageOfSellOrgVolumeDuring",
    "percentageOfSellRemainingVolumeDuring",
    "percentageOfSellFillVolumeDuring",
    "percentageOfSellOrgVolumeAfter",
    "percentageOfSellRemainingVolumeAfter",
    "percentageOfSellFillVolumeAfter",
  ],
  list8: [
    "APCode",
    "APName",
    "LoginDate",
    "IPAddress",
    "ForumIPAddress",
    "NIN",
    "InvestorName",
    "LoginName",
    "SubjectName",
    "SubjectLink",
    "violators",
  ],
  list9A: [
    "securityCode",
    "securityName",
    "nin",
    "ninName",
    "date",
    "buyBeforeFillVolume",
    "buyBeforeTotalValue",
    "buyDuringFillVolume",
    "buyDuringTotalValue",
    "buyAfterFillVolume",
    "buyAfterTotalValue",
    "sellBeforeFillVolume",
    "sellBeforeTotalValue",
    "sellDuringFillVolume",
    "sellDuringTotalValue",
    "sellAfterFillVolume",
    "sellAfterTotalValue",
    "percentageBuyVolumeBefore",
    "percentageBuyVolumeDuring",
    "percentageBuyVolumeAfter",
    "percentageBuyValueBefore",
    "percentageBuyValueDuring",
    "percentageBuyValueAfter",
    "percentageSellVolumeBefore",
    "percentageSellVolumeDuring",
    "percentageSellVolumeAfter",
    "percentageSellValueBefore",
    "percentageSellValueDuring",
    "percentageSellValueAfter",
    "buyEnterBeforeTotalValue",
    "buyBeforeOrgVolume",
    "buyEnterDuringTotalValue",
    "buyDuringOrgVolume",
    "buyEnterAfterTotalValue",
    "buyAfterOrgVolume",
    "sellEnterBeforeTotalValue",
    "sellBeforeOrgVolume",
    "sellEnterDuringTotalValue",
    "sellDuringOrgVolume",
    "sellEnterAfterTotalValue",
    "sellAfterOrgVolume",
    "securityEnteredTotalValue",
    "securityEnteredOrgVolume",
    "securityExecutedFillVolume",
    "securityExecutedTotalValue",
    "percentageBuyEnterVolumeBefore",
    "percentageBuyEnterVolumeDuring",
    "percentageBuyEnterVolumeAfter",
    "percentageSellEnterVolumeBefore",
    "percentageSellEnterVolumeDuring",
    "percentageSellEnterVolumeAfter",
    "percentageBuyEnterValueBefore",
    "percentageBuyEnterValueDuring",
    "percentageBuyEnterValueAfter",
    "percentageSellEnterValueBefore",
    "percentageSellEnterValueDuring",
    "percentageSellEnterValueAfter",
  ],
  list9B: [
    "securityCode",
    "securityName",
    "date",
    "nin",
    "ninName",
    "buyBeforePrice",
    "buyDuringPrice",
    "buyAfterPrice",
    "sellBeforePrice",
    "sellDuringPrice",
    "sellAfterPrice",
    "allMarketAvgBuyPrice",
    "allMarketAvgSellPrice",
  ],
  list9C: [
    "securityCode",
    "securityName",
    "date",
    "nin",
    "ninName",
    "buyBeforeFirstPrice",
    "buyBeforeLastPrice",
    "buyBeforeMinPrice",
    "buyBeforeMaxPrice",
    "buyDuringFirstPrice",
    "buyDuringLastPrice",
    "buyDuringMinPrice",
    "buyDuringMaxPrice",
    "buyAfterFirstPrice",
    "buyAfterLastPrice",
    "buyAfterMinPrice",
    "buyAfterMaxPrice",
    "sellBeforeFirstPrice",
    "sellBeforeLastPrice",
    "sellBeforeMinPrice",
    "sellBeforeMaxPrice",
    "sellDuringFirstPrice",
    "sellDuringLastPrice",
    "sellDuringMinPrice",
    "sellDuringMaxPrice",
    "sellAfterFirstPrice",
    "sellAfterLastPrice",
    "sellAfterMinPrice",
    "sellAfterMaxPrice",
  ],
  list9D: [
    "securityCode",
    "securityName",
    "date",
    "fillVolume",
    "totalVolume",
    "percentage",
  ],
  list9E: [
    "securityCode",
    "securityName",
    "date",
    "nin",
    "ninName",
    "buyBeforeRemainingVolume",
    "buyBeforeOrgVolume",
    "buyBeforeAmendOrgVolume",
    "buyBeforePercentageEnter",
    "buyBeforePercentageAmend",
    "buyDuringRemainingVolume",
    "buyDuringOrgVolume",
    "buyDuringAmendOrgVolume",
    "buyDuringPercentageEnter",
    "buyDuringPercentageAmend",
    "buyAfterRemainingVolume",
    "buyAfterOrgVolume",
    "buyAfterAmendOrgVolume",
    "buyAfterPercentageEnter",
    "buyAfterPercentageAmend",
    "sellBeforeRemainingVolume",
    "sellBeforeOrgVolume",
    "sellBeforeAmendOrgVolume",
    "sellBeforePercentageEnter",
    "sellBeforePercentageAmend",
    "sellDuringRemainingVolume",
    "sellDuringOrgVolume",
    "sellDuringAmendOrgVolume",
    "sellDuringPercentageEnter",
    "sellDuringPercentageAmend",
    "sellAfterRemainingVolume",
    "sellAfterOrgVolume",
    "sellAfterAmendOrgVolume",
    "sellAfterPercentageEnter",
    "sellAfterPercentageAmend",
  ],
  list9F: [
    "securityCode",
    "securityName",
    "date",
    "nin",
    "ninName",
    "buyBeforeCountTrades",
    "buyBeforeCountDelete",
    "buyBeforePercentage",
    "buyDuringCountTrades",
    "buyDuringCountDelete",
    "buyDuringPercentage",
    "buyAfterCountTrades",
    "buyAfterCountDelete",
    "buyAfterPercentage",
    "sellBeforeCountTrades",
    "sellBeforeCountDelete",
    "sellBeforePercentage",
    "sellDuringCountTrades",
    "sellDuringCountDelete",
    "sellDuringPercentage",
    "sellAfterCountTrades",
    "sellAfterCountDelete",
    "sellAfterPercentage",
  ],
  list10: [
    "securityCode",
    "securityName",
    "date",
    "nin",
    "ninName",
    "buyVolume",
    "buyValue",
    "sellVolume",
    "sellValue",
    "numoftrades_buy",
    "numoftrades_sell",
    "avgBuy",
    "avgSell",
  ],
  list11: [
    "securityClosingPrice",
    "securityVolumeTraded",
    "securityValueTraded",
    "securityNumberOfTrades",
    "securityCode",
    "sectorClosingPrice",
    "sectorVolumeTraded",
    "sectorValueTraded",
    "sectorNumberOfTrades",
    "sector",
    "securityName",
  ],
};
export default tablesStructures;
