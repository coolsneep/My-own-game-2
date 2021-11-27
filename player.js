class Player{
    constructor(x,y,width,height){
        this.width = width
        this.height = height
        var options = {
          // restitution: 1,
          // friction:0.5,
          density:1
        
       }
       this.body = Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.body)
    }
    display(){
        
      push()
      translate(this.body.position.x,this.body.position.y)
      
        fill("green")
        rect(0,0,this.width,this.height)
        pop()
    }
    }