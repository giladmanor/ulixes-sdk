var Ulixes = function(server, token, dataHandler) {
	var self = this;
	this.token = token;
	this.server = server;

	function use_token(token) {
		send("use_token", {
			t : token,
			with_info : true
		});
	}


	this.get = function() {
		send("get", {});
	};

	this.set = function(code, value) {
		send("set", {
			code : code,
			value : value,
			with_info : true
		});
	};
	
	this.read = function(id) {
		send("read", {
			id : id,
			with_info : true
		});
	};

	var send = function(action, data) {
		$.ajax({
			type : "POST",
			dataType : "jsonp",
			url : self.server + "api/" + action,
			data : data,
			success : function(data) {
				self.dataHandler(data,self.server);
			}
		});
	};

	var defaultDataHandler = function(data) {

		function plotBadges(data) {
			//clean badges
			$(".ulixes-badge").each(function() {
				$(this).text("");
			});
			data.badges.map(function(k) {
				$(".ulixes-badge-" + k.placeholder).append("<img height='100' width='100' src='" + ulixes_server + k.icon + "' title='" + k.name + "'>");
			});
		}

		function plotScores(data) {
			data.scores.map(function(k) {
				$(".ulixes-score-" + k.code).text(k.value);
			});
		}

		function plotNotifications(data) {
			$('.ulixes-announcements').text("");
			$('.ulixes-announcements-count').text(data.announcements ? data.announcements.length : 0);
			for (var i = 0; i < data.announcements.length; i += 1) {
				$('.ulixes-announcements').append(data.announcements[i].message + "<br/>");
			}
			if (data.announcements.length == 0) {
				$('.ulixes-announcements').html("No New Notifications");
			}
		}


		console.log("defaultDataHandler");
		plotBadges(data);
		plotScores(data);
		plotNotifications(data);
	};
	if (( typeof dataHandler === "undefined") || !dataHandler) {
		this.dataHandler = defaultDataHandler;
	}else{
		this.dataHandler = dataHandler;
	}
	use_token(token);

};

