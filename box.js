class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
      if(this.body.speed < 3){
       super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, this.body.width, this.body.height);
        pop();
      }
    }
  score(){
    if(this.visibility<0 && this.visiblity >- 1-5){
      score++
    }
  }
  };
  