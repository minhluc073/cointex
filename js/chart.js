(function ($) {
  /* "use strict" */

  var dzChartlist = (function () {
    let draw = Chart.controllers.line.__super__.draw; //draw shadow
    var screenWidth = $(window).width();

    var chartBar1 = function () {
      var options1 = {
          series: [
            {
              data: [20, 50, 7, 100, -8, 80, 100],
            },
          ],
          colors: ["#D250FF"],
          chart: {
            type: "line",
            width: 96,
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
        chart1 = new ApexCharts(
          document.querySelector("#total-revenue-chart-1"),
          options1
        );
      chart1.render();
    };

    var chartBar2 = function () {
      var options2 = {
          series: [
            {
              data: [
                55, 56, 51, 49, 63, 35, 44, 40, 36, 40, 54, 49, 63, 35, 44, 3,
              ],
            },
          ],
          colors: ["#D33535"],
          chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
          },
          plotOptions: { bar: { columnWidth: "50%" } },
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          xaxis: { crosshairs: { width: 1 } },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
          },
          tooltip: {
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
        chart2 = new ApexCharts(
          document.querySelector("#total-revenue-chart-2"),
          options2
        );
      chart2.render();
    };
    var chartBar3 = function () {
      var options2 = {
          series: [
            {
              data: [
                55, 56, 51, 49, 63, 35, 44, 40, 36, 40, 54, 49, 63, 35, 44, 3,
              ],
            },
          ],
          colors: ["#D33535"],
          chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: { enabled: !0 },
          },
          plotOptions: { bar: { columnWidth: "50%" } },
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          xaxis: { crosshairs: { width: 1 } },
          stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0,
          },
          tooltip: {
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
        chart2 = new ApexCharts(
          document.querySelector("#total-revenue-chart-3"),
          options2
        );
      chart2.render();
    };

    /* Function ============ */
    return {
      init: function () {},

      load: function () {
        chartBar1();
        chartBar2();
        chartBar3();
      },

      resize: function () {},
    };
  })();

  jQuery(document).ready(function () {});

  jQuery(window).on("load", function () {
    dzChartlist.load();
  });

  jQuery(window).on("resize", function () {});
})(jQuery);
