const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Start=1
var Play=0
var End=2
var GameState=Start 
var life=3;
var score2=0;
var index = 0;
var ener=100;
var player


function preload(){
  bgimg=loadImage("images/sunrise3.png")
  archerimg=loadImage("images/archer.png")
  b1img=loadImage("images/b1.png")
  b2img=loadImage("images/b2.png")
  b3img=loadImage("images/b3.png")
  b4img=loadImage("images/b4.png")
  b5img=loadImage("images/b5.png")

}

function setup() {
  createCanvas(windowWidth , windowHeight);

  archer=createSprite(width-100, height/2,20,20);
  archer.addImage(archerimg);
  archer.scale=0.3;

  
  border=createSprite(width, height,200,20);
  border.visible=false

  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();

  score=0
  
}
function draw() {
  background(bgimg);
  archer.y=mouseY
  score = score + Math.round(getFrameRate()/60);
  drawSprites()

   redBalloon(); 
   blueBalloon();
   greenBalloon(); 
   pinkBalloon(); 
  //createArrow();

}



function redBalloon()
{
 if(frameCount % 100 == 0) 
{
  redB=createSprite(width/40,30,40,10);  
  redB.addImage("apple",b2img);
  redB.scale=0.3;
  redB.velocityX=3;
  redB.y=Math.round(random(0,height-10));
  //appleGroup.add(apple);
}
}

function blueBalloon()
{
 if(frameCount % 170 == 0) 
{
  blueB=createSprite(width/40,30,40,10);  
  blueB.addImage("carrot",b3img);
  blueB.scale=0.15;
  blueB.velocityX=2;
  blueB.y=Math.round(random(0,height-10));
 // carrotGroup.add(carrot);
}
}

function greenBalloon()
{
 if(frameCount % 250== 0) 
{
  greenB=createSprite(0,30,40,10);  
  greenB.addImage("leaf",b4img);
  greenB.scale=0.3;
  greenB.velocityX=2;
  greenB.y=Math.round(random(0,height-10));
  //leafGroup.add(leaf);
}
}

function pinkBalloon()
{
 if(frameCount % 420 == 0) 
{
  pinkB=createSprite(0,30,40,10);  
  pinkB.addImage("brleaf",b1img);
  pinkB.scale=0.12;
  pinkB.velocityX=4;
  pinkB.y=Math.round(random(0,height-10));
 // brleafGroup.add(brleaf);
}
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}
