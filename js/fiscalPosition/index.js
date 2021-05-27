function loadFiscalPosition() {
  FusionCharts.ready(function () {
    doFiscalStyleInitializations();
    makeSidebarActive("Government");
    setDataSegments(ds1FPSelected, ds2FPSelected, dsAllFPSelected);
    for (let i = 2; i <= 7; i++) {
      hideCharts(i);
    }
    showCharts(1);
    showSurplusDeficitChart();
  });
}

function doFiscalStyleInitializations() {
  document
    .getElementById("bd-docs-nav")
    .setAttribute("class", "bd-links collapse");

  document
    .getElementById("parent1")
    .setAttribute("class", "chart1-co col-lg-12 col-xl-12");
  document.getElementById("fiscal-position-additional").style.display = "block";
  document.getElementById("total-expenditure-additional").style.display =
    "none";
  document.getElementById("years_range").style.display="inline-flex"; 

  document.getElementById("text1").innerHTML = "Government Fiscal Position";
}

function showSurplusDeficitChart() {
  window.b2selected = false;
  disposeChart(FusionCharts, "mychart1");

  document.getElementById("c2").style.borderBottom = "none";
  document.getElementById("c2").style.color = "#FDFDFD";
  document.getElementById("c2").style.opacity = "0.5";
  document.getElementById("c1").style.color = "#FDFDFD";
  document.getElementById("c1").style.opacity = "1";
  document.getElementById("c1").style.borderBottom = "solid 2px #FDFDFD";
  

  let dataSource;

  if (window.selectedperiod === "1997-2010") {
    dataSource = ds1FPSurplusDeficit();
  } else if (window.selectedperiod === "2011-2021") {
    dataSource = ds2FPSurplusDeficit();
  } else {
    dataSource = dsAllFPSurplusDeficit();
  }

  fiscalpositionchart.dataSource = dataSource;
  var fusioncharts = new FusionCharts(fiscalpositionchart);
  fusioncharts.render();
}

function showBalanceChart() {
  window.b2selected = true;
  disposeChart(FusionCharts, "mychart1");

  document.getElementById("c1").style.borderBottom = "none";
  document.getElementById("c1").style.color = "#FDFDFD";
  document.getElementById("c1").style.opacity = "0.5";
  document.getElementById("c2").style.color = "#FDFDFD";
  document.getElementById("c2").style.opacity = "1";
  document.getElementById("c2").style.borderBottom = "solid 2px #FDFDFD";

  var dataSource;

  if (window.selectedperiod === "1997-2010") {
    dataSource = ds1Balance();
  } else if (window.selectedperiod === "2011-2021") {
    dataSource = ds2Balance();
  } else {
    dataSource = dsAllBalance();
  }

  fiscalpositionchart.dataSource = dataSource;

  document.getElementById(
    "chart1"
  ).outerHTML = `<div id="chart1" class="chart">Rendering chart 1 here</div>`;
  var fusioncharts = new FusionCharts(fiscalpositionchart);
  fusioncharts.render();
}

function ds1FPSelected() {
  window.selectedperiod = "1997-2010";

  if (window.b2selected) {
    FusionCharts.items["mychart1"].setJSONData(
      fiscal_position_data_segment_1_primary_basic_overall_balance
    );
    primaryBasicOverallBalanceMetrics(ds1Years,ds1FPBalancePrimary,ds1FPBalanceBasic,ds1FPBalanceOverall,ds1FPGDP,ds1FPBalance);
  } else {
    FusionCharts.items["mychart1"].setJSONData(
      fiscal_position_data_segment_1_primary_surplus_deficit
    );
    primarySurplusDeficitMetrics(ds1Years,ds1FPRevenue,ds1FPGDP,ds1FPExpenditure);
  }
}

function ds2FPSelected() {
  window.selectedperiod = "2011-2021";

  if (window.b2selected) {
    FusionCharts.items["mychart1"].setJSONData(
      fiscal_position_data_segment_2_primary_basic_overall_balance
    );
    primaryBasicOverallBalanceMetrics(ds2Years,ds2FPBalancePrimary,ds2FPBalanceBasic,ds2FPBalanceOverall,ds2FPGDP,ds2FPBalance);
  } else {
    FusionCharts.items["mychart1"].setJSONData(
      fiscal_position_data_segment_2_primary_surplus_deficit
    );
    primarySurplusDeficitMetrics(ds2Years,ds2FPRevenue,ds2FPGDP,ds2FPExpenditure);
  }
}

function dsAllFPSelected() {
  window.selectedperiod = "all";

  if (window.b2selected) {
    FusionCharts.items["mychart1"].setJSONData(
      fiscal_position_data_segment_all_primary_basic_overall_balance
    );
    primaryBasicOverallBalanceMetrics(years,balancePrimary,balanceBasic,balanceOverall,gdp,balance);
  } else {
    FusionCharts.items["mychart1"].setJSONData(
      fiscal_position_data_segment_all_primary_surplus_deficit
    );

    primarySurplusDeficitMetrics(years,revenue,gdp,expenditure);
  }
}

