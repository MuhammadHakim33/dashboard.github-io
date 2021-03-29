let labels1 = ['Electrical Device', 'Furnitur', 'Vehicle', 'IT Device', 'Medical Device'];

let myChart1 = document.getElementById('BAR1').getContext('2d');

let chart1 = new Chart(myChart1, {
	type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: labels1,
        datasets: [{
            label: "Good",
            backgroundColor: '#0FBCF9',
            borderColor: '#E6E3E2',
            borderWidth: 3,
            data: [80, 120, 60, 220],
        },{
        	label: "Slightly Damaged",
            backgroundColor: '#FFA801',
            borderColor: '#E6E3E2',
            borderWidth: 3,
            data: [20, 40, 15, 21],
        },{
        	label: "Heavily Damaged",
            backgroundColor: '#F53B57',
            borderColor: '#E6E3E2',
            borderWidth: 3,
            data: [6, 8, 12, 6],
        },{
        	label: "Unknown",
            backgroundColor: 'gray',
            borderColor: '#E6E3E2',
            borderWidth: 3,
            data: [10, 6, 10, 6],
        },]
    },
    options :{
    	title:{
        text:"Hospital Item Condision Report 2021",
        fontSize:25,
        display:true
      },
      tooltips:{
        mode:'index',
      },
      scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        },	
    }

});
let labels2 = ['Baik (60%)','Rusak Ringan (28%)','Rusak Berat (4%)','unknown (3%)'];
let data2 = [384,178,26,19];
let colors2 = ['#0FBCF9', '#FFA801', '#F53B57','gray'];

let myChart2 = document.getElementById('DOUGHNUT').getContext('2d');

let chart2 = new Chart(myChart2, {
	type: 'doughnut',
	data: {
		labels: labels2,
		datasets: [ {
			data: data2,
			backgroundColor: colors2
		}]
	},
	options:{
		title:{
			text:"Medical Device Condition from 640 Item in 2021",
			fontSize:20,
			display: true

		},
		legend :{
			position:'left'
		}
	}
});
let labels3 = ['','2017','2018','2019','2020','2021'];


let myChart3 = document.getElementById('LINE').getContext('2d');

let chart3 = new Chart(myChart3, {
	type: 'line',
	data: {
		labels: labels3,
		datasets: [ {
			label: 'Medical Devices',
			data: [0,210,400,350,460,459],
			backgroundColor: '#72FCB6',
			pointBackgroundColor:'#FFFFFF',
			pointBorderColor:'#FFFFFF',
			borderColor: '#72FCB6'

		},{
			label: 'Medical Equipment Unit',
			data: [0,300,375,479,543,580],
			backgroundColor: '#1E272E',
			pointBackgroundColor:'#FFFFFF',
			pointBorderColor:'#FFFFFF',
			borderColor: '#1E272E'

		},{
			label: 'Medical Speareparts',
			data: [0,20,60,40,64,100],
			backgroundColor: '#05C46B',
			pointBackgroundColor:'#FFFFFF',
			pointBorderColor:'#FFFFFF',
			borderColor: '#05C46B'

		},]
	},
	options:{
		title:{
			text:"Annual Hospital Category Asset Performance Report",
			fontSize:25,
			display: true
			  },
		scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }	  

			}
});

let labels4 = ['Medical Devices','Medical Equipment Unit','Medical Speareparts'];
let data4 = [459,580,100];
let colors4 = ['#72FCB6', '#1E272E', '#05C46B'];

let myChart4 = document.getElementById('DOUGHNUT1').getContext('2d');

let chart4 = new Chart(myChart4, {
	type: 'doughnut',
	data: {
		labels: labels4,
		datasets: [ {
			data: data4,
			backgroundColor: colors4
		}]
	},
	options:{
		title:{
			text:"Highest Hospital Category Asset Performance 2021",
			fontSize:20,
			display: true

		},
		legend :{
			position:'left'
		}
	}
});
