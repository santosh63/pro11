var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage,orangeL,orangeImage,redL,redImage,grassImage,grass;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  orangeImage = loadImage("orangeLeaf.png");
  redImage = loadImage("redImage.png");
   grassImage = loadImage("grass.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
   var select = Math.round(random(1,3));
  if (World.frameCount % 100 == 0) {
    if (select == 1) {
      createApples();
    } else if (select == 2) {
      createOrange();
    }  else {
      createRed();
    }
  }  
  createGrass();
}

function createApples(){
apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImage);
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifetime=150;
  
  
  
  
}

function createOrange( ){
orangeL=createSprite(random(50,350),40,10,10);
 orangeL.addImage(orangeImage);
  orangeL.scale=0.08;
  orangeL.velocityY=3;
  orangeL.lifetime=150;
  
}
function createRed(){
redL=createSprite(random(50,350),40,10,10);
 redL.addImage(redImage);
  redL.scale=0.05;
  redL.velocityY=3;
  redL.lifetime=150;
  
}
function createGrass(){
grass=createSprite(random(0,400),390,10,10);
 grass.addImage(grassImage);
  grass.scale=0.05;
 
 
}
