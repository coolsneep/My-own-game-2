// class Ground{
// constructor(x,y,width,height){
//     this.width = width
//     this.height = height
//     var options = {
//        isStatic:true,
    
//    }
//    this.body = Bodies.rectangle(x,y,width,height,options)
//    World.add(world,this.body)
// }
// display(){
    
//   push()
//   translate(this.body.position.x,this.body.position.y)
  
//     fill("brown")
//     rect(0,0,this.width,this.height)
//     pop()
// }
// }


class Ground {
  constructor(x,y,width,height) {
    // var options = {
    //     isStatic: true
    // }
    // this.body = Bodies.rectangle(x,y,width,height,options);
    this.body = rect(x,y,width,height);
    this.width = width;
    this.height = height;
    
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("Red");
    rect(pos.x, pos.y, this.width, this.height);
  }
};