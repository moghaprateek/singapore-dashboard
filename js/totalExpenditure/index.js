function loadTotalExpenditure() {
  FusionCharts.ready(function () {
    window.selectedUsage = "All";
    doExpenditureStyleInitializations();
    makeSidebarActive("Expenditure");
    setDataSegments(ds1TESelected, ds2TESelected, dsAllTESelected);
    for (let i = 1; i <= 5; i++) {
      hideCharts(i);
    }
    showCharts(6);
    hideCharts(7);
    initializeSelect();
  });
}

function initializeSelect() {
  let selectInnerHTML = "<option>All</option>";
  for (let i = 0; i < sectors.length; i++) {
    selectInnerHTML += `<option>${sectors[i]}</option>`;
  }
  document.getElementById("expenditure-select").innerHTML = selectInnerHTML;
  document.getElementById("expenditure-select").onchange = function (e) {
    window.selectedUsage = e.currentTarget.value.toString();
    const data = getSectorData(window.selectedperiod, window.selectedUsage);
    totalExpenditurechart.dataSource = data;
    var fusioncharts = new FusionCharts(totalExpenditurechart);
    fusioncharts.render();
  };
}

function doExpenditureStyleInitializations() {
  document
    .getElementById("parent6")
    .setAttribute("class", "chart1-app col-lg-12 col-xl-12");

  document
    .getElementById("bd-docs-nav")
    .setAttribute("class", "bd-links collapse");
  document.getElementById("fiscal-position-additional").style.display = "none";
  document.getElementById("total-expenditure-additional").style.display =
    "block";
  document.getElementById("years_range").style.display="inline-flex";   
  document.getElementById("text6").innerHTML = "Expenditure";
}

function ds1TESelected() {
  window.selectedperiod = "1997-2010";
  disposeChart(FusionCharts, "mychart6");
  const data = getSectorData(window.selectedperiod, window.selectedUsage);
  totalExpenditurechart.dataSource = data;
  var fusioncharts = new FusionCharts(totalExpenditurechart);
  fusioncharts.render();
}

function ds2TESelected() {
  window.selectedperiod = "2011-2021";
  disposeChart(FusionCharts, "mychart6");
  const data = getSectorData(window.selectedperiod, window.selectedUsage);
  totalExpenditurechart.dataSource = data;
  var fusioncharts = new FusionCharts(totalExpenditurechart);
  fusioncharts.render();
}

function dsAllTESelected() {
  window.selectedperiod = "all";
  disposeChart(FusionCharts, "mychart6");
  const data = getSectorData(window.selectedperiod, window.selectedUsage);
  totalExpenditurechart.dataSource = data;
  var fusioncharts = new FusionCharts(totalExpenditurechart);
  fusioncharts.render();
}
