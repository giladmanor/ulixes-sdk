$(document).ready(function() {
	console.log("------------");
});

function ulixes_token(token) {
	$.ajax({
		type : "POST",
		url : ulixes_server + "api/use_token",
		dataType : "jsonp",
		data : {
			t : token,
			with_info : true
		},
		success : function(data) {
			console.log("success::useToken");
			updateData(data);
		}
	});
}

function ulixes_get() {
	$.ajax({
		type : "POST",
		dataType : "jsonp",
		url : ulixes_server + "api/get",
		data : { },
		success : function(data) {
			updateData(data);
		}
	});
}

function ulixes_set(code, value) {
	$.ajax({
		type : "POST",
		dataType : "jsonp",
		url : ulixes_server + "api/set",
		data : {
			code : code,
			value : value,
			with_info : true
		},
		success : function(data) {
			updateData(data);
		}
	});
}

//////////////////////////////////////////////////////////////////////////////////////////

function updateData(data) {
	plotNode(data);
	plotBadges(data);
	plotScores(data);
	plotNotifications(data);
}

function plotNode(cluster) {
	$(".ulixes-node").text(cluster.label);
}

function plotBadges(data) {
	//clean badges
	
	data.badges.map(function(k) {
		$(".ulixes-badge-" + k.placeholder).append("<img src='" + ulixes_server + k.icon + "' title='" + k.name + "'>");
	});
}

function plotScores(data) {
	data.scores.map(function(k) {
		$(".ulixes-score-" + k.code).text(k.value);
	});
}

function plotNotifications(data) {
	$('.ulixes-announcements').text("");
	$('.ulixes-announcements-count').text( data.announcements ? data.announcements.length : 0);
	for (var i = 0; i < data.announcements.length; i += 1) {
		$('.ulixes-announcements').append(data.announcements[i].message + "<br/>");
	}
	if (data.announcements.length == 0) {
		$('.ulixes-announcements').html("No New Notifications");
	}
}
