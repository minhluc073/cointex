(function ($) {
  /* "use strict" */

  var tfLineChart = (function () {
    let draw = Chart.controllers.line.__super__.draw; //draw shadow
    var screenWidth = $(window).width();

    var chartBar1 = function () {
      var options1 = {
          series: [
            {
              data: [
                1.128307699, 1.428307699, 1.228307699, 1.328307699, 1.2124344,
                1.4283077, 1.32830745, 1.528307699, 1.428312, 1.4383234,
                1.32830745, 1.628307699, 1.128307699,
              ],
            },
          ],
          colors: ["#25C866"],
          chart: {
            type: "area",
            Width: 390,
            height: 205,
            sparkline: { enabled: !0 },
          },
          plotOptions: { bar: { columnWidth: "50%" } },
          xaxis: { crosshairs: { width: 1 } },

          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1,
            dashArray: 0,
          },

          tooltip: {
            // enabled: false,
            fixed: { enabled: !1 },
            x: { show: !1 },
            y: {
              title: {
                formatter: function (e) {
                  return "";
                },
              },
            },
            marker: { show: !1 },
          },

          states: {
            hover: {
              filter: {
                type: "none",
                value: 0,
              },
            },
          },
        },
        chart1 = new ApexCharts(
          document.querySelector("#area-chart-1h"),
          options1
        );
      chart1.render();
    };
    var chartBar2 = function () {
      var options2 = {
          series: [
            {
              data: [20, 50, 7, 100, -8, 80, 100],
            },
          ],
          colors: ["#25C866"],
          chart: {
            type: "line",
            maxWidth: 96,
            height: 26,
            sparkline: { enabled: !0 },
          },
          plotOptions: { bar: { columnWidth: "50%" } },
          xaxis: { crosshairs: { width: 1 } },

          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1,
            dashArray: 0,
          },

          tooltip: {
            enabled: false,
            fixed: { enabled: !1 },
            x: { show: !1 },
            y: {
              title: {
                formatter: function (e) {
                  return "";
                },
              },
            },
            marker: { show: !1 },
          },
          states: {
            hover: {
              filter: {
                type: "none",
                value: 0,
              },
            },
          },
        },
        chart2 = new ApexCharts(
          document.querySelector("#line-chart-2"),
          options2
        );
      chart2.render();
    };
    var chartBar3 = function () {
      var options3 = {
          series: [
            {
              data: [5, 30, -20, 80, -50, 100, -80, 3, -20, 90],
            },
          ],
          colors: ["#0082FE"],
          chart: {
            type: "line",
            maxWidth: 96,
            height: 26,
            sparkline: { enabled: !0 },
          },
          plotOptions: { bar: { columnWidth: "50%" } },
          // labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          xaxis: { crosshairs: { width: 1 } },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1,
            dashArray: 0,
          },
          tooltip: {
            enabled: false,
            fixed: { enabled: !1 },
            x: { show: !1 },
            y: {
              title: {
                formatter: function (e) {
                  return "";
                },
              },
            },
            marker: { show: !1 },
          },
        },
        chart3 = new ApexCharts(
          document.querySelector("#line-chart-3"),
          options3
        );
      chart3.render();
    };
    var chartBar4 = function () {
      var options4 = {
          series: [
            {
              data: [20, 50, 7, 100, -8, 80, 100],
            },
          ],
          colors: ["#D250FF"],
          chart: {
            type: "line",
            maxWidth: 96,
            height: 26,
            sparkline: { enabled: !0 },
          },
          plotOptions: { bar: { columnWidth: "50%" } },
          xaxis: { crosshairs: { width: 1 } },

          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1,
            dashArray: 0,
          },

          tooltip: {
            enabled: false,
            fixed: { enabled: !1 },
            x: { show: !1 },
            y: {
              title: {
                formatter: function (e) {
                  return "";
                },
              },
            },
            marker: { show: !1 },
          },
          states: {
            hover: {
              filter: {
                type: "none",
                value: 0,
              },
            },
          },
        },
        chart4 = new ApexCharts(
          document.querySelector("#line-chart-4"),
          options4
        );
      chart4.render();
    };
    var chartBar5 = function () {
      var options5 = {
          series: [
            {
              data: [20, 50, 7, 100, -8, 80, 100],
            },
          ],
          colors: ["#25C866"],
          chart: {
            type: "line",
            maxWidth: 96,
            height: 26,
            sparkline: { enabled: !0 },
          },
          plotOptions: { bar: { columnWidth: "50%" } },
          xaxis: { crosshairs: { width: 1 } },

          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1,
            dashArray: 0,
          },

          tooltip: {
            enabled: false,
            fixed: { enabled: !1 },
            x: { show: !1 },
            y: {
              title: {
                formatter: function (e) {
                  return "";
                },
              },
            },
            marker: { show: !1 },
          },
          states: {
            hover: {
              filter: {
                type: "none",
                value: 0,
              },
            },
          },
        },
        chart5 = new ApexCharts(
          document.querySelector("#line-chart-5"),
          options5
        );
      chart5.render();
    };
    /* Function ============ */
    return {
      init: function () {},

      load: function () {
        chartBar1();
        chartBar2();
        chartBar3();
        chartBar4();
        chartBar5();
      },
      resize: function () {},
    };
  })();

  jQuery(document).ready(function () {});

  jQuery(window).on("load", function () {
    tfLineChart.load();
  });

  jQuery(window).on("resize", function () {});
})(jQuery);
