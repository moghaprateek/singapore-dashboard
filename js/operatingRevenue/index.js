function loadOperatingRevenue() {
  FusionCharts.ready(function () {
    doRevenueStyleInitializations();
    makeSidebarActive("Operating");
    setDataSegments(ds1ORSelected, ds2ORSelected, dsAllORSelected);
    hideCharts(1);
    hideCharts(6);
    hideCharts(7);
    for (let i = 2; i <= 5; i++) {
      showCharts(i);
    }
  });
}

function doRevenueStyleInitializations() {
  document.getElementById("parent5").setAttribute("class", "col-lg-6 col-xl-4");
  document
    .getElementById("bd-docs-nav")
    .setAttribute("class", "bd-links collapse");

  document.getElementById("fiscal-position-additional").style.display = "none";
  document.getElementById("total-expenditure-additional").style.display =
    "none";
  document.getElementById("years_range").style.display="inline-flex"; 
  document.getElementById("text2").innerHTML = "Operating Revenue";
}

function ds1ORSelected() {
  disposeChart(FusionCharts, "mychart5");
  disposeChart(FusionCharts, "mychart2");
  disposeChart(FusionCharts, "mychart3");
  disposeChart(FusionCharts, "mychart4");
  operating_revenue_chart_config.dataSource = operating_revenue_data_segment_1_operating_revenue;
  var fusioncharts1 = new FusionCharts(operating_revenue_chart_config);
  fusioncharts1.render();
  taxes_chart_config.dataSource = operating_revenue_data_segment_1_taxes;
  var fusioncharts2 = new FusionCharts(taxes_chart_config);
  fusioncharts2.render();
  fees_and_charge_chart_config.dataSource = operating_revenue_data_segment_1_fees_and_charge;
  var fusioncharts3 = new FusionCharts(fees_and_charge_chart_config);
  fusioncharts3.render();
  others_chart_config.dataSource = operating_revenue_data_segment_1_others;
  var fusioncharts4 = new FusionCharts(others_chart_config);
  fusioncharts4.render();
}

function ds2ORSelected() {
  disposeChart(FusionCharts, "mychart5");
  disposeChart(FusionCharts, "mychart2");
  disposeChart(FusionCharts, "mychart3");
  disposeChart(FusionCharts, "mychart4");
  operating_revenue_chart_config.dataSource = operating_revenue_data_segment_2_operating_revenue;
  var fusioncharts1 = new FusionCharts(operating_revenue_chart_config);
  fusioncharts1.render();
  taxes_chart_config.dataSource = operating_revenue_data_segment_2_taxes;
  var fusioncharts2 = new FusionCharts(taxes_chart_config);
  fusioncharts2.render();
  fees_and_charge_chart_config.dataSource = operating_revenue_data_segment_2_fees_and_charge;
  var fusioncharts3 = new FusionCharts(fees_and_charge_chart_config);
  fusioncharts3.render();
  others_chart_config.dataSource = operating_revenue_data_segment_2_others;
  var fusioncharts4 = new FusionCharts(others_chart_config);
  fusioncharts4.render();
}

function dsAllORSelected() {
  disposeChart(FusionCharts, "mychart5");
  disposeChart(FusionCharts, "mychart2");
  disposeChart(FusionCharts, "mychart3");
  disposeChart(FusionCharts, "mychart4");
  operating_revenue_chart_config.dataSource = operating_revenue_data_segment_all_operating_revenue;
  var fusioncharts1 = new FusionCharts(operating_revenue_chart_config);
  fusioncharts1.render();
  taxes_chart_config.dataSource = operating_revenue_data_segment_all_taxes;
  var fusioncharts2 = new FusionCharts(taxes_chart_config);
  fusioncharts2.render();
  fees_and_charge_chart_config.dataSource = operating_revenue_data_segment_all_fees_and_charge;
  var fusioncharts3 = new FusionCharts(fees_and_charge_chart_config);
  fusioncharts3.render();
  others_chart_config.dataSource = operating_revenue_data_segment_all_others;
  var fusioncharts4 = new FusionCharts(others_chart_config);
  fusioncharts4.render();
}
