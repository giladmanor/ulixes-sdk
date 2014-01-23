function drawD3(data) {// Draw Bagel for scores
	console.log("draw D3:::", data);
	$(".chartGoesHere").text("");
	var width = 430, height = 450, radius = Math.min(width, height) / 2;
	var color = d3.scale.category10();
	//d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
	var arc = d3.svg.arc().outerRadius(radius - 10).innerRadius(radius - 100);
	var pie = d3.layout.pie().sort(null).value(function(d) {
		return d.value;
	});
	var svg = d3.select(".chartGoesHere").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	// data.forEach(function(d) {
	// d.population = +d.population;
	// });
	var g = svg.data(data).selectAll(".arc").data(pie(data)).enter().append("g").attr("class", "arc");
	g.append("path").attr("d", arc).style("fill", function(d) {
		return color(d.value);
	});
	g.append("text").attr("transform", function(d) {
		return "translate(" + arc.centroid(d) + ")";
	}).attr("dy", ".35em").style("text-anchor", "middle").text(function(d) {
		return d.data.name + "(" + d.value + ")";
	});
};
function drawD4(data) {// Draw Bagel for activities
	console.log("draw D3:::", data);
	$(".actionChartGoesHere").text("");
	var width = 300, height = 300, radius = Math.min(width, height) / 2;
	var color = d3.scale.category20();
	//d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
	var arc = d3.svg.arc().outerRadius(radius - 20).innerRadius(radius - 50);
	var pie = d3.layout.pie().sort(null).value(function(d) {
		return d.value;
	});
	var svg = d3.select(".actionChartGoesHere").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	// data.forEach(function(d) {
	// d.population = +d.population;
	// });
	var g = svg.data(data).selectAll(".arc").data(pie(data)).enter().append("g").attr("class", "arc");
	g.append("path").attr("d", arc).style("fill", function(d) {
		return color(d.value);
	});
	g.append("text").attr("transform", function(d) {
		return "translate(" + arc.centroid(d) + ")";
	}).attr("dy", ".35em").style("text-anchor", "middle").text(function(d) {
		return "";
	});

};
var testerDataHandler = function(data, server) {
	$(".ulixes-node").text(data.node.name);

	$(".ulixes-badge").text("");
	data.badges.map(function(k) {
		$(".ulixes-badge").append("<li><img height='60' class='img-circle' width='60' src='" + server + k.icon + "' title='" + k.name + "'> <span class='badge'>" + k.name + "</span></li>");
	});
	$('.ulixes-announcements').text("");
	$('.ulixes-announcements-count').text(data.announcements ? data.announcements.length : 0);
	for (var i = 0; i < data.announcements.length; i += 1) {
		$('.ulixes-announcements').append(data.announcements[i].message + "<br/>");
	}
	console.log("User notifications:: ", data.announcements);
	if (data.announcements.length == 0) {
		$('.ulixes-announcements').html("No New Notifications");
	} else {
		$('.ulixes-announcements').html("");
		data.announcements.map(function(k) {
			$('.ulixes-announcements').append("<li>"+k.data.message+"</li>");
		});

	}
	console.log("testerDataHandler processing:", data);
	drawD3(data.scores);
	drawD4(data.actions);
};
