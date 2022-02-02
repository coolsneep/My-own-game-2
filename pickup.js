class pickUp{
    constructor(x,y,width,height,shapes){

    this.x = x
    this.y = y
    this.width = width;
    this.height = height; 
    this.shapes = shapes;
    =createSprite(this.x,this.y,this.width,this.height);
    }
    display(){
      push()
        rectMode(CENTER)
        this.middle.addImage("3",threeTall);
          pop()
      }
}
// "assets/threeTall.png"