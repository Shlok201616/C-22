const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var object, ground,box1, box2;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new Box(700,550,60,60);
 box2 = new Box(550,550,60,60);
 ground=new Ground(600,590,1200,20)
 
  pig1=new Pig(625,550);
  Engine.run(engine);
  log1=new Log(625,500,212,PI/2)
  box3 = new Box(700,450,60,60);
 box4 = new Box(550,450,60,60);
 box5=new Box(625,350,60,60);
  pig2=new Pig(625,450);
  log2=new Log(625,400,212,PI/2)
  log3=new Log(575,350,150,PI/7)
  log4=new Log(675,350,150,-PI/7)
}

function draw() {
  background(0);  
 
 rectMode(CENTER);

 log1.display();
 log2.display();
 log3.display();
 log4.display();
 pig1.display();
 pig2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
}