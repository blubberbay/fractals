// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/0jjeOYMjmDU

var angle = 0;
var len_frac = 0.67;
var slant = 0
var angle_slider;
var len_slider;
var slant_slider;
var max_size_frac = 0.95;
var max_height = 600;
var max_width = 1200;

function setup() {
  createCanvas(max_width, max_height );
  angle_slider = createSlider(0, PI, angle, 0.01);
	len_slider = createSlider(0, .67, len_frac ,.01);
	slant_slider = createSlider(-PI/2,PI/2, slant, 0.01);
}

function draw() {
  background(51);
  angle = angle_slider.value();
  len_frac = len_slider.value()
  slant = slant_slider.value();
  
  init_len = len_frac * max_height;

  stroke(255);
  translate(300, height);
  rotate(slant)
  branch(200);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle+slant);
    branch(len * len_frac );
    pop();
    push();
    rotate(-angle+slant);
    branch(len * len_frac );
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}