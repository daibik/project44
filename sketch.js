var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacleTop1, obstableTop2, obstacleTop3;
var obstacleBotton1, obstacleBottom2, obstacleBotton3;

function preload(){
bgImg = loadImage("assets/bg.png")
obstableTop1 = loadImage("assets/obsTop1.png")
obstableTop2 = loadImage("assets/obsTop2.png")
obstacleBotton1 = loadImage("assets/obsBottom1.png")
obstacleBotton2 = loadImage("assets/obsBottom2.png")
obstacleBotton3 = loadImage("assets/obsBottom3.png");

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        spawnObstaclesTop();
}

function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleTop1 = createSprite(400,50,40,50);
    
    //obstacleTop.addImage(obsTop1);
    
    obstacleTop1.scale = 0.1;
    obstacleTop1.velocityX = -4;

    //random y positions for top obstacles
    obstacleTop1.y = Math.round(random(10,100));

    //generate random top obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacleTop1.addImage(obstableTop2);
              break;
      case 2: obstacleTop1.addImage(obstableTop3);
              break;
      default: break;
    }

     //assign lifetime to the variable
   obstacleTop1.lifetime = 100;
    
   balloon.depth = balloon.depth + 1;
   
      }


    }