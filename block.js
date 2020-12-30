class Block{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:0.1,
            density:0.1
        }
        this.body = Bodies.rectangle(x,y,30,40,options)
        World.add(world,this.body)
        this.w=30
        this.h=40
    }
    display(){
       
     if(this.body.speed>3){
      World.remove(world,this.body)
      this.visible-=5
     }
      push()
      tint(255,this.visible)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        pop()
    }
    score(){
   if(this.visiblity<0&&this.visiblity>-105){
       score++
   }
     
    }
}