// a bubble floating around

function setup()
{
	createCanvas(1280, 720);
	console.log(height, width);
	x = -width/2
	y = -height/2
}

function renderEllipse(x, y)
{
	if(x > width/2) {
		this.x = -width/2
		this.y = -height/2
	}
	console.log(x, y)
	translate(width/2, height/2)
	colorMode(HSB);
	strokeWeight(2);
	stroke(255);
	fill(255);
	ellipse(x, y, 100)
}

function draw()
{
	background(0);
	i = 16/9;
	renderEllipse(x, y);
	x+=i
	y+=1
}