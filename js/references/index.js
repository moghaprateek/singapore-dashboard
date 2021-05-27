function loadReferences() {
    FusionCharts.ready(function () {
      doReferencesStyle();
      makeSidebarActive("References");
      for (let i = 1; i <= 6; i++) {
        hideCharts(i);
      }

      showCharts(7);
    });
  }

  function doReferencesStyle() {
    document.getElementById("parent5").setAttribute("class", "col-lg-6 col-xl-4");
    document
      .getElementById("bd-docs-nav")
      .setAttribute("class", "bd-links collapse");
  
    document.getElementById("fiscal-position-additional").style.display = "none";
    document.getElementById("total-expenditure-additional").style.display =
      "none";
    document.getElementById("years_range").style.display="none";
    document.getElementById("text2").innerHTML = "References Link";
  }