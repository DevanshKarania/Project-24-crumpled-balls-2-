
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var d1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300,500);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  var options = {
    isStatic : true
  }
 

  ground = Bodies.rectangle(550,475,1500,10,options);
  World.add(world,ground);
  
    paper = new Paper(100,95,60);
    
    d1 = new Dustbin(1000,470);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
 
  paper.display();

  d1.display();

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,1500,10);



  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
  }
}

