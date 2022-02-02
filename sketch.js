var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint; 
const Body = Matter.Body;

var ground
var player

var bullet, bulletImg;
var onGround = true
var moved = false
var building
var x = 10
var healthbackground


var threeTall
var smallL
var zigzag
var block
var powerup
var powerupList = []


function preload(){
  
  // shooterImg = loadImage("assets/shooter_2.png")
  // shooter_shooting = loadImage("assets/shooter_3.png")
  // zombieImg = loadImage("assets/zombie.png")
  // bulletImg = loadImage("assets/bullet.png");
  // bgImg = loadImage("assets/bg.jpeg")
  healthbackground = loadImage("assets/healthbarbackground.png")

  // zigzag = loadImage()
  // smallL = loadImage()
  // block = loadImage()
  threeTall = loadImage("assets/threeTall.png")
}

function setup() {


  
  createCanvas(400,400);

  ground = createSprite(200,height,400,20);
  
  player = createSprite(300,365,10,15)
 
  powerup = new pickUp(200,300,40,70,threeTall,middle)

}

function draw() {
  background(0); 
if(!powerupList.includes(powerup)){
 powerup.display()
}

 if(ground.y - player.y <= 20){
 onGround = true;
}
else{
  onGround = false;
}
player.collide(ground)
player.velocity.y +=0.5


if (keyDown("A")){
  player.position.x  -= 5
  
}
if (keyDown("D")){
  player.position.x  += 5
}

fill("white")
image(healthbackground,-20,-50,250,200)
ellipse(40,40,40)
ellipse(85,40,40)
ellipse(130,40,40)
ellipse(175,40,40)
drawSprites();

if(player.collide(powerup.middle)){
  powerup = tint(255, 127)
  powerupList.push(powerup)
  
  
}
}


function keyPressed(){
  if(keyCode === 87 && onGround){
   //jump height
   player.velocity.y -= 10
  }
}





function stopMoving(){
    while(player.velocity.x != 0){
      player.velocity.x -= 1
    }
  }


