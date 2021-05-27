function creategoryAndAggregate(acc, row) {
  let item = acc[row.type];
  if (!item) {
    item = 0;
  }
  item += row.amount;
  acc[row.type] = item;
  return acc;
}

function objToArrOR(obj, sortByValue) {
  const result = [];
  for (let key in obj) {
    result.push({
      label: key,
      value: obj[key],
    });
  }
  return result.sort((a, b) =>
    sortByValue ? b.value - a.value : a.label - b.label
  );
}

function keyAggregateFn(key, valueName) {
  return (acc, row) => {
    if (row[key] !== valueName) {
      return acc;
    }
    let amount = acc[row.year];
    if (!amount) {
      amount = 0;
    }
    amount += row.amount;
    acc[row.year] = amount;
    return acc;
  };
}

function objReduceSum(obj) {
  let value = 0;
  for (let key in obj) {
    value += obj[key];
  }
  return value;
}

const operatingRevenueData = convToJson(revenueData)
  .map((row) =>
    Object.assign({}, row, {
      year: +row.financial_year,
      amount: +row.amount * 1000000,
      gdp: +row.percent_of_gdp,
    })
  )
  .sort((a, b) => a.year - b.year);

const ds1OR = operatingRevenueData.filter(
  (row) => row.year >= 1997 && +row.year <= 2010
);
const ds2OR = operatingRevenueData.filter(
  (row) => row.year >= 2011 && +row.year <= 2021
);

const operatingRevenueTax = objReduceSum(
  operatingRevenueData.reduce(keyAggregateFn("class", "Tax"), {})
);
const operatingRevenueFeesAndCharges = objReduceSum(
  operatingRevenueData.reduce(keyAggregateFn("class", "Fees and Charges"), {})
);

const operatingRevenueOthers = objReduceSum(
  operatingRevenueData.reduce(keyAggregateFn("class", "Others"), {})
);

const ds1ORoperatingRevenueTax = objReduceSum(
  ds1OR.reduce(keyAggregateFn("class", "Tax"), {})
);
const ds1ORoperatingRevenueFeesAndCharges = objReduceSum(
  ds1OR.reduce(keyAggregateFn("class", "Fees and Charges"), {})
);

const ds1ORoperatingRevenueOthers = objReduceSum(
  ds1OR.reduce(keyAggregateFn("class", "Others"), {})
);

const ds2ORoperatingRevenueTax = objReduceSum(
  ds2OR.reduce(keyAggregateFn("class", "Tax"), {})
);
const ds2ORoperatingRevenueFeesAndCharges = objReduceSum(
  ds2OR.reduce(keyAggregateFn("class", "Fees and Charges"), {})
);

const ds2ORoperatingRevenueOthers = objReduceSum(
  ds2OR.reduce(keyAggregateFn("class", "Others"), {})
);

const ds1ORTax = ds1OR.filter((row) => row.class === "Tax");
const ds1ORTaxItems = objToArrOR(ds1ORTax.reduce(creategoryAndAggregate, {}));

const ds2ORTax = ds1OR.filter((row) => row.class === "Tax");
const ds2ORTaxItems = objToArrOR(ds2ORTax.reduce(creategoryAndAggregate, {}));

const tax = operatingRevenueData.filter((row) => row.class === "Tax");
const taxItems = objToArrOR(tax.reduce(creategoryAndAggregate, {}));

const ds1ORFeesAndCharge = ds1OR.filter(
  (row) => row.class === "Fees and Charges"
);
const ds1ORFeesAndChargeOtherTaxes = objToArrOR(
  ds1ORFeesAndCharge.reduce(keyAggregateFn("type", "Other Taxes"), {})
);
const ds1ORFeesAndChargeExcluding = objToArrOR(
  ds1ORFeesAndCharge.reduce(
    keyAggregateFn(
      "type",
      "Fees and Charges (Excluding Vehicle Quota Premiums)"
    ),
    {}
  )
);

const ds2ORFeesAndCharge = ds1OR.filter(
  (row) => row.class === "Fees and Charges"
);
const ds2ORFeesAndChargeOtherTaxes = objToArrOR(
  ds2ORFeesAndCharge.reduce(keyAggregateFn("type", "Other Taxes"), {})
);
const ds2ORFeesAndChargeExcluding = objToArrOR(
  ds2ORFeesAndCharge.reduce(
    keyAggregateFn(
      "type",
      "Fees and Charges (Excluding Vehicle Quota Premiums)"
    ),
    {}
  )
);

