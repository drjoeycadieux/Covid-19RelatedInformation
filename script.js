var exp = "Math.cos(x)";

// Generate values
var xValues = [];
var yValues = [];
for (var x = 0; x <= 10; x += 0.2) {
    yValues.push(eval(exp));
    xValues.push(x);
}

// Display using Plotly
var data = [{ x: xValues, y: yValues, mode: "markers" }];
var layout = { title: "Covid-19 Tracker Stats = " + exp };
Plotly.newPlot("myPlot", data, layout);