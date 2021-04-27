var nobita, nobitaImg, sizuka, sizukaImg, doremon, doremonImg, dekisugi, dekisugiImg, giyaan, giyaanImg, sunio, sunioImg, gameOver;
var maze, wall, wall1, wall2, wall3, wall4, wall5, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40, wall41, wall42;
var score, highScore;

function preload() {
  nobitaImg = loadImage("images/Nobita.JPG");
  sizukaImg = loadImage("images/Shizuka.jpg");
  dekisugiImg = loadImage("images/Dekisugi.jpg");
  giyaanImg = loadImage("images/Giyaan.png");
  sunioImg = loadImage("images/Sunio .jpg");
  doremonImg = loadImage("images/Doremon .jpg");
  gameOver = loadImage("images/gameOver.jpg");

}
function setup() {
  database = firebase.database();
  createCanvas(windowWidth-100,windowHeight-100);
  score = 0;
  highScore = 0;
  wall1 = createSprite(80,4,10,150);
  wall1.shapeColor="white";
  wall2 = createSprite(5,110,260,10);
  wall2.shapeColor="white";
  wall3 = createSprite(130,70,10,80);
  wall3.shapeColor="white";
  wall4 = createSprite(180,5,10);
  wall4.shapeColor="white";
  wall5 = createSprite(150,180,210,10);
  wall5.shapeColor="white";
  wall6 = createSprite(50,240,10,120);
  wall6.shapeColor="white";
  wall7 = createSprite(10,350,460,10);
  wall7.shapeColor="white";
  wall8 = createSprite(110,280,10,100);
  wall8.shapeColor="white";
  wall9 =  createSprite(240,320,10,160);
  wall9.shapeColor="white";
  wall10 = createSprite(300,245,120,10);
  wall10.shapeColor="white";
  wall11 = createSprite(350,370,100,10);
  wall11.shapeColor="white";
  wall12 = createSprite(290,170,10,150);
  wall12.shapeColor="white";
  wall13 = createSprite(290,98,120,10);
  wall13.shapeColor="white";
  wall14 = createSprite(210,50,70,10);
  wall14.shapeColor="white";
  wall15 = createSprite(280,60,10,70);
  wall15.shapeColor="white";
  wall16 = createSprite(326,5,10,100);
  wall16.shapeColor="white";
  wall17 = createSprite(398,135,125,10);
  wall17.shapeColor="white";
  wall18 = createSprite(330,170,10,80);
  wall18.shapeColor="white";
  wall19 = createSprite(365,213,10,74);
  wall19.shapeColor="white";
  wall20 = createSprite(390,285,150,10);
  wall20.shapeColor="white";
  wall21 = createSprite(290,325,90,10);
  wall21.shapeColor="white";
  wall22 = createSprite(90,390,10,70);
  wall22.shapeColor="white";
  wall23 = createSprite(160,30,80,10);
  wall23.shapeColor="white";
  wall24 = createSprite(148,80,10,100);
  wall24.shapeColor="white";
  wall25 = createSprite(50,30,100,10);
  wall25.shapeColor="white";
  wall26 = createSprite(50,170,100,10);
  wall26.shapeColor="white";
  wall27 = createSprite(160,170,100,10);
  wall27.shapeColor="white";
  wall28 = createSprite(120,270,100,10);
  wall28.shapeColor="white";
  wall29 = createSprite(169,270,10,100);
  wall29.shapeColor="white";
  wall30 = createSprite(209,170,100,10);
  wall30.shapeColor="white";
  wall31 = createSprite(256,100,10,100);
  wall31.shapeColor="white";
  wall32 = createSprite(256,67,10,100);
  wall32.shapeColor="white";
  wall33 = createSprite(224,315,100,10);
  wall33.shapeColor="white";
  wall34 = createSprite(208,260,10,100);
  wall34.shapeColor="white";
  wall35 = createSprite(375,270,100,10);
  wall35.shapeColor="white";
  wall36 = createSprite(330,180,10,100);
  wall36.shapeColor="white";
  wall37 = createSprite(320,271,100,10);
  wall37.shapeColor="white";
  wall38 = createSprite(275,385,10,100);
  wall38.shapeColor="white";
  wall39 = createSprite(11,299,100,10);
  wall39.shapeColor="white";
  wall40 = createSprite(337,24,10,100);
  wall40.shapeColor="white";
  wall41 = createSprite(131,361,100,10);
  wall41.shapeColor="white";
  wall42 = createSprite(286,177,10,100);
  wall42.shapeColor="white";
  gameOver = createSprite(300,100);
  gameOver.scale = 0.5;
}
  
function draw() {
  background("pink");
  text("Score: "+ score, 500,50);
  text("High Score: "+ highScore, 350,50);

  if(highScore<score){
    highScore=score;
  }
   score = 0;

  sizuka.x = 125;
  sizuka.y = 130;
  sizuka.velocityX = 0;
  sizuka.velocityY = 0;

  giyaan.velocityX = -6;
  giyaan.velocityY = 4;

  sunio.velocityX = 2;
  sunio.velocityY = -5;

  dekisugi.velocityX = 5;
  dekisugi.velocityY = -3;

  doremon.velocityX = -4;
  doremon.velocityY = 2;

  nobita.x = 5;
  nobita.y = 2;
  nobita.velocityX = 0;
  nobita.velocityY = 0;

  if (keyDown("up")){
    nobita.y = nobita.y-3;
    }
     if (keyDown("down")){
      nobita.y = nobita.y+3;
    }
     if (keyDown("left")){
      nobita. x =nobita.x-3;
   }
     if (keyDown("right")){
      nobita.x = nobita.x+3;
    }

  drawSprites();
}