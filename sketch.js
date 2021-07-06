const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var snowflake,snowflake1,snowflake2,engine,world,bg;
var time=0
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  bg = loadImage("snow3.jpg");
displaySnowflake();

setTimeout(displaySnowflake2(),300)
displaySnowflake3();
}
function draw() {
  background(bg);
  Engine.update(engine)  
  snowflake.display();
  snowflake1.display();
  snowflake2.display();
  drawSprites();
}
function displaySnowflake() { 
  snowflake = new Snow(50,0,50,50,0);

}
function displaySnowflake2() {
 
  snowflake1 = new Snow(150,0,50,50,0);

 
}
function displaySnowflake3() {
 
  snowflake2 = new Snow(100,0,50,50,0);

 
}