const feesAndCharge = operatingRevenueData.filter(
  (row) => row.class === "Fees and Charges"
);
const feesAndChargeOtherTaxes = objToArrOR(
  feesAndCharge.reduce(keyAggregateFn("type", "Other Taxes"), {})
);
const feesAndChargeExcluding = objToArrOR(
  feesAndCharge.reduce(
    keyAggregateFn(
      "type",
      "Fees and Charges (Excluding Vehicle Quota Premiums)"
    ),
    {}
  )
);

const ds1OROthers = objToArrOR(
  ds1OR.reduce(keyAggregateFn("class", "Others"), {}),
  true
);
const ds1OROthersTotal = ds1OROthers.reduce((acc, row) => acc + row.value, 0);
const ds1OROthersTop3 =
  (ds1OROthers.slice(0, 3).reduce((acc, row) => acc + row.value, 0) * 100) /
  ds1OROthersTotal;

const ds2OROthers = objToArrOR(
  ds2OR.reduce(keyAggregateFn("class", "Others"), {}),
  true
);
const ds2OROthersTotal = ds2OROthers.reduce((acc, row) => acc + row.value, 0);
const ds2OROthersTop3 =
  (ds2OROthers.slice(0, 3).reduce((acc, row) => acc + row.value, 0) * 100) /
  ds2OROthersTotal;

const others = objToArrOR(
  operatingRevenueData.reduce(keyAggregateFn("class", "Others"), {}),
  true
);
const othersTotal = others.reduce((acc, row) => acc + row.value, 0);
const othersTop3 =
  (others.slice(0, 3).reduce((acc, row) => acc + row.value, 0) * 100) /
  othersTotal;

var operating_revenue_data_segment_1_operating_revenue = {
  chart: {
    showBorder: "0",
    showShadow: "0",
    use3DLighting: "0",
    showLabels: "0",
    showValues: "0",
    paletteColors: "#1e6f5c, #29bb89, #e6dd3b",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    doughnutRadius: "75",
    pieRadius: "95",
    numberPrefix: "$",
    plotBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    baseFont: "Nunito Sans",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showLegend: "1",
    legendShadow: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendBgAlpha: "0",
    chartTopMargin: "-10",
    canvasTopMargin: "-10",
    chartBottomMargin: "20",
    canvasBottomMargin: "20",
    legendNumColumns: "1",
    legendPosition: "RIGHT",
    defaultCenterLabel: `Total <br> $${FusionCharts.formatNumber(
      ds1ORoperatingRevenueTax +
        ds1ORoperatingRevenueFeesAndCharges +
        ds1ORoperatingRevenueOthers,
      "currency"
    )}`,
    centerLabel: "$label<br>$value",
    centerLabelBold: "1",
    centerLabelFontSize: "20",
    enableRotation: "0",
    transposeAnimation: "1",
    plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>",
  },

  data: [
    {
      label: "Tax",
      value: ds1ORoperatingRevenueTax + "",
    },
    {
      label: "Fees and Charges",
      value: ds1ORoperatingRevenueFeesAndCharges + "",
    },
    {
      label: "Others",
      value: ds1ORoperatingRevenueOthers + "",
    },
  ],
};

var operating_revenue_data_segment_2_operating_revenue = {
  chart: {
    showBorder: "0",
    showShadow: "0",
    use3DLighting: "0",
    showLabels: "0",
    showValues: "0",
    paletteColors: "#1e6f5c, #29bb89, #e6dd3b",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    doughnutRadius: "75",
    pieRadius: "95",
    numberPrefix: "$",
    plotBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    baseFont: "Nunito Sans",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showLegend: "1",
    legendShadow: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendBgAlpha: "0",
    chartTopMargin: "-10",
    canvasTopMargin: "-10",
    chartBottomMargin: "20",
    canvasBottomMargin: "20",
    legendNumColumns: "1",
    legendPosition: "RIGHT",
    defaultCenterLabel: `Total <br> $${FusionCharts.formatNumber(
      ds2ORoperatingRevenueTax +
        ds2ORoperatingRevenueFeesAndCharges +
        ds2ORoperatingRevenueOthers,
      "currency"
    )}`,
    centerLabel: "$label<br>$value",
    centerLabelBold: "1",
    centerLabelFontSize: "20",
    enableRotation: "0",
    transposeAnimation: "1",
    plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>",
  },

  data: [
    {
      label: "Tax",
      value: ds2ORoperatingRevenueTax + "",
    },
    {
      label: "Fees and Charges",
      value: ds2ORoperatingRevenueFeesAndCharges + "",
    },
    {
      label: "Others",
      value: ds2ORoperatingRevenueOthers + "",
    },
  ],
};

