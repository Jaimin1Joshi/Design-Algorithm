var car, wall;

function setup() {
  createCanvas(800,400);
  car=createSprite(100, 200, 50, 20);
  car.velocityX= 5;
  wall =createSprite(600,200,20,80);
 // wall.setVelocity(0,0);
  car.shapeColor="red";
}

function draw() {
  background(255,255,255);  
 // car.x = mouseX;
  //car.y= mouseY;
 
/* if(BounceOfff(car,wall)){
 car.shapeColor="green";
 }
else{
car.shapeColor="red";
}
 
 */
if(BounceOfff(car,wall)){
 background("yellow");
}
 

else{
  car.shapeColor="red";
}
  drawSprites();
}
function Touching(Object1,Object2){
 if(Object1.x-Object2.x<(Object1.width + Object2.width)/2 && Object2.x-Object1.x<(Object1.width + Object2.width)/2 && Object1.y-Object2.y<(Object1.height+Object2.height)/2 && Object2.y-Object1.y<(Object1.height + Object2.height)/2){
  return true;
 
  }
   else{
   return false;
   }

}

function BounceOfff(Object1,Object2){
if(Object1.x-Object2.x<(Object1.width + Object2.width)/2 && Object2.x-Object1.x<(Object1.width + Object2.width)/2){
Object1.velocityX = (-1)* Object1.velocityX;
return true;
}
else{
  return false;
}
if(Object1.y-Object2.y<(Object1.height+Object2.height)/2 && Object2.y-Object1.y<(Object1.height + Object2.height)/2){
Object1.velocityY = (-1)* Object1.velocityY;

return true;
}

else {
return false;
}
}

function Collided(Object1,Object2){

  if(Object1.x-Object2.x<(Object1.width + Object2.width)/2 && Object2.x-Object1.x<(Object1.width + Object2.width)/2 && Object1.y-Object2.y<(Object1.height+Object2.height)/2 && Object2.y-Object1.y<(Object1.height + Object2.height)/2){
    Object1.setVelocity(0,0);
   return true;
    }
     else{
     return false;
     }

}

function Bounce(Object1,Object2){
  if(Object1.x-Object2.x<(Object1.width + Object2.width)/2 && Object2.x-Object1.x<(Object1.width + Object2.width)/2){
    temp = Object1.velocityX;
    Object1.velocityX = Object2.velocityX;
    Object2.velocityX = temp;
    return true;
    }
    else{
      return false;
    }
    if(Object1.y-Object2.y<(Object1.height+Object2.height)/2 && Object2.y-Object1.y<(Object1.height + Object2.height)/2){
    per = Object1.velocityY;
    Object1.velocityY = Object2.velocityY;
    Object2.velocityY= per;
    return true;
    }
    
    else {
    return false;
    }





}