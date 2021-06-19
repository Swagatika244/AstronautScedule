var backgroundImg, bathing, brushing, drinking, eating, gymming, moving, sleeping 
var Astronaut, backGround
var edges
var angle=0;

function preload(){
  //bathing = loadImage("bath1.png");

  backgroundImg = loadImage("iss.png");
  bathing = loadAnimation("bath1.png", "bath2.png");
  brushing = loadAnimation("brush.png");
  drinking = loadAnimation("drink1.png", "drink2.png");
  eating = loadAnimation("eat1.png", "eat2.png");
  gyming = loadAnimation("gym1.png", "gym2.png"/*,"gym11.png","gym12.png"*/);
  moving = loadAnimation("move3.png", "move1.png");
  sleeping = loadAnimation("sleep.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  fill (rgb(255,229,180));
  textSize(30);
  strokeWeight(3);
  stroke(1);

  edges = createEdgeSprites();

  backGround = createSprite(width/2,height/2,50,50);
  backGround.addImage(backgroundImg);
  backGround.scale=0.35;
  
  Astronaut = createSprite(width/4, height/3, 50, angle);
  Astronaut.addAnimation("sleep",sleeping);
  Astronaut.scale=0.1;
  Astronaut.velocityX=1;
  Astronaut.velocityY=-1;
  push ()
 // rectMode(CENTER);
  translate (Astronaut.position.x,Astronaut.position.y);
  rotate (angle);
  //rect(0,0,100,30);
  pop ()

}

function draw() {

  Astronaut.bounceOff(edges);
  
  if(keyDown("Up_Arrow")){
    Astronaut.addAnimation("Drinking", drinking);
    Astronaut.changeAnimation("Drinking");
    Astronaut.velocityX=-1;
    Astronaut.velocityY=2;
  }
  if(keyDown("Down_Arrow")){
    Astronaut.addAnimation("Gyming", gyming);
    Astronaut.changeAnimation("Gyming");
    Astronaut.velocityX=2;
    Astronaut.velocityY=-1;
  }
  if(keyDown("Left_Arrow")){
    Astronaut.addAnimation("bathing", bathing);
    Astronaut.changeAnimation("bathing");
    Astronaut.velocityX=2;
    Astronaut.velocityY=1;
  }
  if(keyDown("Right_Arrow")){
    Astronaut.addAnimation("eating", eating);
    Astronaut.changeAnimation("eating");
    Astronaut.velocityX=-1;
    Astronaut.velocityY=-2;
  }
  if(keyDown("m")){
    Astronaut.addAnimation("moving", moving);
    Astronaut.changeAnimation("moving");
    Astronaut.velocityX=1;
    Astronaut.velocityY=2;
  }
  

  angle +=0.1;

  background(0);  
  drawSprites();
  text("Up Arrow=Drinking,"+"    Down Arrow=Gymming,"+"    Left Arrow=Bathing,"+"    Right Arrow=Eating,"+"    'm' Key=moving",30,60);
 
}