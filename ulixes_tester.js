function drawD3(data) {
console.log("draw D3:::",data);
$(".chartGoesHere").text("");
var width=430, height=450, radius=Math.min(width,height)/2;
var color=d3.scale.category10();
//d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
var arc=d3.svg.arc().outerRadius(radius-10).innerRadius(radius-100);
var pie=d3.layout.pie().sort(null).value(function(d) {
return d.value;
});
var svg=d3.select(".chartGoesHere").append("svg").attr("width",width).attr("height",height).append("g").attr("transform","translate("+width/2+","+height/2+")");
// data.forEach(function(d) {
// d.population = +d.population;
// });
var g=svg.data(data).selectAll(".arc").data(pie(data)).enter().append("g").attr("class","arc");
g.append("path").attr("d",arc).style("fill", function(d) {
return color(d.value);
});
g.append("text").attr("transform", function(d) {
return "translate("+arc.centroid(d)+")";
}).attr("dy",".35em").style("text-anchor","middle").text(function(d) {
return d.data.name+"("+d.value+")";
});
};
var testerDataHandler= function(data,server) {
$(".ulixes-badge").text("");
data.badges.map(function(k) {
$(".ulixes-badge").append("<li><img height='100' width='100' src='"+server+k.icon+"' title='"+k.name+"'></li>");
});
$('.ulixes-announcements').text("");
$('.ulixes-announcements-count').text(data.announcements?data.announcements.length:0);
for(var i=0;i<data.announcements.length;i+=1) {
$('.ulixes-announcements').append(data.announcements[i].message+"<br/>");
}
if(data.announcements.length==0) {
$('.ulixes-announcements').html("No New Notifications");
}
console.log("testerDataHandler processing:",data);
drawD3(data.scores);
};
