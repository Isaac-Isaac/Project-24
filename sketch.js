
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var hammer, stone, rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height-10.5,810,20);

	hammer = new Hammer(mouseX,mouseY);

	stone = new Stone(500,350,60,PI/2);

	rubber = new Rubber(400,300,85,85);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(179,224,242);



	ground.display();
	hammer.display();	
	stone.display();
	rubber.display();	
}



