var caixa
var fundo

function setup() {
  createCanvas(800,800);
  caixa = createSprite(400,400,80,80);
  caixa.shapeColor = "white";
}

function draw() 
{
  background("black");
if(keyIsDown(RIGHT_ARROW)){
  background("yellow");
  caixa.shapeColor = "green";
}
if(keyIsDown(LEFT_ARROW)){
  background("blue");
  caixa.shapeColor = "red";
}
if(keyIsDown(UP_ARROW)){
  background("green");
  caixa.shapeColor = "yellow";
}
if(keyIsDown(DOWN_ARROW)){
  background("red");
  caixa.shapeColor = "blue";
}
  drawSprites();

}




