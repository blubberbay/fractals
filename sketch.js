// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/fcdNSZ9IzJM


var angle = Math.PI/4;
var len_frac = 2/3;
var num_branches = 5;
var radius = Math.PI/8;
var windspeed = 0.05;
var time = 0.02;

function setup() {
  createCanvas(600, 400);
  
  angle_slider = createSlider(0, PI/2, angle, 0.01 );//TWO_PI, angle, 0.01);
  len_slider = createSlider(0, .8, len_frac, 0.01);
  branch_slider = createSlider(0, 12, num_branches, 1 );
  radius_slider = createSlider( 0, PI/2, radius, 0.01 );
  wind_slider = createSlider( 0, 0.1, windspeed, 0.0001 );
}


function draw() {
  background(51);

  angle = angle_slider.value();
  len_frac = len_slider.value();
  num_branches = branch_slider.value();
  radius = radius_slider.value();
  windspeed = wind_slider.value();

  var slant = radius * sin( time );	

  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  
  var tree = new Tree(width/2, height, 100, angle, len_frac, num_branches, slant );
  tree.grow();
  tree.show();
  
  time += windspeed;
  
}
