class Polygon{
    constructor(x,y){
        var options={
            restitution:0.7,
            friction:0.5,
            density:0.5
        }
          this.body = Bodies.circle(x,y,40,options)
          World.add(world,this.body)
          this.r=40
         this.image=loadImage("polygon.png")
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    }
}