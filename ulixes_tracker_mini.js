var Ulixes=function(e,t,n){this.open=function(e){o.auth.uuid=e;get(o.auth)};this.get=function(e){r("get",e||{})};this.set=function(e,t){r("set",{code:e,value:t,with_info:true})};this.read=function(e){r("read",{id:e,with_info:true})};var r=function(e,t){$.ajax({type:"POST",dataType:"jsonp",url:o.server+"api/"+e,data:t,success:function(e){o.dataHandler(e,o.server)}})};var i=function(e){if(e.indexOf("http")!=-1){return e}else{return"http://"+e}};var s=function(e){function t(e){$(".ulixes-badge").each(function(){$(this).text("")});e.badges.map(function(e){$(".ulixes-badge-"+e.placeholder).append("<img height='100' width='100' src='"+ulixes_server+e.icon+"' title='"+e.name+"'>")})}function n(e){e.scores.map(function(e){$(".ulixes-score-"+e.code).text(e.value)})}function r(e){$(".ulixes-announcements").text("");$(".ulixes-announcements-count").text(e.announcements?e.announcements.length:0);for(var t=0;t<e.announcements.length;t+=1){$(".ulixes-announcements").append(e.announcements[t].message+"<br/>")}if(e.announcements.length==0){$(".ulixes-announcements").html("No New Notifications")}}t(e);n(e);r(e)};var o=this;this.auth=t;this.server=i(e);if(typeof n==="undefined"||!n){this.dataHandler=s}else{this.dataHandler=n}};var ulixes=new Ulixes("[SERVER]",{a_id:[ACCOUNTID],k:"[ACCOUNTCLIENTKEY]"})