var runner

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall4,wall15,wall16,wall17,wall18,wall19,
wall20,wall21,wall22,wall23,wall24,wall25;

function setup() {
  createCanvas(800,400,200,200);
 runner = new Player(50,360,10,10)
 createEdgeSprites()
 
 //runner.shapeColor = "red"
wall1 = createSprite(10,360,10,70);
wall2 = createSprite(50,330,70,10);
wall3 = createSprite(50,390,70,10);
wall4 = createSprite(120,200,70,10);
wall5 = createSprite(190,200,70,10);
wall6 = createSprite(260,200,70,10);
wall7 = createSprite(330,200,70,10);
wall8 = createSprite(400,200,70,10);
wall9 = createSprite(470,200,70,10);
wall10 = createSprite(540,200,70,10);
wall11 = createSprite(610,200,70,10);
wall12 = createSprite(680,200,70,10);
wall13 = createSprite(760,200,90,10);
wall14 = createSprite(120,330,70,10);
wall15 = createSprite(190,330,70,10);
wall16 = createSprite(220,330,10,70);
wall17 = createSprite(295,380,10,70);
wall18 = createSprite(255,300,70,10);
wall19 = createSprite(325,300,70,10);
wall20 = createSprite(395,300,70,10);
wall21 = createSprite(465,300,70,10);
wall22 = createSprite(365,330,10,70);
wall23 = createSprite(445,380,10,70);
wall24 = createSprite(545,345,100,10);
wall25 = createSprite(695,345,205,10)

}

function draw() {
  background("lightblue");
  text(mouseX+","+mouseY,mouseX,mouseY)

runner.collide(wall1)
//runner.collide(wall2)
//runner.collide(wall3)
//runner.collide(wall4)
//runner.collide(wall5)


  runner.display();
  drawSprites();
}