var ob1,ob2;


function setup() {
  createCanvas(800,400);
  ob1=createSprite(200,200,80,80);
  ob1.shapeColor=255;

  ob2=createSprite(200,300,80,80);
  ob2.shapeColor=255;

}

function draw() {
  background(0);  
  ob2.y=mouseY;
  ob2.x=mouseX;

if(ob1.x-ob2.x<ob1.width/2+ob2.width/2&&
  ob2.x-ob1.x<ob2.width/2+ob1.width/2&&
  ob1.y-ob2.y<ob1.height/2+ob2.height/2&&
  ob2.y-ob1.y<ob2.height/2+ob1.height/2){
      ob1.shapeColor=color(random(255),random(255), random(255));
      ob2.shapeColor=color(random(255),random(255), random(255));
  }
else{
  ob1.shapeColor=255;
  ob2 .shapeColor=255;

}
  drawSprites();
}

