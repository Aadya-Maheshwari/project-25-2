class Paper{
    constructor(x,y,r){
     var object={
        isStatic=false,
        restitution=0.3,
        friction=0,
        density=1.2
     }
     this.body=Bodies.circle(x,y,r,object);
     this.x=x;
     this.y=y;
     this.r=r;
     this.image=loadImage("paper.png");

     World.add(world,this.body);
      }
}
        
     
