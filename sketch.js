const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bg, black1,queen,striker;
var white1,rope;

function preload(){
  bg=loadImage("carromboard.png");

}
function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;

 
black1 = new Black(275,200,30,20);
white1 = new White(225,200,30,20);
queen = new Queen(250,198,30,20);
striker = new Striker(250,330,30,30);


rope=new Rope(striker.body,{x: 200, y: 100});

}
function draw () {
  background(bg);  
  black1.display();
  white1.display();
  queen.display();
  striker.display();
  rope.display();

}

function attach(){
  Matter.Body.setPosition(striker.body, {x:200 , y: 100});   
 rope.attach(striker.body);
}


function mouseDragged(){
  Matter.Body.setPosition(striker.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
 rope.fly();

}
