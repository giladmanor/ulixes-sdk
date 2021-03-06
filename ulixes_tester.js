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

function badges(data,server) {
	console.log("Badges: ", data);
	
	var width = 300, height = 350;
	$(".badgesCloud").text("");
	var svg = d3.select(".badgesCloud").append("svg").attr("width", width).attr("height", height);

	var force = d3.layout.force().gravity(.05).distance(100).charge(-400).size([width, height]);
	force.nodes(data).start();

	//var link = svg.selectAll(".link").data(data.links).enter().append("line").attr("class", "link");

	var node = svg.selectAll(".node").data(data).enter().append("g").attr("class", "node").call(force.drag);

	node.append("image").attr("xlink:href", function(d){
		return server + d.icon;
	}).attr("x", -25).attr("y", 0).attr("width", 100).attr("height", 100);

	node.append("text").attr("dx", 0).attr("dy", ".35em").text(function(d) {
		return d.name;
	});

	force.on("tick", function() {
		node.attr("transform", function(d) {
			return "translate(" + d.x + "," + d.y + ")";
		});
	});

}

function message(id,data){
	return '<div class="list-group"><a href="#" class="list-group-item"><h4 class="list-group-item-heading">'+data.subject+
		'<span class="glyphicon glyphicon-remove pull-right" onclick="cnt.read('+id+')"></span>'+
		'</h4><p class="list-group-item-text">'+data.message+'</p></a></div>';
}

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
			$('.ulixes-announcements').append(message(k.id,k.data));
		});

	}
	console.log("testerDataHandler processing:", data);
	badges(data.badges,server);
	drawD3(data.scores);
	drawD4(data.actions);
};
