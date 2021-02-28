
// let labels1 = ['Treatment Rooms','Diagnose Rooms','Office Room','Toilet','intensive care unit Room'];
// let data1 = [70,30,20,50,20];
// let colors1 = ['#FFA801', '#05C46B', '#3C40C6','#1E272E','#82589F'];

// let myChart1 = document.getElementById('PIE').getContext('2d');

// let chart1 = new Chart(myChart1, {
// 	type: 'pie',
// 	data: {
// 		labels: labels1,
// 		datasets: [ {
// 			data: data1,
// 			backgroundColor: colors1
// 		}]
// 	},
// 	options:{
// 		title:{
// 			text:"TOP 5 Most Adequate room",
// 			display: true

// 		},
// 		legend :{
// 			position:'left'
// 		}
// 	}
// });

let labels2 = ['Baik (60%)','Rusak Ringan (28%)','Rusak (5%)','Rusak Berat (4%)','unknown (3%)'];
let data2 = [384,178,33,26,19];
let colors2 = ['#0FBCF9', '#FFA801', '#FD7272', '#F53B57','gray'];

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
let data3 = [0,100,310,220,510,450,640];
let colors3 = ['#CDCDCD'];

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

		},

		]
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

let labels4 = [' Medical Devices','Medical Equipment Unit','Medical Speareparts'];
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