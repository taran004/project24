
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  paperObject;
var ground;
var side1,side2,side3;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,40);
	
	
	ground = new Ground(800,650,1600,30)

	side1 = new Dustbin(1200,615,200,30)
	side2 = new Dustbin(1085,585,30,90)
	side3 = new Dustbin(1285,585,30,90)

	Engine.run(engine);
	

}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  paperObject.display();
  
  
 
  ground.display();
  
 side1.display();
 side2.display();
 side3.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





