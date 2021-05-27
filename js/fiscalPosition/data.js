function generateYears(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push({ label: i + "" });
  }
  return result;
}

function categoryAggregateFn(category) {
  return (acc, row) => {
    if (row.category !== category) {
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

function categoryItemAggregateFn(category, item) {
  return (acc, row) => {
    if (row.category !== category || row.item !== item) {
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

function gdpAggregateFn(category) {
  return (acc, row) => {
    if (row.category !== category) {
      return acc;
    }
    let gdp = acc[row.year];
    if (gdp) {
      return acc;
    }
    gdp = Math.ceil(row.amount / row.gdp);
    acc[row.year] = gdp;
    return acc;
  };
}

function objectToArrFP(obj) {
  let result = [];
  for (const key in obj) {
    result.push({ year: +key, value: obj[key] });
  }
  return result
    .sort((a, b) => a.year - b.year)
    .map((item) => ({
      value: item.value,
    }));
}

const fiscalPositionData = convToJson(fiscalData)
  .map((row) =>
    Object.assign({}, row, {
      year: +row.year_of_balance,
      amount: +row.amount * 1000000,
      gdp: +row.percent_of_gdp,
    })
  )
  .sort((a, b) => a.year - b.year);
const years = generateYears(1997, 2021);
const ds1Years = generateYears(1997, 2010);
const ds2Years = generateYears(2011, 2021);

const ds1FP = fiscalPositionData.filter(
  (row) => row.year >= 1997 && +row.year <= 2010
);
const ds2FP = fiscalPositionData.filter(
  (row) => row.year >= 2011 && +row.year <= 2021
);
const gdp = objectToArrFP(
  fiscalPositionData.reduce(gdpAggregateFn("Revenue"), {})
);
const ds1FPGDP = objectToArrFP(ds1FP.reduce(gdpAggregateFn("Revenue"), {}));
const ds2FPGDP = objectToArrFP(ds2FP.reduce(gdpAggregateFn("Revenue"), {}));

const revenue = objectToArrFP(
  fiscalPositionData.reduce(categoryAggregateFn("Revenue"), {})
);
const ds1FPRevenue = objectToArrFP(
  ds1FP.reduce(categoryAggregateFn("Revenue"), {})
);
console.log({ds1FP,ds1FPRevenue,groupbydata:ds1FP.reduce(categoryAggregateFn("Revenue"), {})});
const ds2FPRevenue = objectToArrFP(
  ds2FP.reduce(categoryAggregateFn("Revenue"), {})
);

const expenditure = objectToArrFP(
  fiscalPositionData.reduce(categoryAggregateFn("Expenditure"), {})
);
const ds1FPExpenditure = objectToArrFP(
  ds1FP.reduce(categoryAggregateFn("Expenditure"), {})
);
const ds2FPExpenditure = objectToArrFP(
  ds2FP.reduce(categoryAggregateFn("Expenditure"), {})
);

const balance = objectToArrFP(
  fiscalPositionData.reduce(categoryAggregateFn("Balance"), {})
);
const ds1FPBalance = objectToArrFP(
  ds1FP.reduce(categoryAggregateFn("Balance"), {})
);
const ds2FPBalance = objectToArrFP(
  ds2FP.reduce(categoryAggregateFn("Balance"), {})
);

const balancePrimary = objectToArrFP(
  fiscalPositionData.reduce(
    categoryItemAggregateFn("Balance", "Primary Balance"),
    {}
  )
);
const ds1FPBalancePrimary = objectToArrFP(
  ds1FP.reduce(categoryItemAggregateFn("Balance", "Primary Balance"), {})
);
const ds2FPBalancePrimary = objectToArrFP(
  ds2FP.reduce(categoryItemAggregateFn("Balance", "Primary Balance"), {})
);
const balanceBasic = objectToArrFP(
  fiscalPositionData.reduce(
    categoryItemAggregateFn("Balance", "Basic Balance"),
    {}
  )
);
const ds1FPBalanceBasic = objectToArrFP(
  ds1FP.reduce(categoryItemAggregateFn("Balance", "Basic Balance"), {})
);
const ds2FPBalanceBasic = objectToArrFP(
  ds2FP.reduce(categoryItemAggregateFn("Balance", "Basic Balance"), {})
);
const balanceOverall = objectToArrFP(
  fiscalPositionData.reduce(
    categoryItemAggregateFn("Balance", "Overall Balance"),
    {}
  )
);
const ds1FPBalanceOverall = objectToArrFP(
  ds1FP.reduce(categoryItemAggregateFn("Balance", "Overall Balance"), {})
);
const ds2FPBalanceOverall = objectToArrFP(
  ds2FP.reduce(categoryItemAggregateFn("Balance", "Overall Balance"), {})
);

let fiscal_position_data_segment_1_primary_surplus_deficit = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#1e6f5c, #29bb89, #e6dd3b",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    legendItemFontSize:'18',
  },
  categories: [
    {
      category: ds1Years,
    },
  ],
  dataset: [
    {
      seriesname: "Revenue",
      data: ds1FPRevenue,
    },
    {
      seriesname: "Expenditure",
      data: ds1FPExpenditure,
    },
    {
      seriesname: "Balance",
      data: ds1FPBalance,
    },
  ],
};

let fiscal_position_data_segment_1_primary_basic_overall_balance = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#de8971, #7b6079, #a7d0cd",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    legendItemFontSize:'18',
  },
  categories: [
    {
      category: ds1Years,
    },
  ],
  dataset: [
    {
      seriesname: "Primary Balance",
      data: ds1FPBalancePrimary,
    },
    {
      seriesname: "Basic Balance",
      data: ds1FPBalanceBasic,
    },
    {
      seriesname: "Overall Balance",
      data: ds1FPBalanceOverall,
    },
  ],
};

let fiscal_position_data_segment_2_primary_surplus_deficit = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#1e6f5c, #29bb89, #e6dd3b",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    labelDisplay: "ROTATE",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    legendItemFontSize:'18',
  },
  categories: [
    {
      category: ds2Years,
    },
  ],
  dataset: [
    {
      seriesname: "Revenue",
      data: ds2FPRevenue,
    },
    {
      seriesname: "Expenditure",
      data: ds2FPExpenditure,
    },
    {
      seriesname: "Balance",
      data: ds2FPBalance,
    },
  ],
};

