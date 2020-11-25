
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, rock;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0

function preload(){
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
monkey = createSprite(80,315,20,20);
monkey.addAnimation("run",monkey_running);
monkey.scale= 0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
}


function draw() {
background(255);
  
   if(keyDown("space")&& monkey.collide(ground)) {
    monkey.velocityY = -15;
  }
  
monkey.velocityY = monkey.velocityY + 0.8;
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.collide(ground);

  stroke(20);
  textSize(20);
  fill("black");
  text("Score: " + survivalTime,500,50);  
  
bananas();
obstacles();
drawSprites();
}

function bananas(){
 if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(150,200))
    banana.scale = 0.04;
    banana.velocityX = -3;
    banana.lifetime = 450
 }
  
    }

function obstacles(){
   if (frameCount % 300 === 0) {
    rock = createSprite(600,320,40,10);
    rock.addImage(obstacleImage)
    rock.velocityX = -3;
    rock.scale=0.15;
    rock.lifetime = 450
 }
}