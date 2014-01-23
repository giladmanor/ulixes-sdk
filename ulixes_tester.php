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
		<script></script>
		<!-- <script src="http://d3js.org/d3.v3.min.js"></script> -->
		<script src="d3.min.js"></script>
	</head>
	<body>

		<?php
		include_once ("ulixes_controle_bar.php");
		?>
		<div class="container">
			<div class="chartGoesHere"></div>
			<div class="actionChartGoesHere" style="margin-top: -383px;margin-left: 65px;"></div>
			<div class="text-muted" style="margin-top: -232px;margin-left: 140px;">
				<h2>User Vector</h2>
			</div>
			<div style="margin-top: 0px;margin-left: 178px;">
				<strong class="ulixes-node"></strong>
			</div>

			<div class="col-xs-5 alert alert-info" style="margin-top: 167px;">
				<form class="form-inline" role="form" onsubmit="cnt.set($('#code').val(),$('#value').val());return false;">
					<div class="form-group ">
						<input name="code" id="code" type="text" class="form-control" placeholder="code" value="a">
					</div>
					<div class="form-group ">
						<input name="value" id="value" type="text" class="form-control" placeholder="value" value="1">
					</div>
					<button type="submit" class="btn btn-default">
						Send
					</button>
				</form>
			</div>
			<div class=" col-xs-4" style=" float: right; margin-top: -195px; ">
				<div class="panel panel-info">
					<div class="panel-heading">
						Notifications
					</div>
					<div class="panel-body" style=" overflow: auto; height: 250px; ">
						<ul class="list-unstyled ulixes-announcements" style="overflow: auto">
							nothing
						</ul>
					</div>

				</div>
			</div>
			<div class=" col-xs-2" style=" float: right; margin-top: -195px; ">
				<div class="panel panel-info">
					<div class="panel-heading">
						Badges
					</div>
					<div class="panel-body">
						<ul class="list-unstyled  ulixes-badge">
							nothing
						</ul>
					</div>

				</div>
			</div>
		</div>
		<div class="" style="margin-left: 1px">

			
			

		</div>

		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
	</body>
	<script src="ulixes_tester.js"></script>
	<script>
var cnt=new Ulixes('<?php echo ULIXES_SERVER?>','<?php echo $token?>',testerDataHandler);
	</script>
</html>