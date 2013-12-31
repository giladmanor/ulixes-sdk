<?php
include_once ("ulixes_conf.php");
include_once ("ulixes_client.php");
$token = "";
if (isset($_GET['id'])) {
	$uuid = $_GET['id'];
	$token = ulixes_get_token($uuid);
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
		<script>var ulixes_server =                       '<?php echo ULIXES_SERVER?>
	';
	ulixes_token('
<?php echo $token?>
	');
		</script>

	</head>
	<body>

		<?php
		include_once ("ulixes_controle_bar.php");
		?>
		<ul class="list-unstyled pull-left">
			<li class="">
				<img src="badges/bronze.png" alt="..." class="img-circle">
			</li>
			<li class="">
				<img src="badges/silver.png" alt="..." class="img-circle">
			</li>
			<li class="">
				<img src="badges/gold.png" alt="..." class="img-circle">
			</li>
		</ul>

		<div class="container">
			<div class="container  col-md-6">
				<div class="progress progress-striped">
					<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 5%">
						<span class="sr-only">20% Complete</span>
					</div>
				</div>
			</div>
			<div class="container " >
				<div class="container  col-md-6">
					<div class="panel panel-info">
						<div class="panel-heading">
							A Little Story about Engagement
						</div>
						<div class="panel-body" style="overflow: auto;height: 289px;">
							<p>
								In a way, sites are like mindless zombies. They are out for your brain. The vast majority of e-services are no more than rudimentary automatons. They sing and dance while you go about your business, in the hope of catching your attention for that extra fraction of a second. Hence the analogy to brain eating zombies.
							</p>
							<p>
								Presenting the Ulixes rule engine, the steam engine of marketing intelligence to drive your e-service into its fullest potential.
							</p>
							<h3>A few important things you need to know about the Ulixes rule engine:</h3>
							<p>
								<ul>
									<li>
										It is open source and free
									</li>
									<li>
										It is easy to install and start usinge
									</li>
									<li>
										It is supported by a group of master engineers
									</li>
								</ul>
							</p>
							<h3>OK, How do I get started?</h3>
							<dl class="dl-horizontal">
								<dt>
									Install
								</dt>
								<dd>
									download the latest community version from ulixes.io and follow through the installation guide. you will need technical know how for this step, but you can also register to the online service and get it ready made for the coast of hosting alone starting from $10/month
								</dd>
								<dt>
									Embed
								</dt>
								<dd>
									copy and paste a few snippets into your site/service code. this requires a developer, but fear not, we are here to help :-)
								</dd>
								<dt>
									Configure
								</dt>
								<dd>
									use your own experience and mastery of your business to devise the business rules and behavior you want your customers to adapt to. watch this video, or call up one of the many consultants to advise you
								</dd>
							</dl>

							<p>
								&nbsp;
							</p>
						</div>

					</div>
				</div>

				<div class="jumbotron pull-right">
					<h1>Welcome!</h1>
					<p>

					</p>
					<p>
						<a class="btn btn-primary btn-lg" role="button">Got it.</a>
					</p>
				</div>

			</div>
		</div>

		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
	</body>
</html>