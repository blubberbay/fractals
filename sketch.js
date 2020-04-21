// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/fcdNSZ9IzJM


var ANGLE = Math.PI/4;
var LEN_FRAC = 2/3;
var NUM_BRANCHES = 7;
var radius = Math.PI/8;
var windspeed = 0.01;
var time = 0;
var forest_size = 10;
var seed = 42;


function setup() {
  createCanvas(600, 400);
  
  angle_slider = createSlider(0, PI/2, ANGLE, 0.01 );//TWO_PI, ANGLE, 0.01);
  len_slider = createSlider(0, .8, LEN_FRAC, 0.01);
  branch_slider = createSlider(0, 12, NUM_BRANCHES, 1 );
  radius_slider = createSlider( 0, PI/2, radius, 0.01 );
  wind_slider = createSlider( 0, 0.05, windspeed, 0.0001 );
  forest_slider = createSlider( 0, 100, forest_size, 1 );
  

}


function draw() {
	randomSeed( seed );	
  background(51);

  angle = angle_slider.value();
  len_frac = len_slider.value();
  num_branches = branch_slider.value();
  radius = radius_slider.value();
  windspeed = wind_slider.value();
  forest_size = forest_slider.value();

    var slant = radius * sin( time );	


  var forest = new Forest( forest_size, angle, slant );
  forest.show();
  
  
  time += windspeed;
  
}
