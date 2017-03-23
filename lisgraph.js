function l_g() {
	var inc_i = [["血液_BUN(mg/dL)","血液_CREA(mg/dL)", "血液_eGFR"], ["血液_AST(U/L)","血液_ALT(U/L)"],["血液_NA(mmol/L)","血液_K(mmol/L)"]];
	var d_t = document.getElementsByClassName("cssReportBody sSky sSky-Fixed")[0];
	var row_len = d_t.children[0].childElementCount;
	var col_len = d_t.children[1].childElementCount;
	var a_s_d = {};
	for (i=1; i < row_len; i++) {
		for (j=1; j < col_len; j++) {
			n = d_t.children[1].children[0].children[i].innerText.slice(16,18)+'_'+d_t.children[1].children[j].children[0].innerText;
			if (typeof a_s_d[n] == 'undefined') {
				a_s_d[n] = [];
			}
			if (d_t.children[1].children[j].children[i].innerHTML == '&nbsp;') {
				continue;
			}
			a_s_d[n].push([d_t.children[1].children[0].children[i].innerText.slice(0,14), d_t.children[1].children[j].children[i].innerText]);
		}
	}
	for (i=0; i < inc_i.length; i++){
		for (j=0; j < inc_i[i].length; j++) {
			if (typeof(a_s_d[inc_i[i][j]]) == "undefined") {
				inc_i[i].splice(j,1);
			}
		}
	}
	d = document.getElementById("divContent");
	old_graphs = document.body.getElementsByClassName("LISgraph");
	l = old_graphs.length;
	for (i=0; i < l; i++){
		console.log("removing " + i);
		d.removeChild(old_graphs[0]);
	}

	for (i=0; i < inc_i.length; i++){
		var g = document.createElement("canvas");
		d = document.getElementById("divContent");
		d.appendChild(g);
		g.className = "LISgraph";
		g.width = "50";
		g.height = "20";
		var d = [];
		console.log(a_s_d);
		for (j=0; j < inc_i[i].length; j++) {
			color_string = (Math.floor(Math.random()*256*256*256)).toString(16);
			while (color_string.length < 6) {
				color_string = "0" + color_string;
			}
			color_string = "#" + color_string;
			console.log(i,j,inc_i[i][j]);
			d.push(
				{
					label: inc_i[i][j],
					borderColor: color_string,
					data: a_s_d[inc_i[i][j]].map(function(u){
						return {x: u[0], y: Number(u[1])}
					})
				}
			);
		}
		var LISgraph = new Chart(g, {
			type: 'line',
			data: {
				datasets: d
			},
			xAxisID: "Time",
			yAxisID: "Concentration",
			options: {
				scales: {
					xAxes: [{
						display: true,
						type: 'time',
						time: {
							parser: "YY-MM-DDHH:mm"
						},
						scaleLabel: {
							display: true,
							labelString: "Time"
						},
						position: 'bottom'
					}],
					yAxes: [{
						display: true,
						type: 'linear',
						scaleLabel: {
							display: true,
							labelString: "Concentration"
						},
						position: 'left'
					}]
				}
			}
		});
	}
}

var gen_graph = document.createElement("button");
gen_graph.type = "button";
gen_graph.innerHTML = "generate graph";
gen_graph.addEventListener('click', l_g);

var clear_graph = document.createElement("button");
clear_graph.type = "button";
clear_graph.innerHTML = "clear graphs";
clear_graph.addEventListener('click', function(){
	old_graphs = document.body.getElementsByClassName("LISgraph");
	l = old_graphs.length;
	for (i=0; i < l; i++){
		d.removeChild(old_graphs[0]);
	}
})

function addButtons(){
	document.getElementById("divContent").appendChild(gen_graph);
	document.getElementById("divContent").appendChild(clear_graph);
	//document.head.appendChild(gen_graph);
	//document.head.appendChild(clear_graph);
}
//document.body.insertBefore(gen_graph, document.body.childNodes[0]);
//document.getElementById("divSearchOption").insertBefore(gen_graph, document.getElementById("divSearchOption").childNodes[0]);
//document.getElementById("fsSearch").appendChild(gen_graph);
