const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine
var a;
var circles=[];
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var Stand1
var hexagon
var slingShot
var score = 0
function setup() {
  createCanvas(1000,500);
  engine = Engine.create(); 
  world = engine.world;
  stroke(255)

  Stand1 = new Ground(400,280,180,10)

  //lv 1

  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  //lv 2
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  //top
  box9 = new Box(390,155,30,40);
  //hexagon
  hexagon = new Hexagon(200,170,50,50)
  slingShot = new Slingshot(hexagon.body,{x:200,y:170});
  ground = new Ground(500,495,1000,5)
}

function draw() {
Engine.update(engine)
background(0);  
box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
text("Score: "+score,750,40)
fill("skyblue")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
fill("pink")
box6.display();
box7.display();
box8.display();
fill("lightgreen")
box9.display();
fill("white")
Stand1.display();
hexagon.display();
slingShot.display();
ground.display();
keyPressed();

}
function mouseDragged()
{ 
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY}); 
} 
function mouseReleased()
{ 
  slingShot.fly(); 
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.hexagon)
  }
}