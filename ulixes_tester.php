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
		
		
		</script>
		<script src="http://d3js.org/d3.v3.min.js"></script>

	</head>
	<body>

		<?php
		include_once ("ulixes_controle_bar.php");
		?>

		<ul class="list-unstyled pull-left ulixes-badge">nothing</ul>
		
		
		<div class="pull-right"><div class="chartGoesHere"></div><div class="text-muted" style="margin-top: -240px;margin-left: 183px;"><strong>User Vector</strong></div></div>
		
		<div class="pull-left">
			<form class="navbar-form navbar-left" role="search" onsubmit="cnt.set($('#code').val(),$('#value').val());return false;">
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

		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
	</body>
	<script src="ulixes_tester.js"></script>
	<script>
		var cnt=new Ulixes('<?php echo ULIXES_SERVER?>','<?php echo $token?>',testerDataHandler);
	</script>
</html>