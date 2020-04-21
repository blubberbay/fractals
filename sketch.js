// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/fcdNSZ9IzJM


var ANGLE = Math.PI/8;
var LEN_FRAC = 2/3;
var MAX_BRANCHES = 9;
var MIN_BRANCHES = 4
var MIN_TREE_FLEX = 0
var MAX_TREE_FLEX = Math.PI/4;
var windspeed = 0.1;
var MAX_WIND_SPEED = .2;
var time = 0;
var forest_size = 10;
var MAX_FOREST_SIZE = 20;
var seed = 42;

var num_branches = 6;

var tree_flex = Math.PI/16;
var MAX_STROKE_WEIGHT = 10;
var MIN_STROKE_WEIGHT = 1;

var MAX_BRANCH_LENGTH = 100;

var LONG_FREQ = 1;
var SHORT_FREQ = .1;
var MID_FREQ = .5;

function setup() {
	createCanvas(800, 400);

	angle_slider = createSlider(0, PI/2, ANGLE, 0.01 );//TWO_PI, ANGLE, 0.01);

	tree_flex_slider = createSlider(MIN_TREE_FLEX, MAX_TREE_FLEX, tree_flex, 0.001 );
	wind_slider = createSlider( 0, MAX_WIND_SPEED, windspeed, 0.0001 );

}

function keyPressed(){
	seed = int( millis() )
}

function set_windspeed( pos=0) {
	return sin( time * SHORT_FREQ ) +  .75 * sin( time * MID_FREQ + pos / width * TWO_PI ) //+ .25 * sin( time * LONG_FREQ   );

}

function draw() {
	randomSeed( seed );	
	background(51);


	angle = angle_slider.value();
	tree_flex = tree_flex_slider.value();
	windspeed = wind_slider.value();
  
	var forest = new Forest( forest_size, angle );
	forest.show();
  
	time += windspeed;
  
}
