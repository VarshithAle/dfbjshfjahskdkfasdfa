var runner

var laser1,laser2

var edges

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,
wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,
wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,wall53

var temp1, temp2, temp3, temp4

function setup() {
  createCanvas(800,400,200,200);
 runner = new Player(50,360,10,10)
 edges = createEdgeSprites();

 var laser1 = createSprite(100,100,200,5);
laser1.shapeColor="red";
laser1.velocityY=2;

var laser2 = createSprite(300,300,200,5);
laser2.shapeColor="red";
laser2.velocityY=2;

temp1 = createSprite(0,200,5,400)
temp2 = createSprite(800,200,5,400)
temp3 = createSprite(400,0,800,5)
temp4 = createSprite(400,400,800,5)

//runner.bounceOff(edges);




 //runner.shapeColor = "red"
wall1 = createSprite(5,360,10,70);
wall2 = createSprite(45,330,80,10);
wall3 = createSprite(45,390,70,10);
wall4 = createSprite(425,200,750,10);
wall5 = createSprite(120,330,70,10);
wall6 = createSprite(190,330,70,10);
wall7 = createSprite(220,330,10,70);
wall8 = createSprite(295,380,10,70);
wall9 = createSprite(255,300,70,10);
wall10 = createSprite(325,300,70,10);
wall11 = createSprite(395,300,70,10);
wall12 = createSprite(465,300,70,10);
wall13 = createSprite(445,380,10,70);
wall14 = createSprite(545,350,100,10);
wall15 = createSprite(500,320,10,70);
wall16 = createSprite(500,270,10,70);
wall17 = createSprite(670,350,200,10);
wall18 = createSprite(645,255,10,100);
wall19 = createSprite(755,310,100,10);
wall20 = createSprite(545,240,10,70);
wall21 = createSprite(90,255,10,100);
wall22 = createSprite(410,230,10,70);
wall23 = createSprite(330,230,10,70);
wall24 = createSprite(365,300,10,100);
wall25 = createSprite(215,250,100,10);
wall26 = createSprite(130,300,10,70);
wall26 = createSprite(190,200,70,10);

wall27 = createSprite(5,40,10,70);
wall28 = createSprite(45,70,80,10);
wall29 = createSprite(45,10,70,10);
wall30 = createSprite(425,200,750,10);
wall31 = createSprite(120,70,70,10);
wall32 = createSprite(190,70,70,10);
wall33 = createSprite(220,70,10,70);
wall34 = createSprite(295,20,10,70);
wall35 = createSprite(255,100,70,10);
wall36 = createSprite(325,100,70,10);
wall37 = createSprite(395,100,70,10);
wall38 = createSprite(465,100,70,10);
wall39 = createSprite(445,20,10,70);
wall40 = createSprite(545,50,100,10);
wall41 = createSprite(500,80,10,70);
wall42 = createSprite(500,30,10,70);
wall43 = createSprite(670,50,200,10);
wall44 = createSprite(645,145,10,100);
wall45 = createSprite(755,90,100,10);
wall46 = createSprite(545,160,10,70);
wall47 = createSprite(90,145,10,100);
wall48 = createSprite(410,170,10,70);
wall49 = createSprite(330,170,10,70);
wall50 = createSprite(365,100,10,100);
wall51 = createSprite(215,150,100,10);
wall52 = createSprite(130,100,10,70);
wall53 = createSprite(190,200,70,10);

}

function draw() {
  background("lightblue");
  text(mouseX+","+mouseY,mouseX,mouseY)



  runner.display();
  drawSprites();
}