# Scatterplot.js
######(v1.1.1)

A jQuery plugin for creating 2D [scatter plot](http://en.wikipedia.org/wiki/Scatter_plot) graphs and charts.

[Demo](http://paulwoidke.com/project/Scatterplot-js/)


## Installation

Download `scatterplot.min.js` and `scatterplot.css` from [GitHub](https://github.com/pwoidke/Scatterplot-js). Add these files to your site by adding the following references in your HTML file:

```html
<link href="scatterplot.css" rel="stylesheet" type="text/css" />
<script src="scatterplot.min.js"></script>
```


## Usage

Create a HTML element to act as your graph and child elements to act as points:

```html
<div id="scatterplot">
    <span id="point"></span>
</div>
```


With no configuration (default):

```javascript
$(document).ready(function () {
    $('#scatterplot').scatter();
    $('#point').plot();
});
```


With settings (static):

```javascript
$(document).ready(function () {
    $('#scatterplot').scatter({ height: 500, width: 500, xLabel: 'X-Axis Label', yLabel: 'Y-Axis Label', rows: 4, columns: 5, subsections: 4 });
    $('#point1').plot({ xPos: 100, yPos: 100, color: 'red' });
    $('#point2').plot({ xPos: 320, yPos: 145, radius: 30, color: 'blue' });
    $('#point3').plot({ xPos: 460, yPos: 410, radius: 10, color: 'green' });
});
```


With settings (responsive):

```javascript
$(document).ready(function () {
    $('#scatterplot').scatter({ height: 500, width: '50%', xLabel: 'X-Axis Label', yLabel: 'Y-Axis Label', rows: 5, columns: 5, subsections: 5, responsive: true, xUnits: ["0%", "20%", "40%", "60%", "80%", "100%"], yUnits: [0, 10, 20, 30, 40, 50] });
    $('#point1').plot({ xPos: '10%', yPos: '10%', color: 'red' });
    $('#point2').plot({ xPos: '60%', yPos: '40%', radius: 30, color: 'blue' });
    $('#point3').plot({ xPos: '90%', yPos: '75%', radius: 10, color: 'green' });
});
```


Plotting By Class (static):

```html
<div id="scatterplot">
    <span class="point" style="left: 100px; bottom: 100px;"></span>
    <span class="point" style="left: 300px; bottom: 250px; background-color: blue;"></span>
    <span class="point" style="left: 400px; bottom: 450px; background-color: green; width: 15px;"></span>
</div> 
```

```javascript
$(document).ready(function () {
    $('#scatterplot').scatter({ height: 500, width: 500, xLabel: 'X-Axis', yLabel: 'Y-Axis', rows: 5, columns: 5, subsections: 5 });
    $('.point').plot();
}); 
```


Plotting By Class (responsive):

```html
<div id="scatterplot">
    <span class="point" style="left: 20%; bottom: 20%;"></span>
    <span class="point" style="left: 50%; bottom: 50%; background-color: #f00ff0;"></span>
    <span class="point" style="left: 70%; bottom: 80%; background-color: blue; width: 15px;"></span>
</div> 
```

```javascript
$(document).ready(function () {
$('#scatterplot').scatter({ height: 500, width: 500, xLabel: 'X-Axis', yLabel: 'Y-Axis', rows: 5, columns: 5, subsections: 5, responsive: true });
    $('.point').plot();
}); 
```


## Settings

```javascript
$('#scatterplot').scatter({
    height: 300,                // Height of the graph (ex: 500, '50%')
    width: 300,                 // Width of the graph (ex: 500, '50%')
    xLabel: '',                 // Text of label for X-axis
    yLabel: '',                 // Text of label for Y-axis
    rows: 1,                    // Number of rows in graph
    columns: 1,                 // Number of columns in graph
    subsections: 1,             // Number of subsections for each row/column
    color: '#CCC',              // Background color of graph
    responsive: false,          // Set whether graph is responsive (position of labels, units, lines, points set to percentages)
    xUnits: [],                 // Array of units for X-axis (will be evenly spaced from bottom-left corner to bottom-right corner) (ex: ["0%", "20%", "40%", "60%", "80%", "100%"], [0, 10, 20, 30, 40, 50])
    yUnits: []                  // Array of units for Y-axis (will be evenly spaced from bottom-left corner to bottom-right corner) (ex: ["0%", "20%", "40%", "60%", "80%", "100%"], [0, 10, 20, 30, 40, 50])
});
```

When creating points, the position, background color, and width can be set using inline styling:
```html
<span id="point" style="left: 100px; bottom: 100px; background-color: red; width: 30px;"></span>
<span id="point" style="left: 50%; bottom: 50%; background-color: #FFFF00; width: 2em;"></span>
<span id="point" style="left: 25%; bottom: 50px; background-color: rgba(255, 255, 0, .5); width: 10%;"></span> 
```


## TODOs

- Improve documentation
- Clean up and optimize code
- ~~Create functionality for plotting an array of points~~


## Issues

- Graph `background-position` (used for subsections) not aligned correctly for responsive graphs (Chrome)
- Graph `background-image` (used for subsections) does not work for responsive graphs (IE)
- Points shift slightly when resizing responsive graphs (All browsers)


## License

Copyright 2013
[Paul Woidke](http://paulwoidke.com)

Licensed under the [MIT License](http://opensource.org/licenses/MIT)

