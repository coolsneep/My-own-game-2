class Player{
    constructor(x,y,width,height){
        this.width = width
        this.height = height
        var options = {
            frictionAir:0.05
        
       }
       this.body = Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.body)
    }
    display(){
        
      push()
      translate(this.body.position.x,this.body.position.y)
      rectMode(CENTER)
        fill("green")
        rect(0,0,this.width,this.height)
        pop()
    }
    }