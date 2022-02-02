var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint; 
const Body = Matter.Body;
counter = 1
var ground
var player
var bullet, bulletImg;
var onGround = true
var moved = false
var building
var x = 10
var healthbackground
var building

var threeTall
var smallL
var zigzag
var block
var powerup
var powerupList = []
var building2 = null
var placerGroup

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
  building = createSprite(100,300,50,100)
  building.setCollider("rectangle", -25,-5, 20, 55);
  building.debug = true
  building.addImage(threeTall)
  var placerGroup = Group()
  
}

function draw() {
  background(0); 
if(powerupList.includes(building)){
 building.destroy()
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



if(player.overlap(building)){ 
  powerupList.push(building)
}
if(counter==0){
  player.collide(building2)
  ground.collide(building2)
  console.log(building2.position.y)
  if(building2.position.y - player.y <= 70){
    onGround = true;
   }
  else{
     onGround = false;
   }
}
if(counter == 1){
if (building2 != null){ 
building2.position.x = player.position.x-30

}
}
}


function keyPressed(){
  if(keyCode === 87 && onGround){
   //jump height
   player.velocity.y -= 10
  }
  if(keyCode === 49){
    

    building2 = createSprite(player.position.x-30,player.position.y-15,powerupList[0].width,powerupList[0].height)
    building2.setCollider("rectangle", -25,-5, 20, 55);
    building2.addImage(threeTall)
    
  }
  if (building2 != null){ 
  if(powerupList.length>0){
  if(keyCode === 32){
    counter = 0
    powerupList.remove(powerup[0])
  }
  }
}
}






function stopMoving(){
    while(player.velocity.x != 0){
      player.velocity.x -= 1
    }
  }


