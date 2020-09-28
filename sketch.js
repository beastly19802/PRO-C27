const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var rope1,rope2,rope3,rope4,rope5

var bob1,bob2,bob3,bob4,bob5

var engine,world

var roof

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  bob1 = new Bob(300,200,40)
  bob2 = new Bob(340,200,40)
  bob3 = new Bob(380,200,40)
  bob4 = new Bob(420,200,40)
  bob5 = new Bob(460,200,40)
  roof = new Roof(380,20,160,20)}
  
  rope1 = new Rope(bob1,roof,-80,0)
  rope2 = new Rope(bob2,roof,40,0)
  rope3 = new Rope(bob3,roof,0,0)
  rope4 = new Rope(bob4,roof,40,0)
  rope5 = new Rope(bob5,roof,80,0)

function draw() {
  Engine.update(engine)
  background(255,255,255);
  rect(200,200,50,50)  
  drawSprites();
}

