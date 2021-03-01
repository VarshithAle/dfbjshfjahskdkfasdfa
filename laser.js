class Laser {
    constructor( x, y, width, height) {
        
        this.laser = createSprite(x, y, width, height)
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.height = height;
    }
    
    display(){
        this.laser.shapeColor = "red"

        this.laser.bounceOff(edges)

    }
}
