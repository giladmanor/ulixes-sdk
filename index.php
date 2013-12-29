<?php
include_once ("ulixes_conf.php");
include_once ("ulixes_client.php");
$token="";
if(isset($_GET['id'])){
	$uuid=$_GET['id'];
	$token=ulixes_get_token($uuid);	
}

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
			var ulixes_server = '<?php echo ULIXES_SERVER?>';
			ulixes_token('<?php echo $token?>');
		</script>
		
	</head>
	<body>
		<nav class="navbar navbar-default" role="navigation">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Ulixes Demo Bar</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li class="active">
						<p class="navbar-text"></p>
					</li>
					<li>
						<p class="navbar-text"></p>
					</li>
					
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Options <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li>
								<a href="#">Create</a>
							</li>
							<li>
								<a href="#">Another action</a>
							</li>
							<li>
								<a href="#">Something else here</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="#">Separated link</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="#">One more separated link</a>
							</li>
						</ul>
					</li>
					
				</ul>
				<form class="navbar-form navbar-left" role="search" action="/">
					<div class="form-group">
						<input name="id" type="text" class="form-control" placeholder="User Identifier">
					</div>
					<button type="submit" class="btn btn-default">
						Send
					</button>
				</form>
				<ul class="nav navbar-nav navbar-right">
					<li>
						<p class="navbar-text">Message From server</p>
					</li>
					<li>
						<a href="<?php echo ULIXES_SERVER?>">Login to Admin</a>
					</li>
					
				</ul>
			</div><!-- /.navbar-collapse -->
		</nav>

		<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
		
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
	</body>
</html>