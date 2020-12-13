
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var binImage,binImg;

function preload(){

	binImg = loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(1200,400)
	engine = Engine.create();
    world = engine.world;

	binImage=createSprite(800,285,20,20);
	binImage.addImage(binImg);
	binImage.scale=0.5;
	
	ball = new Paper(100,320,30);
	ground = new Base(600,380,1200,20);
	bottom = new Dustbin(800,355,170,20);
	left = new Dustbin(730,280,20,150);
	right = new Dustbin(870,280,20,150);

	Engine.run(engine);
}


function draw() {
  background("white");

  
  
  ground.display();
  ball.display();
  bottom.display();
  left.display();
  right.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === 32) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:170,y:-150});
  
	}
}
