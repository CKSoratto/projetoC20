
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	Engine.run(engine);


	var block1_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
		}
		var block2_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
		}
		var block3_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
		}
		var floor_options = {
        isStatic:true
			}
	

	block1 = Bodies.circle(220,10,100,block1_options);
	World.add(world,block1);
	block2 = Bodies.circle(150,50,150,block2_options);
	World.add(world,block2);
	block3 = Bodies.rectangle(350,50,45,30,block3_options);
	World.add(world,block3);
	floor = Bodies.rectangle(300,590,700,20,floor_options);
	World.add(world,floor);

}


function draw() {
  rectMode(CENTER);
  background(145,173,107);

  Engine.update(engine);

  ellipse(block1.position.x, block1.position.y, 100);
  ellipse(block2.position.x, block2.position.y, 150);
  rect(block3.position.x, block3.position.y, 45, 30);
  fill(97, 144, 220);
  rect(floor.position.x, floor.position.y, 700, 20);

  drawSprites();
 
}



