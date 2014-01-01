<?php
include_once ("ulixes_conf.php");
include_once ("ulixes_client.php");
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Ulixes Default Client</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<script src="https://code.jquery.com/jquery.js"></script>
		<script src="ulixes_client.js"></script>
		<script>
var cnt = new Ulixes('<?php echo ULIXES_SERVER?>','<?php echo $token?>', testerDataHandler);
		</script>
		<script src="http://d3js.org/d3.v3.min.js"></script>

	</head>
	<body>

		<?php
		include_once ("ulixes_controle_bar.php");
		?>

		<ul class="list-unstyled pull-left ulixes-badge">nothing</ul>
		
		<div class="pull-right chartGoesHere"></div>

		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
	</body>
	<script>
		var width = 430, height = 450, radius = Math.min(width, height) / 2;

		var color = d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

		var arc = d3.svg.arc().outerRadius(radius - 10).innerRadius(radius - 100);

		var pie = d3.layout.pie().sort(null).value(function(d) {
			return d.population;
		});

		var svg = d3.select(".chartGoesHere").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		d3.csv("data.csv", function(error, data) {

			data.forEach(function(d) {
				d.population = +d.population;
			});

			var g = svg.selectAll(".arc").data(pie(data)).enter().append("g").attr("class", "arc");

			g.append("path").attr("d", arc).style("fill", function(d) {
				return color(d.data.age);
			});

			g.append("text").attr("transform", function(d) {
				return "translate(" + arc.centroid(d) + ")";
			}).attr("dy", ".35em").style("text-anchor", "middle").text(function(d) {
				return d.data.age;
			});

		});

	</script>
</html>