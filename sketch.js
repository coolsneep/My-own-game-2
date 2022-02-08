var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint; 
const Body = Matter.Body;
counter = 1
counter2 = 1
var ground
var player
var bullet, bulletImg;
var onGround = true
var moved = false
var building
var x = 10
var healthbackground
var building
var index = 0
var threeTall
var smallL
var zigzag
var block
var powerup
var powerupList = []
var building2 = null
var placerGroup
var threeTallb,twoTall
var buildingMade = 0
var Pos1 = 50
var Pos2=85
var Pos3=130
var Pos4=175
var club
var club2=null
var clubMade = 0
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
  twoTall = loadImage("assets/twotall.png")
  threeTallb = loadImage("assets/threeTall.png")
  threeTall = loadImage("assets/threeTallB.png")
}

function setup() {


  
  createCanvas(windowWidth,windowHeight);

  ground = createSprite(width/2,height-30,width,20);
  
  player = createSprite(300,height-50,20,30)
  
  building = createSprite(width/2,height-100,50,100)
  building.setCollider("rectangle", -25,-5, 20, 55);
  building.addImage(threeTallb)
  building.scale = .4
  
  club = createSprite(width/4, height-100,50,100)
  club.setCollider("rectangle",-25,-5,20,55)
  club.addImage(threeTallb)
  club.scale = .4
  
}

function draw() {
  
  background(0); 
  // console.log("Pos"+index)
 
if(powerupList.includes(building)){
 
 building.position.x = eval("Pos"+(powerupList.indexOf(building)+1))
 
 building.position.y = 40

}
if (powerupList.includes(club)){
  
  club.position.x = eval("Pos"+(powerupList.indexOf(club)+1))
  
  club.position.y = 40
}
 if(ground.y - player.y <= 60){
  
 onGround = true;
}
else{
  onGround = false;
}
player.collide(ground)

player.velocity.y +=3


if (keyDown("A")){
  player.position.x  -= 10
  
}
if (keyDown("D")){
  player.position.x  += 10
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
  
  buildingMade =1
}
if(counter==0){
  player.collide(building2)
  ground.collide(building2)
  
  if(player.isTouching(building2)){
    
    onGround = true;
   }
 
}
if(counter == 1){
if (building2 != null){ 
building2.position.x = player.position.x-30
}
}
//second building
if(player.overlap(club)){
  
  powerupList.push(club)
  
  clubMade = 1
}
if(counter2==0){
  
  
  if(player.isTouching(club2)){
    
    onGround = true;
   }
  player.collide(club2)
  ground.collide(club2)
  
}
if(counter2 == 1){
if (club2 != null){ 
club2.position.x = player.position.x-140
}
}
}


function keyPressed(){
  
  if(keyCode === 87 && onGround){
    
   //jump height
   player.velocity.y -= 40
   
  }
  if(keyCode === 49 && onGround == true){
    //press 1
    
    if(buildingMade == 1){
      buildingMade = 0
      building2 = createSprite(player.position.x-30,player.position.y-40,powerupList[0].width,powerupList[0].height)
      building2.setCollider("rectangle", -85,-140, 130, 350)
      
      building2.addImage(threeTall)
      
      
    }
    if(clubMade == 1){
      clubMade = 0
      
      
      club2 = createSprite(player.position.x-140,player.position.y-70,powerupList[0].width,powerupList[0].height)
      club2.setCollider("rectangle", 15,-15, 115, 170);
      club2.debug = true
      
      club2.addImage(twoTall)
      club2.scale = 1.2
      
    }

  }
  //building
  if (building2 != null && powerupList[0]==building){ 
    if(powerupList.length>0){
    //press spacebar
      if(keyCode === 32){
        counter = 0
        powerupList[0].destroy()
        
        powerupList.pop(powerupList[0])
        
        
      }
    }
  }
  //club
  if (club2 != null && powerupList[0]== club){ 
    if(powerupList.length>0){
    //press spacebar
      if(keyCode === 32){ 
        counter2 = 0
        powerupList[0].destroy()
        powerupList.pop(powerupList[0])
        
      }
    }
  }
}








