class Player {
constructor( x, y, width, height) {
    
    this.body = createSprite(x, y, width, height)
this.x = x; 
this.y = y; 
this.width = width; 
this.height = height;
}

display(){
    this.body.shapeColor = "red"

   //this.object.shapeColor = ("black") 

if(keyWentDown("up")){

this.body.velocityY = -2;
}

if(keyWentDown("right")){
 
    this.body.velocityX = 2;
}

if(keyWentDown("down")){
    
    this.body.velocityY = 2;
}

if(keyWentDown("left")){

    this.body.velocityX = -2 

}
if(keyWentUp("up")|| keyWentUp("down")){

this.body.velocityY = 0

}
if(keyWentUp("right")|| keyWentUp("left")){

    this.body.velocityX = 0
    
   }
drawSprites();
}
}