function Muelle(){
	var muelle = new VertexGrid(5,5);

	muelle.translate(-6,0,4);
	muelle.scale([5,1,3]);
	muelle.rotate(Math.PI/4, [1,0,0]);

	this.initialize = function(){
		muelle.setColor([0.8, 0.76, 0.69]);
        muelle.initialize();
    }

    this.draw = function(viewMatrix){

		muelle.draw(viewMatrix);
    }


}