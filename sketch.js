
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,stone,rubber;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(300,200,100,100);
	rubber = new Rubber(700,580,70);
	hammer = new Hammer(100,100);
	plane = new Plane(600,600,1200,10);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);
  plane.display();
  stone.display();
  rubber.display();
  fill ("orange");
  hammer.display();

  
  drawSprites();
 
}



