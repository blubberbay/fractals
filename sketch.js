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
var max_branches = 12;
var branches = 5

class trunk {
	constructor( type = 'line', length ){
	this.type = type;
	this.length = length;
	}
	draw(){
	line( 0, 0, 0,-this.length );
	}
}



function setup() {
  createCanvas(max_width, max_height );
  angle_slider = createSlider(0, PI, angle, 0.01);
	len_slider = createSlider(0, .67, len_frac ,.01);
	slant_slider = createSlider(-PI/2,PI/2, slant, 0.01);
	branch_slider = createSlider(1, max_branches, branches, 1 );
}

function draw() {
  background(51);
  angle = angle_slider.value();
  len_frac = len_slider.value()
  slant = slant_slider.value();
  branches = branch_slider.value();
  
  init_len = len_frac * max_height;

  stroke(255);
  translate(300, height);
  rotate(slant)
  branch(200 * len_frac ,branches);
}

function branch(len, branches) {
  some_branch = new trunk('line', len)
  //line(0, 0, 0, -len);
  some_branch.draw();
  translate(0, -len);
  if (branches > 1) {
    push();
    rotate(angle+slant);
    branch(len * len_frac, branches - 1 );
    pop();
    push();
    rotate(-angle+slant);
    branch(len * len_frac, branches - 1 );
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}