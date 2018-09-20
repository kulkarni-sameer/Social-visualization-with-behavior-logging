

 var x= document.getElementById("aaupvote").innerText;
   var p= document.getElementById("bbupvote").innerText;
    var q= document.getElementById("ccupvote").innerText;
    //  var r= document.getElementById("yc").innerText;
var w = 400, h = 400, r = 200, color = d3.scale.category20b();
data = [{"label":"AAA", "count":x},
        {"label":"BBB", "count":p},
        {"label":"CCC", "count":q}];

var vis1 = d3.select("body")
    .append("svg:svg")
  .data([data])
    .attr("width", w)
    .attr("height", h)
  .append("svg:g")
    .attr("transform", "translate(" + r + "," + r + ")")
var arc = d3.svg.arc()
    .outerRadius(r);
var pie = d3.layout.pie()
  .value(function(d) { return d.count; });
var arcs = vis1.selectAll("g.slice")
  .data(pie)
  .enter().append("svg:g")
        .attr("class", "slice");
arcs.append("svg:path")
  .attr("fill", function(d, i) { return color(i); } )
  .attr("d", arc)
  .append("svg:title") // TITLE APPENDED HERE
    .text(function(d) { return d.value; });
arcs.append("svg:text")
  .attr("transform", function(d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";
    })
  .attr("text-anchor", "middle")
  .text(function(d, i) { return data[i].label +"( " +data[i].count +" )"; });
  
  
  var x= document.getElementById("aadownvote").innerText;
   var p= document.getElementById("bbdownvote").innerText;
    var q= document.getElementById("ccdownvote").innerText;
    //  var r= document.getElementById("yc").innerText;
var w = 400, h = 400, r = 200, color = d3.scale.category10();
data = [{"label":"AAA", "count":x},
        {"label":"BBB", "count":p},
        {"label":"CCC", "count":q}];

var vis2 = d3.select("body")
    .append("svg:svg")
  .data([data])
    .attr("width", w)
    .attr("height", h)
  .append("svg:g")
    .attr("transform", "translate(" + r + "," + r + ")")
var arc = d3.svg.arc()
    .outerRadius(r);
var pie = d3.layout.pie()
  .value(function(d) { return d.count; });
var arcs = vis2.selectAll("g.slice")
  .data(pie)
  .enter().append("svg:g")
        .attr("class", "slice");
arcs.append("svg:path")
  .attr("fill", function(d, i) { return color(i); } )
  .attr("d", arc)
  .append("svg:title") // TITLE APPENDED HERE
    .text(function(d) { return d.value; });
arcs.append("svg:text")
  .attr("transform", function(d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";
    })
  .attr("text-anchor", "middle")
  .text(function(d, i) { return data[i].label +"( " +data[i].count +" )"; });


var x= document.getElementById("aacomment").innerText;
   var p= document.getElementById("bbcomment").innerText;
    var q= document.getElementById("cccomment").innerText;
    //  var r= document.getElementById("yc").innerText;
var w = 400, h = 400, r = 200, color = d3.scale.category20c();
data = [{"label":"AAA", "count":x},
        {"label":"BBB", "count":p},
        {"label":"CCC", "count":q}];

var vis3 = d3.select("body")
    .append("svg:svg")
  .data([data])
    .attr("width", w)
    .attr("height", h)
  .append("svg:g")
    .attr("transform", "translate(" + r + "," + r + ")")
var arc = d3.svg.arc()
    .outerRadius(r);
var pie = d3.layout.pie()
  .value(function(d) { return d.count; });
var arcs = vis3.selectAll("g.slice")
  .data(pie)
  .enter().append("svg:g")
        .attr("class", "slice");
arcs.append("svg:path")
  .attr("fill", function(d, i) { return color(i); } )
  .attr("d", arc)
  .append("svg:title") // TITLE APPENDED HERE
    .text(function(d) { return d.value; });
arcs.append("svg:text")
  .attr("transform", function(d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";
    })
  .attr("text-anchor", "middle")
  .text(function(d, i) { return data[i].label +"( " +data[i].count +" )"; });
  
  
 
 
  var x= document.getElementById("yy").innerText;
   var p= document.getElementById("ya").innerText;
    var q= document.getElementById("yb").innerText;
     var r= document.getElementById("yc").innerText; 
  
  var dataset = [
    { name: 'Upvotes', percent: x },
    { name: 'Downvotes', percent: p },
    { name: 'Comments', percent: q },
    { name: 'Stars', percent: r }
  
];

var pie=d3.layout.pie()
  .value(function(d){return d.percent})
  .sort(null)
  .padAngle(.03);

var w=300,h=300;

var outerRadius=w/2;
var innerRadius=100;

var color = d3.scale.category10();

var arc=d3.svg.arc()
  .outerRadius(outerRadius)
  .innerRadius(innerRadius);

var svg=d3.select("#chart")
  .append("svg")
  .attr({
      width:w,
      height:h,
      class:'shadow'
  }).append('g')
  .attr({
      transform:'translate('+w/2+','+h/2+')'
  });
var path=svg.selectAll('path')
  .data(pie(dataset))
  .enter()
  .append('path')
  .attr({
      d:arc,
      fill:function(d,i){
          return color(d.data.name);
      }
  });

path.transition()
  .duration(1000)
  .attrTween('d', function(d) {
      var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
      return function(t) {
          return arc(interpolate(t));
      };
  });


var restOfTheData=function(){
    var text=svg.selectAll('text')
        .data(pie(dataset))
        .enter()
        .append("text")
        .transition()
        .duration(200)
        .attr("transform", function (d) {
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("dy", ".4em")
        .attr("text-anchor", "middle")
        .text(function(d){
            return d.data.percent;
        })
        .style({
            fill:'#fff',
            'font-size':'10px'
        });

    var legendRectSize=20;
    var legendSpacing=7;
    var legendHeight=legendRectSize+legendSpacing;


    var legend=svg.selectAll('.legend')
        .data(color.domain())
        .enter()
        .append('g')
        .attr({
            class:'legend',
            transform:function(d,i){
                //Just a calculation for x & y position
                return 'translate(-35,' + ((i*legendHeight)-65) + ')';
            }
        });
    legend.append('rect')
        .attr({
            width:legendRectSize,
            height:legendRectSize,
            rx:20,
            ry:20
        })
        .style({
            fill:color,
            stroke:color
        });

    legend.append('text')
        .attr({
            x:30,
            y:15
        })
        .text(function(d){
            return d;
        }).style({
            fill:'#929DAF',
            'font-size':'14px'
        });
};

setTimeout(restOfTheData,1000);