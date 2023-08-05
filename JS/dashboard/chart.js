// RevenuChart
function buildRevenuChart() {
  Highcharts.chart("revenu", {
    chart: {
      type: "column",
    },
    plotOptions: {
      column: {
        borderRadius: "60%",
      },
      stacking: "normal",
      series: {
        pointWidth: 13,
      },
    },

    title: {
      text: "",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
      ],
    },

    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Earning",
        data: [10, 40, 60, 80, 50, 35, 90, 20, 50],
      },
      {
        name: "Expense",
        data: [-10, -40, -60, -80, -50, -35, -90, -20, -50],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 1921,
          },
          chartOptions: {
            chart: {
              height: "auto",
            },
            subtitle: {
              text: null,
            },
            navigator: {
              enabled: false,
            },
          },
        },
        {
          condition: {
            maxWidth: 400,
          },
          chartOptions: {
            chart: {
              height: 250,
            },
            subtitle: {
              text: null,
            },
            navigator: {
              enabled: false,
            },
          },
        },
      ],
    },
  });
}






// js chart 

var options5 = {
  series: [70, 10, 20],
  labels: ["category1 ", "category2", "category3"],
  colors: ["#CC60BECC", "#E91E63", "#9C27B0"],
  chart: {
    type: "donut",
  },
  responsive: [
    {
      breakpoint: 1921,
      options: {
        chart: {
          // width: 200,
          height: '60%',
        },
        legend: {
          position: "bottom",
        },
      },
    },
    {
      breakpoint: 1600,
      options: {
        chart: {
          // width: 200,
          height: 'auto',
        },
        legend: {
          position: "bottom",
        },
      },
    },
    
  ],
};

var jschart = new ApexCharts(document.querySelector("#js-chart"), options5);
jschart.render();


// line chart 

var options4 = {
  series: [
    {
      name: "Sales",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ],
  chart: {
    height: 350,
    type: "line",
  },
  forecastDataPoints: {},
  stroke: {
    width: 5,
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "1/11/2000",
      "2/11/2000",
      "3/11/2000",
      "4/11/2000",
      "5/11/2000",
      "6/11/2000",
      "7/11/2000",
      "8/11/2000",
      "9/11/2000",
      "10/11/2000",
      "11/11/2000",
      "12/11/2000",
      "1/11/2001",
      "2/11/2001",
      "3/11/2001",
      "4/11/2001",
      "5/11/2001",
      "6/11/2001",
    ],
    tickAmount: 10,
    labels: {
      formatter: function (value, timestamp, opts) {
        return opts.dateFormatter(new Date(timestamp), "dd MMM");
      },
    },
  },
  title: {
    text: "Sales",
    align: "left",
    style: {
      fontSize: "16px",
      color: "#666",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#FDD835"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },
  yaxis: {
    min: -10,
    max: 40,
  },
};

var options_1 = {
  series: [{
  data: [100, 40, 28, 80, 42, 109, 50]
}],
  chart: {
  height: '200px',
  type: 'area',
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  curve: 'smooth',
  lineCap: 'butt',
  colors: ['#233450'],
  width: 2,
},
fill: {
  colors: ['#233450']
},
responsive: [
  {
    breakpoint: 800,
    options: {
      chart: {
        // width: 200,
        height: 'auto',
      },
      legend: {
        position: "bottom",
      },
    },
  },
],
yaxis: {
  show: false,
},
xaxis: {
  labels:{
    show: false,
  }
}
};

var area = new ApexCharts(document.querySelector("#area"), options_1);
area.render();

var chart = new ApexCharts(document.querySelector("#line-chart"), options4);
chart.render();

buildRevenuChart()
buildLineChart()



