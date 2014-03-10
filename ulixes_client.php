<?php
function getURLWithParams($apiCall, $data) {
	$fields_string = '';
	foreach ($data as $key => $value) {
		$fields_string .= $key . '=' . $value . '&';
	}
	rtrim($fields_string, '&');
	$ready_url = ULIXES_SERVER . "api/" . $apiCall . "?" . "a_id=" . ULIXES_ACCOUNT . "&k=" . ULIXES_KEY . "&" . $fields_string;
	return $ready_url;
}

function execute_cURL($url) {
	if (!function_exists('curl_init')) {
		echo " CURL not installed";
		return 'Sorry cURL is not installed!';
	}
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_TIMEOUT, 10);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	$output = curl_exec($ch);
	curl_close($ch);
	return $output;
}

function ulixes_create($uid) {
	$data = array('uuid' => $uid);
	$url = getURLWithParams("create", $data);
	return json_decode(execute_cURL($url));
}

function ulixes_get_token($uid) {
	$data = array('uuid' => $uid);
	$url = getURLWithParams("get_token", $data);
	return execute_cURL($url);
}

function ulixes_set($uid, $code, $value) {
	$data = array('uuid' => $uid, 'code' => $code, 'value' => $value);
	$url = getURLWithParams("set", $data);
	return json_decode(execute_cURL($url));
}

function ulixes_get($uid) {
	$data = array('uuid' => $uid);
	$url = getURLWithParams("get", $data);
	return json_decode(execute_cURL($url));
}

$token = "";
$uuid = "";
if (isset($_GET['id'])) {
	$uuid = $_GET['id'];
	$token = ulixes_get_token($uuid);
}
?>
