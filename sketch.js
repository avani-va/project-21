var wall,thickness;
var bullet,speed,weight; 


 function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, weight, 50);
  bullet.shapeColor= "white";

  wall = createSprite(1500,200, thickness, height/2);
  wall.shapeColor= "grey";
  
  

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background(0); 
  
  bullet.velocityX = speed; 

 if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
  
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
 
   if(damage > 10){
      wall.shapeColor = "red";
    }

   if(damage < 10){
      wall.shapeColor = "green";
    }

  }
  drawSprites();
}

function hasCollided(Lbullet , Lwall){
  bulletRightEdge = Lbullet.x + Lbullet.width;       
  wallLeftEdge = Lwall.x;
  
  if(bulletRightEdge > wallLeftEdge){
    return true;
  }
 else{
    return false;
  }
}
