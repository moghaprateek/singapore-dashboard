function segmentWiseAggregate(acc, row) {
  let sector = acc[row.sector];
  if (!sector) {
    sector = {};
  }
  let ministry = sector[row.ministry];
  if (!ministry) {
    ministry = {};
  }
  let yearAmount = ministry[row.year];
  if (!yearAmount) {
    yearAmount = 0;
  }
  yearAmount += row.amount;
  ministry[row.year] = yearAmount;
  sector[row.ministry] = ministry;
  acc[row.sector] = sector;
  return acc;
}

function deepObjToArray(obj) {
  let result = {};
  let totalData = [];
  for (let sector in obj) {
    let sectorData = [];
    for (let ministry in obj[sector]) {
      const ministryData = [];
      for (let year in obj[sector][ministry]) {
        ministryData.push({ label: year, value: obj[sector][ministry][year] });
      }
      
      const secData = {
        seriesname: ministry,
        data: ministryData.sort((year1, year2) => year1.label - year2.label),
      };
      sectorData.push(secData);
      const totalDataIndex = totalData.findIndex(
        (item) => item.seriesname === ministry
      );
      if (totalDataIndex === -1) {
        totalData.push(secData);
      } else {
        const totalDataItem = totalData[totalDataIndex];
        for (let i = 0; i < totalDataItem.length; i++) {
          totalDataItem[i].value += secData[i].value;
        }
        totalData[totalDataIndex] = totalDataItem;
      }
    }
    result[sector] = sectorData;
  }
  result["All"] = totalData;
  return result;
}

const totalExpenditureData = convToJson(expenditureData)
  .map((row) =>
    Object.assign({}, row, {
      year: +row.financial_year,
      amount: +row.amount * 1000000,
      gdp: +row.percent_of_gdp,
    })
  )
  .sort((a, b) => a.year - b.year);

const ds1TE = totalExpenditureData.filter(
  (row) => row.year >= 1997 && +row.year <= 2010
);
const ds2TE = totalExpenditureData.filter(
  (row) => row.year >= 2011 && +row.year <= 2021
);
const sectors = totalExpenditureData.reduce((acc, row) => {
  if (acc.indexOf(row.sector) > -1) {
    return acc;
  }
  acc.push(row.sector);
  return acc;
}, []);

const ds1TEsectorWiseData = deepObjToArray(
  ds1TE.reduce(segmentWiseAggregate, {})
);
const ds2TEsectorWiseData = deepObjToArray(
  ds2TE.reduce(segmentWiseAggregate, {})
);
const sectorWiseData = deepObjToArray(
  totalExpenditureData.reduce(segmentWiseAggregate, {})
);
const segmentWiseYears = {
  "1997-2010": {
    category: ds1Years,
    dataset: ds1TEsectorWiseData,
  },
  "2011-2021": {
    category: ds2Years,
    dataset: ds2TEsectorWiseData,
  },
  all: { category: years, dataset: sectorWiseData },
};
console.log(ds1TEsectorWiseData);
function getSectorData(segment, sector) {
  const chartConfig = {
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
      drawCustomLegendIcon: "1",
      baseFontSize: "14",
      baseFontColor: "#FDFDFD",
      showPlotBorder: "0",
      baseFont: "Nunito Sans Light",
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
    },
    categories: [{ category: segmentWiseYears[segment].category }],
    dataset: segmentWiseYears[segment].dataset[sector],
  };
  return chartConfig;
}

let totalExpenditurechart = {
  type: "scrollstackedcolumn2d",
  className: "fc-column2d",
  width: "100%",
  renderAt: "chart6",
  id: "mychart6",
  height: 500,
  dataSource: getSectorData("all", "All"),
};
