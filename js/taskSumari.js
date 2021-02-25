// Perbandingan
var taskPerbandingan = document.getElementById('task-perbandingan').getContext('2d');
var chart = new Chart(taskPerbandingan, {
    type: 'bar',

    data: {
        labels: ['Complaints', 'Repair', 'Maintenance', 'Calibration', 'Stock Opname', 'Mutation', 'Asset Bleaching', 'Upgrade', 'labeling'],
        datasets: [{
            label: 'Total Assignments',
            backgroundColor: [
              '#FFA801',
              '#05C46B',
              '#3C40C6',
              '#FD7272',
              '#1E272E',
              '#0FBCF9',
              '#82589F',
              '#F53B57',
              '#72fcb6',
            ],
            // borderColor: 'rgb(255, 99, 132)',
            data: [20, 7, 10, 6, 28, 4, 1, 17, 21, 40]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      }
    }
});


// Tugas Prioritas
var taskPrioritas = document.getElementById('task-prioritas').getContext('2d');
var chart = new Chart(taskPrioritas, {
    type: 'doughnut',

    data: {
        labels: ['High Priority', 'Medium Priority', 'Low Priority'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
              '#e74c3c',
              '#f1c40f',
              '#3498db',
            ],
            // borderColor: 'rgb(255, 99, 132)',
            data: [4, 7, 10]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'left'
      }
    }
});


// Tugas status
var taskStatus = document.getElementById('task-status').getContext('2d');
var chart = new Chart(taskStatus, {
    type: 'doughnut',

    data: {
        labels: ['Completed', 'Ongoing', 'Delay', 'Canceled'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#f1c40f',
              '#e74c3c',
            ],
            // borderColor: 'rgb(255, 99, 132)',
            data: [1, 3, 2, 1]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'left'
      }
    }
});
