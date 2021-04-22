const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1,chain2;
var rock,rock1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;
  ground= new Ground(width/2,height-10,width,20);
  boggie1=new Boggie(100,100,50,50);
  boggie2=new Boggie(200,100,50,50);
  boggie3=new Boggie(300,100,50,50);
  chain1= new SlingShot(boggie1.body,boggie2.body);
  chain2= new SlingShot(boggie2.body,boggie3.body);
  rock=new Rock(1150,100,50,50);
  rock1=new Rock2(1100,100,50,50);




}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  ground.show();
  boggie1.show();
  chain1.show();
  chain2.show();

  rock1.show();
  rock.show();
  boggie2.show();
  boggie3.show();
 
  }
  function keyPressed(){
    if(keyCode===39){
      Matter.Body.applyForce(boggie1.body,boggie2.body.position,{x:600});
    }
  }

  
