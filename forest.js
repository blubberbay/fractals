function Forest(num_trees, angle ) {
	this.num_trees = num_trees
	this.trees = [];
	this.trunks = [];
	
	for( i = 0; i<num_trees; i++ )
	{
		var x = random(0, width);
		
		var num_branches = MAX_BRANCHES; //random( MIN_BRANCHES, MAX_BRANCHES );
		var len_frac = random( .05, LEN_FRAC );
		start_height = height - (LEN_FRAC - len_frac ) * height;

		this.trunks[i] = createVector(x, start_height );
		
		this.trees[i] = new Tree(this.trunks[i].x, this.trunks[i].y, MAX_BRANCH_LENGTH, angle, len_frac, num_branches, tree_flex );
		this.trees[i].grow();	
		
	}
  		
	this.show = function(){	
		for (var i = 0; i < this.num_trees; i++) {
			this.trees[i].show();
			//this.branches[i].jitter();
		}
	};

}