var operating_revenue_data_segment_all_operating_revenue = {
  chart: {
    showBorder: "0",
    showShadow: "0",
    use3DLighting: "0",
    showLabels: "0",
    showValues: "0",
    paletteColors: "#1e6f5c, #29bb89, #e6dd3b",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    doughnutRadius: "75",
    pieRadius: "95",
    numberPrefix: "$",
    plotBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    baseFont: "Nunito Sans",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showLegend: "1",
    legendShadow: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendBgAlpha: "0",
    chartTopMargin: "-10",
    canvasTopMargin: "-10",
    chartBottomMargin: "20",
    canvasBottomMargin: "20",
    legendNumColumns: "1",
    legendPosition: "RIGHT",
    defaultCenterLabel: `Total <br> $${FusionCharts.formatNumber(
      operatingRevenueTax +
        operatingRevenueFeesAndCharges +
        operatingRevenueOthers,
      "currency"
    )}`,
    centerLabel: "$label<br>$value",
    centerLabelBold: "1",
    centerLabelFontSize: "20",
    enableRotation: "0",
    transposeAnimation: "1",
    plotToolText: "<div>$label<br>$dataValue ($percentValue)<div>",
  },

  data: [
    {
      label: "Tax",
      value: operatingRevenueTax + "",
    },
    {
      label: "Fees and Charges",
      value: operatingRevenueFeesAndCharges + "",
    },
    {
      label: "Others",
      value: operatingRevenueOthers + "",
    },
  ],
};

var operating_revenue_data_segment_1_taxes = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "14",
    baseFont: "Nunito Sans Regular",
    baseFontColor: "#FDFDFD",
    divLineThickness: "2",
    numberPrefix: "$",
    showLimits: "0",
    showDivLineValues: "0",
    paletteColors: "#58E2C2",
    usePlotGradientColor: "0",
    divLineColor: "#979797",
    divLineDashed: "1",
    divLineDashLen: "5",
    valueFontSize: "10",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    transposeAnimation: "1",
  },

  data: ds1ORTaxItems,
};

var operating_revenue_data_segment_2_taxes = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "14",
    baseFont: "Nunito Sans Regular",
    baseFontColor: "#FDFDFD",
    divLineThickness: "2",
    numberPrefix: "$",
    showLimits: "0",
    showDivLineValues: "0",
    paletteColors: "#58E2C2",
    usePlotGradientColor: "0",
    divLineColor: "#979797",
    divLineDashed: "1",
    divLineDashLen: "5",
    valueFontSize: "10",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    transposeAnimation: "1",
  },

  data: ds2ORTaxItems,
};

var operating_revenue_data_segment_all_taxes = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "14",
    baseFont: "Nunito Sans Regular",
    baseFontColor: "#FDFDFD",
    divLineThickness: "2",
    numberPrefix: "$",
    showLimits: "0",
    showDivLineValues: "0",
    paletteColors: "#58E2C2",
    usePlotGradientColor: "0",
    divLineColor: "#979797",
    divLineDashed: "1",
    divLineDashLen: "5",
    valueFontSize: "10",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    transposeAnimation: "1",
  },

  data: taxItems,
};

var operating_revenue_data_segment_1_fees_and_charge = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "13",
    baseFont: "Nunito Sans Light",
    baseFontColor: "#FDFDFD",
    divLineThickness: "2",
    showValues: "0",
    showLegend: "1",
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendItemFontSize: "10",
    legendIconBorderThickness: "0",
    legendIconBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    paletteColors: "#FA394E, #4B53FF",
    usePlotGradientColor: "0",
    yAxisMinValue: "0",
    yAxisMaxValue: "10",
    plotFillAlpha: "100",
    drawAnchors: "1",
    anchorBgColor: "#FA394E",
    anchorBorderColor: "#FDFDFD",
    anchorRadius: "5",
    anchorBorderThickness: "1.9",
    showPlotBorder: "0",
    showToolTip: "1",
    labelDisplay: "ROTATE",
    numberPrefix: "$",
    transposeAnimation: "1",
    legendItemFontSize:'18',
  },

  categories: [
    {
      category: ds1Years,
    },
  ],

  dataset: [
    {
      seriesname: "Other Taxes",
      data: ds1ORFeesAndChargeOtherTaxes,
    },
    {
      seriesname: "Fees and Charges (Excluding Vehicle Quota Premiums)",
      alpha: "50",
      data: ds1ORFeesAndChargeExcluding,
    },
  ],
};

