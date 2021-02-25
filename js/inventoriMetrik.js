// Category Comparison
var catComp = document.getElementById('cat-comp').getContext('2d');
var chart = new Chart(catComp, {
    type: 'pie',

    data: {
        labels: ['Alat Medis', 'Medical Equipment Unit', 'Medical Sparepart'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
                '#82589F',
                '#3C40C6',
                '#FD7272',
            ],
            // borderColor: 'rgb(255, 99, 132)',
            data: [68, 80, 4]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'left'
      }
    }
});

// Status Equipment
var statEquip = document.getElementById('stat-equip').getContext('2d');
var chart = new Chart(statEquip, {
    type: 'pie',

    data: {
        labels: ['Active', 'Non-active'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
              '#2ecc71',
              '#e74c3c',
            ],
            // borderColor: 'rgb(255, 99, 132)',
            data: [133, 19]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'left'
      }
    }
});

// Ownership Equipment
var ownEquip = document.getElementById('own-equip').getContext('2d');
var chart = new Chart(ownEquip, {
    type: 'pie',

    data: {
        labels: ['Owned', 'Bantuan'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
              '#3498db',
              '#f1c40f',
            ],
            // borderColor: 'rgb(255, 99, 132)',
            data: [149,3]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'left'
      }
    }
});
