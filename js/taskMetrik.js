let myChart1 = document.getElementById('BAR_CHART').getContext('2d');

let chart1 = new Chart(myChart1, {
	type: 'horizontalBar',
	data: {
		labels:['March', 'June', 'September','Desember'] ,
		datasets: [ {
			label: 'incoming Items',
			data: [210,400,350,460,459],
			backgroundColor: '#7F525D ',
			borderColor: '#BCC6CC',
            borderWidth: 3,
            hoverBackgroundColor:'#4E387E',
		
		},{
			label: 'Outgoing Items',
			data: [300,375,479,543,580],
			backgroundColor: '#FFE5B4',
			borderColor: '#BCC6CC',
            borderWidth: 3,
            hoverBackgroundColor:'#E8ADAA'

		},{
			label: 'Excess Items',
			data: [20,60,40,64,100],
			backgroundColor: '#7BCCB5',
			borderColor: '#BCC6CC',
            borderWidth: 3,
            hoverBackgroundColor:'#3EA99F'
        },{
        	label: 'Shortages Items',
			data: [20,60,40,64,100],
			borderColor: '#BCC6CC',
            borderWidth: 3,
            hoverBackgroundColor:'#6D7B8D'        	
        }
		]
	},
	options:{
		title:{
			text:"Hospital Stock Opname 2021",
			fontSize:25,
			display: true
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
        		}	  

			}
});

let labels2 = ['Imprtant|Urgent (20%)','Not Imprtant|Urgent (18%)','Imprtant|Not Urgent (56%)','Not Imprtant|Not Urgent (6%)'];
let data2 = [100,90,280,30];
let colors2 = ['rgba( 205, 92, 92, 1 )', 'rgba( 100, 149, 237, 1 )','rgba( 255, 127, 80, 1 )', 'rgba( 47, 79, 79, 1 )'];

let myChart2 = document.getElementById('Doughnut_Chart').getContext('2d');

let chart2 = new Chart(myChart2, {
	type: 'doughnut',
	data: {
		labels: labels2,
		datasets: [ {
			data: data2,
			backgroundColor: colors2,
			borderColor:'rgba(211, 211, 211, 1)'

		}]
	},
		options:{
		title:{
			text:"Suggestion Box 2021",
			fontSize:20,
			display: true
				},
      	legend :{
			position:'bottom'
				}	  
		}
});

let labels4 = ['Pasien Perempuan','Pasien Laki-Laki','Pasien Dengan Alergi Obat','Pasien Kelamin Ganda','Pasien kemoterapi'];
let data4 = [250,160,15,10,20];
let colors4 = ['rgba(250, 235, 215,1)', 'rgba(240, 248, 255, 1)','rgba(240, 128, 128, 1)', 'rgba(255, 255, 224, 1)','rgba(211, 211, 211, 1)'];

let myChart4 = document.getElementById('Doughnut1_Chart').getContext('2d');

let chart4 = new Chart(myChart4, {
	type: 'doughnut',
	data: {
		labels: labels4,
		datasets: [ {
			data: data4,
			backgroundColor: colors4,
			borderColor:'rgba(211, 211, 211, 1)'

		}]
	},
		options:{
		title:{
			text:"Pasien Labelling 2021",
			fontSize:20,
			display: true
				},
      	legend :{
			position:'bottom'
				}	  
		}
});
let labels5 = ['Shake First Label','High Alert Label','Oxidator Label','Radioactive Label','LASA Label'];
let data5 = [150,40,35,20,50];
let colors5 = ['rgba(250, 235, 215,1)', 'rgba(240, 248, 255, 1)','rgba(240, 128, 128, 1)', 'rgba(255, 255, 224, 1)','rgba(211, 211, 211, 1)'];

let myChart5 = document.getElementById('Doughnut2_Chart').getContext('2d');

let chart5 = new Chart(myChart5, {
	type: 'doughnut',
	data: {
		labels: labels5,
		datasets: [ {
			data: data5,
			backgroundColor: colors5,
			borderColor:'rgba(211, 211, 211, 1)'
		}]
	},
		options:{
		title:{
			text:"Medicine Labelling 2021",
			fontSize:20,
			display: true
				},
      	legend :{
			position:'bottom'
				}	  
		}
});

let myChart3 = document.getElementById('line_chart2').getContext('2d');

let chart3 = new Chart(myChart3, {
	type: 'line',
	data: {
		labels:['March','April', 'June', 'August','September','Desember'],
		datasets:[{
			label: 'Restoration',
			data: [100,0,190,0,470,500],
			backgroundColor: 'rgba(250, 235, 215,1)',
			borderColor: '#BCC6CC',
            borderWidth: 3,
            hoverBackgroundColor:'#4E387E',
        },{
        	label: 'Maintenance',
			data: [0,30,0,65,0,100],
			backgroundColor: 'rgba(127, 255, 212, 1)',
			borderColor: '#BCC6CC',
            borderWidth: 3,
            hoverBackgroundColor:'#6D7B8D',
        }]

	
	},
	
		options:{
		title:{
			text:"Hospital Restoration and Maintenance Progress 2021",
			fontSize:20,
			display: true
				},
      	legend :{
			position:'top'
				},
		scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            
            }]
        		},
        tooltips:{
        mode:'index',
      },  
		}
});


