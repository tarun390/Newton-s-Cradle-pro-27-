
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 900);


	engine = Engine.create();
	world = engine.world;
 
	bob1 = new Bob(525,700,100);
	bob2 = new Bob(650,700,100);
	bob3 = new Bob(725,700,100);
	bob4 = new Bob(800,700,100);
	bob5 = new Bob(850,700,100);
	roof = new Roof(600,30,1000,50);
	rope1 = new Rope(bob1.body,roof.body,-100*2,0)
	rope2 = new Rope(bob2.body,roof.body,-50*2,0)
	rope3 = new Rope(bob3.body,roof.body,0*2,1)
	rope4 = new Rope(bob4.body,roof.body,50*2,0)
	rope5 = new Rope(bob5.body,roof.body,100*2,0)

	Engine.run(engine);
  
}


function draw() {
  background(205,10,20);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x: -1910,y: 1910});
	}
}