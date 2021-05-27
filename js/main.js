function makeSidebarActive(name) {
  const sidebaroptions = [
    {
      id: 1,
      idName: "Government",
      name: "Fiscal Position",
    },
    {
      id: 2,
      idName: "Operating",
      name: "Operating Revenue",
    },
    {
      id: 3,
      idName: "Expenditure",
      name: "Total Expenditure",
    },
    {
      id: 4,
      idName: "References",
      name: "References",
    },
  ];
  for (let i in sidebaroptions) {
    document
      .getElementById(sidebaroptions[i].idName)
      .setAttribute(
        "class",
        `left-option${sidebaroptions[i].idName === name ? " active" : ""}`
      );
  }
}

function setDataSegments(dataSegment1, dataSegment2, dataSegmentAll) {
  var d1 = document.getElementById("1997-2010");
  var d2 = document.getElementById("2011-2021");
  var d3 = document.getElementById("all");
  d1.onclick = function () {
    d1.classList.add("active");
    d2.classList.remove("active");
    d3.classList.remove("active");
    dataSegment1();
  };
  d2.onclick = function () {
    d1.classList.remove("active");
    d2.classList.add("active");
    d3.classList.remove("active");
    dataSegment2();
  };
  d3.onclick = function () {
    d1.classList.remove("active");
    d2.classList.remove("active");
    d3.classList.add("active");
    dataSegmentAll();
  };
  setTimeout(function () {
    document.getElementById("2011-2021").click();
  });
}

function hideCharts(num) {
  if (!document.getElementById(`parent${num}`)) {
    return;
  }
  document.getElementById(`parent${num}`).style.display = "none";
  document.getElementById(`parent${num}`).style.width = "0px";
  document.getElementById(`parent${num}`).style.height = "0px";
}

function showCharts(num) {
  if (!document.getElementById(`parent${num}`)) {
    return;
  }
  document.getElementById(`parent${num}`).style.display = "block";
  document.getElementById(`parent${num}`).style.width = "auto";
  document.getElementById(`parent${num}`).style.height = "auto";
}

//var csv is the CSV file with headers
function convToJson(csv) {
  var lines = csv.split("\n");

  var result = [];

  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  return result; //JavaScript object
}

function disposeChart(fc, id) {
  if (fc.items && fc.items[id]) {
    fc.items[id].dispose();
  }
}

window.addEventListener("load", function () {
  document.getElementById("Government").click();
});