var operating_revenue_data_segment_2_fees_and_charge = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "13",
    baseFont: "Nunito Sans Light",
    baseFontColor: "#FDFDFD",
    divLineThickness: "2",
    showValues: "0",
    showLegend: "1",
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendItemFontSize: "10",
    legendIconBorderThickness: "0",
    legendIconBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    paletteColors: "#FA394E, #4B53FF",
    usePlotGradientColor: "0",
    yAxisMinValue: "0",
    yAxisMaxValue: "10",
    plotFillAlpha: "100",
    drawAnchors: "1",
    anchorBgColor: "#FA394E",
    anchorBorderColor: "#FDFDFD",
    anchorRadius: "5",
    anchorBorderThickness: "1.9",
    showPlotBorder: "0",
    showToolTip: "1",
    labelDisplay: "ROTATE",
    numberPrefix: "$",
    transposeAnimation: "1",
    legendItemFontSize:'18',
  },

  categories: [
    {
      category: ds2Years,
    },
  ],

  dataset: [
    {
      seriesname: "Other Taxes",
      data: ds2ORFeesAndChargeOtherTaxes,
    },
    {
      seriesname: "Fees and Charges (Excluding Vehicle Quota Premiums)",
      alpha: "50",
      data: ds2ORFeesAndChargeExcluding,
    },
  ],
};

var operating_revenue_data_segment_all_fees_and_charge = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    showAlternateHGridColor: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    baseFontSize: "13",
    baseFont: "Nunito Sans Light",
    baseFontColor: "#FDFDFD",
    divLineThickness: "2",
    showValues: "0",
    showLegend: "1",
    legendBgAlpha: "0",
    legendBorderAlpha: "0",
    drawCustomLegendIcon: "1",
    legendItemFontSize: "10",
    legendIconBorderThickness: "0",
    legendIconBorderAlpha: "0",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    paletteColors: "#FA394E, #4B53FF",
    usePlotGradientColor: "0",
    yAxisMinValue: "0",
    yAxisMaxValue: "10",
    plotFillAlpha: "100",
    drawAnchors: "1",
    anchorBgColor: "#FA394E",
    anchorBorderColor: "#FDFDFD",
    anchorRadius: "5",
    anchorBorderThickness: "1.9",
    showPlotBorder: "0",
    showToolTip: "1",
    labelDisplay: "ROTATE",
    numberPrefix: "$",
    transposeAnimation: "1",
    legendItemFontSize:'18',
  },

  categories: [
    {
      category: years,
    },
  ],

  dataset: [
    {
      seriesname: "Other Taxes",
      data: feesAndChargeOtherTaxes,
    },
    {
      seriesname: "Fees and Charges (Excluding Vehicle Quota Premiums)",
      alpha: "50",
      data: feesAndChargeExcluding,
    },
  ],
};

