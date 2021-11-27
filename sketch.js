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

function preload(){
  
  // shooterImg = loadImage("assets/shooter_2.png")
  // shooter_shooting = loadImage("assets/shooter_3.png")
  // zombieImg = loadImage("assets/zombie.png")
  // bulletImg = loadImage("assets/bullet.png");
  // bgImg = loadImage("assets/bg.jpeg")

}

function setup() {
  engine = Engine.create(); 
  world = engine.world;

  
  createCanvas(400,400);

  ground = new Ground(200,height,400,20)
  
  player = new Player(20,365,10,15)
 
}

function draw() {
  background(0); 
  Engine.update(engine)

ground.display()
player.display()

if(ground.body.position.y - player.body.position.y <= 20){
  moved = false
}

if(ground.body.position.y - player.body.position.y <= 50){
 onGround = true;
}
else{
  onGround = false;
}
if(building != null){
building.display()
}

}


function keyPressed(){
  if(keyCode === 38 && onGround === true){
    console.log("in")
    // Matter.Body.setVelocity(player.body,{x:0,y:-10})
    player.body.position.y -= 10
  }
  if(keyCode ===37 && !moved){
    player.body.position.x -= 5
    player.body.position.y -= 1
    moved = true
  }
  if(keyCode ===39 && !moved){
    player.body.position.x += 5
    player.body.position.y -= 1
    moved = true
  }
  if(keyCode === 32){
    if(i=1,i++,i<x){
    building[i] = new Ground(player.body.position.x +20,player.body.position.y,40,40)
    
    }
  }

}
