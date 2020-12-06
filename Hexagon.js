class Hexagon{
  constructor(x, y, width,height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.image=loadImage("polygon.png")
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      this.width = width;
      this.height = height
      World.add(world,this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      image(this.image,0,0,this.width,this.height)
      pop();
    }
}