let fiscal_position_data_segment_2_primary_basic_overall_balance = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#de8971, #7b6079, #a7d0cd",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    labelDisplay: "ROTATE",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    legendItemFontSize:'18',
  },
  categories: [
    {
      category: ds2Years,
    },
  ],
  dataset: [
    {
      seriesname: "Primary Balance",
      data: ds2FPBalancePrimary,
    },
    {
      seriesname: "Basic Balance",
      data: ds2FPBalanceBasic,
    },
    {
      seriesname: "Overall Balance",
      data: ds2FPBalanceOverall,
    },
  ],
};

let fiscal_position_data_segment_all_primary_surplus_deficit = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#1e6f5c, #29bb89, #e6dd3b",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    legendItemFontSize:'18',
  },
  categories: [
    {
      category: years,
    },
  ],
  dataset: [
    {
      seriesname: "Revenue",
      data: revenue,
    },
    {
      seriesname: "Expenditure",
      data: expenditure,
    },
    {
      seriesname: "Balance",
      data: balance,
    },
  ],
};

let fiscal_position_data_segment_all_primary_basic_overall_balance = {
  chart: {
    bgColor: "#1D1B41",
    bgAlpha: "0",
    canvasBgAlpha: "0",
    showBorder: "0",
    showCanvasBorder: "0",
    showValues: "0",
    showAlternateHGridColor: "0",
    legendBgAlpha: "0",
    usePlotGradientColor: "0",
    paletteColors: "#de8971, #7b6079, #a7d0cd",
    drawCustomLegendIcon: "1",
    baseFontSize: "14",
    baseFontColor: "#FDFDFD",
    showPlotBorder: "0",
    baseFont: "Nunito Sans",
    legendBorderAlpha: "0",
    numberPrefix: "$",
    toolTipBgcolor: "#484E69",
    toolTipPadding: "5",
    toolTipBorderRadius: "2",
    toolTipBorderAlpha: "30",
    tooltipBorderThickness: "0.7",
    toolTipColor: "#FDFDFD",
    showXAxisLine: "1",
    showYAxisLine: "1",
    xAxisLineColor: "#9092A4",
    yAxisLineColor: "#9092A4",
    xAxisLineThickness: "1.5",
    yAxisLineThickness: "1.5",
    divLineColor: "#414761",
    divLineAlpha: "100",
    divLineThickness: "1.5",
    divLineDashed: "1",
    divLineDashGap: "2",
    divlineDashLen: "3",
    transposeAxis: "1",
    scrollHeight: "8",
    scrollColor: "#FDFDFD",
    flatScrollBars: "1",
    scrollShowButtons: "0",
    chartLeftMargin: "0",
    chartRightMargin: "0",
    canvasLeftMargin: "0",
    canvasRightMargin: "0",
    legendItemFontSize:'18',
  },
  categories: [
    {
      category: years,
    },
  ],
  dataset: [
    {
      seriesname: "Primary Balance",
      data: balancePrimary,
    },
    {
      seriesname: "Basic Balance",
      data: balanceBasic,
    },
    {
      seriesname: "Overall Balance",
      data: balanceOverall,
    },
  ],
};

let fiscalpositionchart = {
  type: "scrollstackedcolumn2d",
  className: "fc-column2d",
  width: "100%",
  renderAt: "chart1",
  id: "mychart1",
  height: 500,
  dataSource: fiscal_position_data_segment_2_primary_surplus_deficit,
};
