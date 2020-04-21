function Tree( x, y, height,  angle, len_frac, num_levels, slant )
	{
		this.x = x;
		this.y = y;
		this.height = height;
		this.angle = angle;
		this.len_frac = len_frac;
		this.num_levels = num_levels;
		this.slant = slant;
		this.branches = [];
		
		var begin = createVector(this.x, this.y );
		var end = createVector(this.x, this.y - this.height * this.len_frac );
		
		
		this.branches = [];
		if ( this.num_levels > 0 )
		{	
			var dir = p5.Vector.sub(begin, end);
			dir.rotate( this.slant - PI ); //doing it this way becaause up is down?
			var newEnd = p5.Vector.add(end, dir);
			var root = new Branch(begin, newEnd, this.angle, this.len_frac, this.slant );
			this.branches[0] = root;
		}
		
		this.grow = function(){
		
		for (var j = 1; j< this.num_levels; j++ )
		{
			for (var i = this.branches.length - 1; i >= 0; i--) 
			{
				if (!this.branches[i].finished) {
					this.branches.push(this.branches[i].branch('left'));
					this.branches.push(this.branches[i].branch('right'));
			}
			this.branches[i].finished = true;
			
			}
		}
	};
	
	this.show = function(){
		//this.grow();
		
		 for (var i = 0; i < this.branches.length; i++) {
			this.branches[i].show();
			//this.branches[i].jitter();
		}
	};
}