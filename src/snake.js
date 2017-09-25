//Snake.js/

//module.exports = Snake;

/** @class Snake
	* The snake in a Snake game
	*/
export default class Snake {
	constructor(x, y, segments){
		this.body = [];
		for(var i = 0; i < segments; i++){
			this.body.push({
				x: x - i,
				y: y
			});
		}
		this.direction = 'right';
	}
	checkForConsumption(food){
		
	}
	update(){
		//Did we smack a wall?
		//Did we eat ourselves
		//Did we eat food?
		//Do we need to grow?
	}
	
	/** @function render
	* Renders the Snake on the board
	*/
	render(ctx){
		this.body.forEach(function(segment) {
			ctx.save();
			ctx.fillStyle = 'green';
			ctx.fillRect(
			segment.x,
			segment.y,
			1,
			1);
			ctx.restore();
		});
	}
}