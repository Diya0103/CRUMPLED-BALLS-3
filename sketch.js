var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paper,bin;
var binImg,paperImg,box4;
var launcher1;

function preload() {
	
}
	

//1500,600
function setup() {
	createCanvas(900, 500);

	
    
	engine = Engine.create();
	Engine.run(engine);

	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	paper = new Paper();
	ground = new Ground();
	bin = new Dustbin();


	launcher1 = new Launcher(paper.body,{x:90,y:240});
	


	
  
}
function keyPressed(){

	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-55})

	}

}



function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper.display();
  bin.display();
  launcher1.display();
 
}


function mouseDragged(){
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launcher1.fly();
}

