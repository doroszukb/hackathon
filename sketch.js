var myData;
var balls = [];
//var myImg
//var myImg2
var mic
var myImg0

function preload() {

//myImg= loadImage("./assets/candle1.png");
//myImg2= loadImage("./assets/candle2.png");
myImg0= loadImage("./assets/candles.png");
}

function setup() {

	createCanvas(windowWidth, windowHeight);
	
	mic = new p5.AudioIn()
	mic.start()
	
	for (var i = 0; i < windowWidth*4; i++) {
		var newBall = new Ball(random(3, 5));
		balls.push(newBall);
	}
}

function draw() {
	background(168, 200, 255);



fill(255)
	for (var i = 0; i < balls.length; i++) {
		var ball = balls[i];
		ball.move();
		ball.display();
	}
	
	
	
	//image(myImg,windowWidth/2-windowHeight/24,windowHeight/2-windowHeight/4,windowHeight/12,windowHeight/2);
if(windowHeight<windowWidth)
{image(myImg0,windowWidth/2-windowHeight/2,0,windowHeight,windowHeight)
} else{image(myImg0,0,windowHeight/2-windowWidth/2,windowWidth,windowWidth)}


var p1
if( windowWidth>windowHeight){
p1=windowHeight/4} else{
  p1=(windowHeight-windowWidth)/2+windowWidth/4
}
var vol = mic.getLevel()
fill(255, 209, 7,90)


//1 swieczka
var remap0 = map(vol,0,1,2,200)
var remap = map(vol,0,1,2,500)
var remap1 = map(vol,0,1,2,1000)

fill(255, 119, 0)
ellipse(windowWidth/2,p1,remap0)

fill(255, 220, 71,99)
ellipse(windowWidth/2,p1,remap)

fill(255, 232, 137,90)
ellipse(windowWidth/2,p1,remap1)

//2 2 swwieczka

//strokeWeight(10)
//fill('red')
//if (windowHeight<windowWidth) {
  
 /// fill(255, 119, 0)
//ellipse(windowWidth/2,p1,remap0)

//fill(255, 220, 71,99)
//ellipse(windowWidth/2,p1,remap)

//fill(255, 232, 137,90)
//ellipse(windowWidth/2,p1,remap1)

  
//ellipse((windowWidth-windowHeight)/2+windowHeight/4,windowHeight*15/40,10,10)
//} else{ellipse(windowWidth/4,(windowHeight-windowWidth)/2+windowWidth*15/40,10,10)}
	

	

}

function Ball(radius) {

noStroke()

	this.radius = radius;

	this.x = random(this.radius, windowWidth*5 - this.radius);
	this.y = random(this.radius, windowHeight*5 - this.radius);

	this.incrementX = random(-1,1);
	this.incrementY = random(-1,1);

	this.display = function() {

		ellipse(this.x, this.y, this.radius * 2);
	}

	this.move = function() {

		this.x += this.incrementX;
		this.y += this.incrementY;
		//var p = 400

	if (this.x > windowWidth*5 - this.radius || this.x < this.radius) {
			this.incrementX *= -1
	//		print(this.x);
	//		print(this.radius);
		}

		if (this.y > windowHeight*5 - this.radius || this.y < this.radius) {
			this.incrementY *= -1
	//		print(this.y);
	//		print(this.radius);
		}
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
