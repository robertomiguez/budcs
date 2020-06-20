<template>
  <canvas :id="chartName"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: "ChartGeneric",
  components: {},
  props: {
    chartName: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    labelsX: {
      type: Array,  
      required: true
    },
    datasets: {
      type: Array,
      required: true
    }
  },  
  methods: {
    fillChartData(chartName, type, labelsX, datasets) {
      const foundLeftYAxis = datasets.some(el => el.yAxisID === "left-y-axis")
      const foundRightYAxis = datasets.some(el => el.yAxisID === "right-y-axis")
      const yAxes = []
      if (foundLeftYAxis) {
        yAxes.push({
          id: 'left-y-axis',
          position: 'left',
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            display:false
          }
        })
      }
      if (foundRightYAxis) {
        yAxes.push({
          id: 'right-y-axis',
          position: 'right',
          ticks: {
            beginAtZero: true
          }
        })
      }
      return  {
        type: type,
        data: {
          labels: labelsX, 
          datasets: datasets
        },
        options: {
          title: {
            display: true,
            text: chartName
          },
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: yAxes
          }
        }
      }    
    },
 
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  },
  mounted() {
    this.createChart(this.chartName, this.fillChartData(this.chartName, this.type, this.labelsX, this.datasets))
  }
}
</script>
