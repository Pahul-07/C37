const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
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

  ground = new Ground(600,380,1200,20);
  boggie1= new Boggie(50,180,50,50);
  boggie2= new Boggie(150,180,50,50);
  boggie3= new Boggie(250,180,50,50);
  boggie4= new Boggie(350,180,50,50);
  boggie5= new Boggie(450,180,50,50);
  boggie6= new Boggie(550,180,50,50);

  rock = new Rock(1000,200,150,100);

  chain1= new Chain(boggie1.body, boggie2.body);
  chain2= new Chain(boggie2.body, boggie3.body);
  chain3= new Chain(boggie3.body, boggie4.body);
  chain4= new Chain(boggie4.body, boggie5.body);
  chain5= new Chain(boggie5.body, boggie6.body);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  
  var collide = Matter.SAT.collides(boggie6.body, rock.body);

  if(collide.collided){
    flag= true;
  }

  if(flag===true){
    textSize(30);
    fill("blue");
    text("Crash", width/2, 100);

    crashSound.play();
  }

  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  boggie6.show();

  rock.show();

  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(boggie6.body, boggie6.body.position,{x:0.5, y:0})
  }
}