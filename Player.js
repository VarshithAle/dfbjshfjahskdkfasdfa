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

if(keyDown("up")){

this.body.velocityY = -5;
}

if(keyDown("right")){
 
    this.body.velocityX = 5;
}

if(keyDown("down")){
    
    this.body.velocityY = 5;
}

if(keyDown("left")){

    this.body.velocityX = -5 

}
//if(keyWentUp("up")|| keyWentUp("down")){

//this.body.velocityY = 0

//}
//if(keyWentUp("right")|| keyWentUp("left")){

    //this.body.velocityX = 0
    
//}

laser1.bounceOff(temp3);
laser1.bounceOff(temp4);
laser2.bounceOff(temp3);
laser2.bounceOff(temp4);

   this.body.bounceOff(edges)
   this.body.bounceOff(wall1)
   this.body.bounceOff(wall2)
   this.body.bounceOff(wall3)
   this.body.bounceOff(wall4)
   this.body.bounceOff(wall5)
   this.body.bounceOff(wall6)
   this.body.bounceOff(wall7)
   this.body.bounceOff(wall8)
   this.body.bounceOff(wall9)
   this.body.bounceOff(wall10)
   this.body.bounceOff(wall11)
   this.body.bounceOff(wall12)
   this.body.bounceOff(wall13)
   this.body.bounceOff(wall14)
   this.body.bounceOff(wall15)
   this.body.bounceOff(wall16)
   this.body.bounceOff(wall17)
   this.body.bounceOff(wall18)
   this.body.bounceOff(wall19)
   this.body.bounceOff(wall20)
   this.body.bounceOff(wall21)
   this.body.bounceOff(wall22)
   this.body.bounceOff(wall23)
   this.body.bounceOff(wall24)
   this.body.bounceOff(wall25)
   this.body.bounceOff(wall26)
   this.body.bounceOff(wall27)
   this.body.bounceOff(wall28)
   this.body.bounceOff(wall29)
   this.body.bounceOff(wall30)
   this.body.bounceOff(wall31)
   this.body.bounceOff(wall32)
   this.body.bounceOff(wall33)
   this.body.bounceOff(wall35)
   this.body.bounceOff(wall36)
   this.body.bounceOff(wall37)
   this.body.bounceOff(wall38)
   this.body.bounceOff(wall39)
   this.body.bounceOff(wall40)
   this.body.bounceOff(wall41)
   this.body.bounceOff(wall42)
   this.body.bounceOff(wall43)
   this.body.bounceOff(wall44)
   this.body.bounceOff(wall45)
   this.body.bounceOff(wall46)
   this.body.bounceOff(wall47)
   this.body.bounceOff(wall48)
   this.body.bounceOff(wall49)
   this.body.bounceOff(wall50)
   this.body.bounceOff(wall51)
   this.body.bounceOff(wall52)
   this.body.bounceOff(wall53)
drawSprites();
}
}