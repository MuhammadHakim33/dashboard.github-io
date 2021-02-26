// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var linechart = document.getElementById('linechart').getContext('2d');
var chart = new Chart(linechart, {
  type: 'line',
  data: {
    labels: ["Masker", "Obat", "Vaksin", "Suntikan", "Alat Operasi","Handsanitizer"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(27, 128, 1)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(0, 0, 139)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(139, 5, 0)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [100, 80, 60, 70, 60,100],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// Bar Chart Example
var barchart = document.getElementById('barchart').getContext('2d');
var chart = new Chart(barchart, {
  type: 'bar',
  data: {
    labels: ["Masker", "Obat", "Vaksin", "Suntikan", "Alat Operasi", "Handsanitizer"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(255, 0, 0)",
      borderColor: "rgba(2,117,216,1)",
      data: [100, 80, 70, 70, 60,100],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});


