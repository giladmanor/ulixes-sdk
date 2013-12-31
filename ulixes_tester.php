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
		

		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="js/bootstrap.min.js"></script>
	</body>
</html>