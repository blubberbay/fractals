
function Branch(begin, end, angle, len_frac, slant) {
  this.begin = begin;
  this.end = end;
  this.finished = false;
  this.JITTER_RANGE = JITTER_RANGE;
  this.len_frac = len_frac;
  this.angle = angle;
  this.slant = slant;

  this.jitter = function() {
    this.end.x += random(-this.JITTER_RANGE, this.JITTER_RANGE);
    this.end.y += random(-this.JITTER_RANGE, this.JITTER_RANGE);
  };

  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };

  this.branch = function(direction) {
    var dir = p5.Vector.sub(this.end, this.begin);
    switch( direction ) {
		case 'left': 
			dir.rotate( -this.angle + this.slant );
			break;
		case 'right': 
			dir.rotate( this.angle + this.slant );
			break;
	}
    dir.mult(this.len_frac);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd, this.angle, this.len_frac, this.slant );
    return b;
  };
 }
