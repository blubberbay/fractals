function Tree( x, y, height,  angle, len_frac, num_levels )
	{
		this.x = x;
		this.y = y;
		this.height = height;
		this.angle = angle;
		this.len_frac = len_frac;
		this.num_levels = num_levels;
		this.branches = [];
		
		var begin = createVector(this.x, this.y );
		var end = createVector(this.x, this.y - this.height * this.len_frac );
		
		var dir = p5.Vector.sub(begin, end);
		
		this.branches = [];
		var root = new Branch(begin, end, this.angle, this.len_frac );
		this.branches[0] = root;

	this.grow = function(){
		/*
		for (var i = 0; i <this.num_levels; i++) {
				this.branches.push(this.branches[i].branch('left'));
				this.branches.push(this.branches[i].branch('right'));
			}
		*/
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