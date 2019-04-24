 // javascript
 
var data= [80, 100, 56, 120, 180, 30, 40, 120, 160];







var svgWidth = 500, svgHeight = 300;

var svg = d3.select('svg')
	.attr("width", svgWidth+50)
	.attr("height", svgHeight);

//Bars
var barWidth = svgWidth / data.length, barPadding=10;

var xScale = d3.scaleLinear() 
	.domain([0, d3.max(data)])
	.range([0, svgWidth]);
var yScale = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range([0,svgHeight]);

var barChart = svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - d
    })
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("class", "bar")
    .attr("transform", function (d, i) {
        var translate = [barWidth * i+40, -20]; 
        return "translate("+ translate +")";
    });


//Axis

var y_axisScale = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range([svgHeight,0]);
	 
var x_axis = d3.axisBottom().scale(xScale);

var y_axis = d3.axisLeft().scale(y_axisScale);
		 
svg.append("g")
	.attr("transform", "translate(30, -20)")
	.call(y_axis);
	 
var xAxisTranslate = svgHeight - 20;
		 
svg.append("g")
	.attr("transform", "translate(30, " + xAxisTranslate  +")")
	.call(x_axis);