var operating_revenue_data_segment_1_others = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    placeValuesInside: "0",
    showAlternateVGridColor: "0",
    canvasBgAlpha: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    baseFont: "Nunito Sans Light",
    baseFontColor: "#FDFDFD",
    baseFontSize: "14",
    showDivLineValues: "0",
    divLineAlpha: "0",
    showLimits: "0",
    baseFontBold: "0",
    usePlotGradientColor: "0",
    numberPrefix: "$",
    yAxisMaxValue: "3",
    // paletteColors: "#AB26C2, #9326BF, #7625B9, #5E24B6, #4424B1, #3123AE",
    labelFontColor: "#C6C4C4",
    labelFontBold: "0",
    labelFontSize: "16",
    plotBorderAlpha: "0",
    plotFillAlpha: "100",
    valueFontBold: "1",
    valueFontColor: "#FDFDFD",
    valueFontSize: "13",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    canvasLeftMargin: "0",
    canvasRightMargin: "40",
    canvasBottomMargin: "20",
    canvasTopMargin: "20",
    showHoverEffect: "1",
  },

  annotations: {
    groups: [
      {
        items: [
          {
            id: "info",
            type: "text",
            text: `Top 3 appliances<br>make up ${ds1OROthersTop3.toFixed(
              1
            )}%<br>of total other revenue`,
            align: "right",
            color: "#FDFDFD",
            font: "Nunito Sans Light",
            fontSize: "15",
            bold: "0",
            x: "$canvasEndX + 30",
            y: "$canvasEndY - 25",
          },
        ],
      },
    ],
  },

  data: ds1OROthers.map((row) =>
    Object.assign({}, row, {
      toolText: `$Label: ${((row.value * 100) / ds1OROthersTotal).toFixed(1)}`,
    })
  ),
};
var operating_revenue_data_segment_2_others = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    placeValuesInside: "0",
    showAlternateVGridColor: "0",
    canvasBgAlpha: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    baseFont: "Nunito Sans Light",
    baseFontColor: "#FDFDFD",
    baseFontSize: "14",
    showDivLineValues: "0",
    divLineAlpha: "0",
    showLimits: "0",
    baseFontBold: "0",
    usePlotGradientColor: "0",
    numberPrefix: "$",
    yAxisMaxValue: "3",
    // paletteColors: "#AB26C2, #9326BF, #7625B9, #5E24B6, #4424B1, #3123AE",
    labelFontColor: "#C6C4C4",
    labelFontBold: "0",
    labelFontSize: "16",
    plotBorderAlpha: "0",
    plotFillAlpha: "100",
    valueFontBold: "1",
    valueFontColor: "#FDFDFD",
    valueFontSize: "13",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    canvasLeftMargin: "0",
    canvasRightMargin: "40",
    canvasBottomMargin: "20",
    canvasTopMargin: "20",
    showHoverEffect: "1",
  },

  annotations: {
    groups: [
      {
        items: [
          {
            id: "info",
            type: "text",
            text: `Top 3 years<br>make up ${ds1OROthersTop3.toFixed(
              1
            )}%<br>of total other revenue`,
            align: "right",
            color: "#FDFDFD",
            font: "Nunito Sans Light",
            fontSize: "15",
            bold: "0",
            x: "$canvasEndX + 30",
            y: "$canvasEndY - 25",
          },
        ],
      },
    ],
  },

  data: ds2OROthers.map((row) =>
    Object.assign({}, row, {
      toolText: `$Label: ${((row.value * 100) / ds2OROthersTotal).toFixed(1)}`,
    })
  ),
};
var operating_revenue_data_segment_all_others = {
  chart: {
    showBorder: "0",
    showCanvasBorder: "0",
    placeValuesInside: "0",
    showAlternateVGridColor: "0",
    canvasBgAlpha: "0",
    bgColor: "#1D1B41",
    bgAlpha: "0",
    baseFont: "Nunito Sans Light",
    baseFontColor: "#FDFDFD",
    baseFontSize: "14",
    showDivLineValues: "0",
    divLineAlpha: "0",
    showLimits: "0",
    baseFontBold: "0",
    usePlotGradientColor: "0",
    numberPrefix: "$",
    yAxisMaxValue: "3",
    // paletteColors: "#AB26C2, #9326BF, #7625B9, #5E24B6, #4424B1, #3123AE",
    labelFontColor: "#C6C4C4",
    labelFontBold: "0",
    labelFontSize: "10",
    plotBorderAlpha: "0",
    plotFillAlpha: "100",
    valueFontBold: "1",
    valueFontColor: "#FDFDFD",
    valueFontSize: "9",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "7",
    toolTipBorderRadius: "3",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    canvasLeftMargin: "0",
    canvasRightMargin: "40",
    canvasBottomMargin: "20",
    canvasTopMargin: "20",
    showHoverEffect: "1",
  },

  annotations: {
    groups: [
      {
        items: [
          {
            id: "info",
            type: "text",
            text: `Top 3 years<br>make up ${othersTop3.toFixed(
              1
            )}%<br>of total other revenue`,
            align: "right",
            color: "#FDFDFD",
            font: "Nunito Sans Light",
            fontSize: "15",
            bold: "0",
            x: "$canvasEndX + 30",
            y: "$canvasEndY - 25",
          },
        ],
      },
    ],
  },

  data: others.map((row) =>
    Object.assign({}, row, {
      toolText: `$Label: ${((row.value * 100) / othersTotal).toFixed(1)}`,
    })
  ),
};

var operating_revenue_chart_config = {
  type: "doughnut2d",
  className: "fc-doughnut2d",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  renderAt: "chart5",
  id: "mychart5",
  dataSource: operating_revenue_data_segment_2_operating_revenue,
};

var taxes_chart_config = {
  type: "Column2d",
  renderAt: "chart2",
  id: "mychart2",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  dataSource: operating_revenue_data_segment_2_taxes,
};

var fees_and_charge_chart_config = {
  type: "msarea",
  className: "fc-mssplinearea",
  renderAt: "chart3",
  id: "mychart3",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  dataSource: operating_revenue_data_segment_2_fees_and_charge,
};

var others_chart_config = {
  type: "bar2d",
  className: "fc-bar2d",
  renderAt: "chart4",
  id: "mychart4",
  dataFormat: "JSON",
  width: "100%",
  height: "300",
  dataSource: operating_revenue_data_segment_2_others,
};