function primarySurplusDeficitMetrics(yearsArr,revenueArr,gdpArr,expenditureArr) {
  const lastIndex = yearsArr.length - 1;
  const lastYear = +yearsArr[lastIndex].label;
  const revenueGDP =
    (revenueArr[lastIndex].value * 100) / gdpArr[lastIndex].value;
  const expenditureGDP =
    (expenditureArr[lastIndex].value * 100) / gdpArr[lastIndex].value;
  document.getElementById("co-tablecell-title1").innerHTML = `GDP ${lastYear}`;
  document.getElementById(
    "co-tablecell-value1"
  ).innerHTML = `$${FusionCharts.formatNumber(
    gdpArr[lastIndex].value,
    "currency"
  )}`;

  document.getElementById(
    "co-tablecell-title2"
  ).innerHTML = `Revenue % of GDP ${lastYear}`;
  document.getElementById(
    "co-tablecell-value2"
  ).innerHTML = `${revenueGDP.toFixed(2)}%`;

  document.getElementById(
    "co-tablecell-title3"
  ).innerHTML = `Expenditure % of GDP ${lastYear}`;
  document.getElementById(
    "co-tablecell-value3"
  ).innerHTML = `${expenditureGDP.toFixed(2)}%`;
  document.getElementById("co-tablecell-title4").style.display = "none";
  document.getElementById("co-tablecell-value4").style.display = "none";
}
function primaryBasicOverallBalanceMetrics(yearArr,primaryArr,basicArr,overallArr,gdpArr,balanceArr) {
  const lastIndex = yearArr.length - 1;
  const lastYear = +yearArr[lastIndex].label;
  const primaryBalanceGDP =
    (primaryArr[lastIndex].value * 100) / gdpArr[lastIndex].value;
  const basicBalanceGDP =
    (basicArr[lastIndex].value * 100) / gdpArr[lastIndex].value;
  const overallBalanceGDP =
    (overallArr[lastIndex].value * 100) / gdpArr[lastIndex].value;

  document.getElementById(
    "co-tablecell-title1"
  ).innerHTML = `Balance ${lastYear}`;
  document.getElementById(
    "co-tablecell-value1"
  ).innerHTML = `$${FusionCharts.formatNumber(
    balanceArr[lastIndex].value,
    "currency"
  )}`;

  document.getElementById(
    "co-tablecell-title2"
  ).innerHTML = `Primary Balance % of GDP ${lastYear}`;
  document.getElementById(
    "co-tablecell-value2"
  ).innerHTML = `${primaryBalanceGDP.toFixed(2)}%`;

  document.getElementById(
    "co-tablecell-title3"
  ).innerHTML = `Basic Balance % of GDP ${lastYear}`;
  document.getElementById(
    "co-tablecell-value3"
  ).innerHTML = `${basicBalanceGDP.toFixed(2)}%`;
  document.getElementById("co-tablecell-title4").style.display = "block";
  document.getElementById("co-tablecell-value4").style.display = "block";
  document.getElementById(
    "co-tablecell-title4"
  ).innerHTML = `Overall Balance % of GDP ${lastYear}`;
  document.getElementById(
    "co-tablecell-value4"
  ).innerHTML = `${overallBalanceGDP.toFixed(2)}%`;
}

function ds1FPSurplusDeficit() {
  primarySurplusDeficitMetrics(ds1Years,ds1FPRevenue,ds1FPGDP,ds1FPExpenditure);
  return fiscal_position_data_segment_1_primary_surplus_deficit;
}

function ds2FPSurplusDeficit() {
  primarySurplusDeficitMetrics(ds2Years,ds2FPRevenue,ds2FPGDP,ds2FPExpenditure);
  return fiscal_position_data_segment_2_primary_surplus_deficit;
}

function dsAllFPSurplusDeficit() {
  primarySurplusDeficitMetrics(years,revenue,gdp,expenditure);
  return fiscal_position_data_segment_all_primary_surplus_deficit;
}

function ds1Balance() {
  primaryBasicOverallBalanceMetrics(ds1Years,ds1FPBalancePrimary,ds1FPBalanceBasic,ds1FPBalanceOverall,ds1FPGDP,ds1FPBalance);

  return fiscal_position_data_segment_1_primary_basic_overall_balance;
}

function ds2Balance() {
  primaryBasicOverallBalanceMetrics(ds2Years,ds2FPBalancePrimary,ds2FPBalanceBasic,ds2FPBalanceOverall,ds2FPGDP,ds2FPBalance);

  return fiscal_position_data_segment_1_primary_basic_overall_balance;
}

function dsAllBalance() {
  primaryBasicOverallBalanceMetrics(years,balancePrimary,balanceBasic,balanceOverall,gdp,balance);

  return fiscal_position_data_segment_1_primary_basic_overall_balance;
}
