// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/fcdNSZ9IzJM


var angle = .2//Math.PI/4;
var len_frac = 2/3;
var num_branches = 2;

function setup() {
  createCanvas(600, 400);
  
  angle_slider = createSlider(0, 6, angle, 0.01 );//TWO_PI, angle, 0.01);
  len_slider = createSlider(0, .8, len_frac, 0.01);
  branch_slider = createSlider(0, 10, num_branches, 1 );
  
 
}


function draw() {
  background(51);

  angle = angle_slider.value();
  len_frac = len_slider.value();
  num_branches = branch_slider.value();

  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  
  var tree = new Tree(width/2, height, 100, angle, len_frac, num_branches );
  tree.grow();
  tree.show();
  
/*
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    //tree[i].jitter();
  }

  for (var i = 0; i < leaves.length; i++) {
    fill(255, 0, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    leaves[i].y += random(0, 2);
  }
  */
}
