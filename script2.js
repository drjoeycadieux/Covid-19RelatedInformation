var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
var yArray = [55, 49, 44, 24, 15];

var data = [{
    x: xArray,
    y: yArray,
    type: "bar"
}];

var layout = { title: "World Wide Covid-19 Stats" };

Plotly.newPlot("myPlot2", data, layout);