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

  ground = new Ground(0,370,400,40)
  
  player = new Player(20,360,10,15)
 
}

function draw() {
  background(0); 
  Engine.update(engine)

ground.display()
player.display()

if(ground.body.position.y - player.body.position.y <= 50){
 onGround = true;
}
else{
  onGround = false;
}


}


function keyPressed(){
  if(keyCode === 38 && onGround === true){
    console.log("in")
    // Matter.Body.setVelocity(player.body,{x:0,y:-10})
    player.body.position.y -= 10
  }
  if(keyCode ===37 ){
    player.body.position.x -= 10
    player.body.position.y -= 2
  }
  if(keyCode ===39 ){
    player.body.position.x += 10
    player.body.position.y -= 2
  }
}
