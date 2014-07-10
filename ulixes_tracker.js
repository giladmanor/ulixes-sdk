var Ulixes = function(server, auth, dataHandler) {

	this.open = function(uid, d) {
		console.log("ULIXES UUID: ",uid);
		self.auth.uuid = uid;
		$.extend(d || {}, self.auth);
		self.get(d);
	};

	this.get = function(d) {
		send("get", d || {});
	};

	this.set = function(code, value) {
		send("set", {
			code : code,
			value : value,
			with_info : false
		});
	};

	this.read = function(id) {
		send("read", {
			id : id,
			with_info : true
		});
	};

	var send = function(action, data) {
		$.extend(data, self.auth);
		$.ajax({
			type : "POST",
			url : self.server + "api/" + action,
			data : data,
			success : function(res) {
				console.log("Ulixes response: ",res);
				self.dataHandler(res, self.server);
			},
			error : function(err){
				console.log("Ulixes ERROR: ",err);
			}
		});
	};

	var resolveServer = function(server) {
		if (server.indexOf("http") != -1) {
			return server;
		} else {
			return "http://" + server;
		}
	};

	var defaultDataHandler = function(data) {
		
		function plotBadges(data) {
			//clean badges
			$(".ulixes-badge").each(function() {
				$(this).text("");
			});
			data.badges.map(function(k) {
				$(".ulixes-badge-" + k.placeholder).append("<img height='40' width='40' src='http://bozz.wikibrains.com/" + k.icon + "' title='" + k.name + "'>");
			});
		}

		function plotScores(data) {
			data.scores.map(function(k) {
				$(".ulixes-score-card" + k.code).text(k.value);
			});
		}

		function message(id, data) {
			return '<li class="list-group"><a href="#" style="float:right" onclick="ulixes.read(' + id + ');return false;">X</a><p class="list-group-item-text">' + data.message + '</p></li>';
		}
		
		function pop_message(id, data) {
			return '<a href="#" style="float:right" onclick="ulixes.read(' + id + ');return false;">X</a><br/><p ><strong>' + (data.title || "") +
			 '</strong></p><p >' + (data.message) + '</p>';
		}
		
		function video_message(id, data) {
			return '<a href="#" style="float:right" onclick="ulixes.read(' + id + ');return false;">X</a><p style="margin-top: -10px;"><strong>' + (data.message) +
			 '</strong></p><br/><p ><iframe style="margin-left: -21px;" width="479" height="260" src="'+(data.video)+'" frameborder="0" allowfullscreen></iframe></p>';
		}

		function plotNotifications(data) {
			
			$('.ulixes-announcements').text("");
			$('.ulixesNotifications').hide();
			
			$('#ulixes-popup-messages').text("");
			$('.ulixes-popup').hide();
			
			$('.ulixes-announcements-count').text(data.announcements ? data.announcements.length : 0);
			data.announcements.map(function(k) {
				console.log("m: ", k);
				if(k.channel==="popup"){
					if(k.format==="video"){
						$('#ulixes-popup-messages').html(video_message(k.id, k.data));
					}else{
						$('#ulixes-popup-messages').html(pop_message(k.id, k.data));
					}
					$('.ulixes-popup').show();
				}else{
					$('.ulixes-announcements').append(message(k.id, k.data));
					$('.ulixesNotifications').show();	
				}
			});
		}
		//console.log("defaultDataHandler");
		plotBadges(data);
		plotScores(data);
		plotNotifications(data);
	};

	// INIT INIT INIT INIT INIT INIT INIT INIT INIT INIT INIT INIT INIT INIT INIT
	var self = this;
	this.auth = auth;
	this.server = resolveServer(server);

	if (( typeof dataHandler === "undefined") || !dataHandler) {
		this.dataHandler = defaultDataHandler;
	} else {
		this.dataHandler = dataHandler;
	}

};

$(function() {
    window.ulixes = new Ulixes("http://your Ulixes server/", {
		a_id : 1,
		k : "a"
    });
});