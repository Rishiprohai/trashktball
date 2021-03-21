const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball1;
var box1;
var log1;

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	ground = new Ground(100,height,2400,10);
    ball1=new ball(175,100);
    box1=new box(800,10,200,20);
    log2=new log(1010,110,110,PI/5);
    log1=new log(800,110,110,-PI/5);
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball1.display();
  box1.display();
  log2.display();
  log1.display();
 
}