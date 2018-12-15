// created a controllable agent that can be moved in the canvas

var x = 0;
var y = 0;

var stack = [];

function keyPressed()
{
	stack.push(keyCode);
}

function keyReleased()
{
	stack.pop()
}

function update()
{
	stack.forEach(function(k){
		if(k == UP_ARROW)
			y -= 10;
		if(k == DOWN_ARROW)
			y += 10;
		if(k == RIGHT_ARROW)
			x += 10;
		if(k == LEFT_ARROW)
			x -= 10;
	});
}

function render()
{
	background(0);
	colorMode(HSB);
	strokeWeight(4);
	stroke(255);
	fill(255);
	ellipse(x, y, 25)
}


function setup()
{
	createCanvas(1280, 720);
}

function draw()
{
	translate(width/2, height/2);
	update();
	render();
}