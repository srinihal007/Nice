var button1
var button2
var button3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
button1 = createImg("push.png");
button1.position(200,30);
button1.size(50,50)
button1.mouseClicked(Button)
button2 = createImg("uparrow.png");
button2.position(100,30);
button2.size(50,50)
button2.mouseClicked(Cool);
button3 = createImg("rightarrow.png");
button3.position(300,30);
button3.size(50,50);
button3.mouseClicked(Cool1);


  var balloption = {
    restitution: 1,
    fritcionAir: 1, 
    friction: 0.01
    }
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground = new Ground(200,390,400,20);
  topwall = new Ground(200,9,400,20);
  leftwall = new Ground(10,200,20,400);
  rightwall = new Ground(389,200,20,400);
  ball = Bodies.circle(220,30,30,balloption)
  World.add(world,ball);
  ball1 = new Ball(200,100,40);
  ball2 = new Ball(100,200,30);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display()
  topwall.display()
  leftwall.display()
  rightwall.display()
  fill("skyblue")
  ellipse(ball.position.x,ball.position.y,30,30)
  ball1.display();
  ball2.display();
  
}

function Button() {
  
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:-0.05,y:-0.05});


}

function Cool() {

Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-0.1});
}

function Cool1() {

Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.1,y:0});

}