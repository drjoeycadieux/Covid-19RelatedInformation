var xArray = [55, 49, 44, 24, 15];
var yArray = ["Canada ", "United States ", "Russia ", "Ukraine ", "Argentina "];

var data = [{
    x: xArray,
    y: yArray,
    type: "bar",
    orientation: "h",
    marker: { color: "rgba(255,0,0,0.6)" }
}];

var layout = { title: "World Wide Covid-19 Stats" };

Plotly.newPlot("myPlot1", data, layout);