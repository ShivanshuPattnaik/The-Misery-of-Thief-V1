// THE MISERY OF THIEF
// Made By Shivanshu Pattnaik
var form;
var gameState = 0;
var bg1, bg2, bg3;
var floor;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;
var door1, door2, door3, door4, door5;
var control1, control2, control3, control4, control5;
var thief;
var police1, police2, police3, police4, police5;
var policeImg;
var thiefImg;
var scoreBooster1, scoreBooster2, scoreBooster3, scoreBooster4, scoreBooster5;
var scoreBooster;
var score = 0;
var popup;
var sb;
var trap;
var trapImg;
var life1, life2, life3;
var lifeImg;
var lifeNo = 3;
var jewellery;
var jewelleryImg;

function preload() {
  bg = loadImage("img/bg.jpg");
  floor = loadImage("img/floor.png");
  thiefImg = loadImage("img/thief.png");
  policeImg = loadImage("img/police.png");
  scoreBoosterImg = loadImage("img/box.png");
  screen = loadImage("img/screenBg.jpg");
  trapImg = loadImage("img/trap.png");
  lifeImg = loadImage("img/life.png");
  jewelleryImg = loadImage("img/necklace.png");
}

function setup() {
  createCanvas(1280, 800);

  form = new Form();

  // WALLS
  // Side(Long) Walls
  wall1 = createSprite(10, 400, 15, 795);
  wall1.shapeColor = "black";

  wall2 = createSprite(1270, 400, 15, 795);
  wall2.shapeColor = "black";

  wall3 = createSprite(640, 10, 1250, 15);
  wall3.shapeColor = "black";
  
  wall4 = createSprite(640, 790, 1250, 15);
  wall4.shapeColor = "black";

  // Medium Size Walls
  wall5 = createSprite(640, 165, 15, 320);
  wall5.shapeColor = "black";

  wall6 = createSprite(640, 635, 15, 320);
  wall6.shapeColor = "black";

  // Other Walls
  wall7 = createSprite(1180, 600, 170, 15);
  wall7.shapeColor = "black";

  wall8 = createSprite(940, 590, 15, 400);
  wall8.shapeColor = "black";

  wall9 = createSprite(1180, 400, 170, 15);
  wall9.shapeColor = "black";

  wall10 = createSprite(1102, 300, 15, 200);
  wall10.shapeColor = "black";

  wall11 = createSprite(940, 365, 15, 400);
  wall11.shapeColor = "black";

  wall12 = createSprite(860, 173, 150, 15);
  wall12.shapeColor = "black";

  wall13 = createSprite(793, 300, 15, 250);
  wall13.shapeColor = "black";

  wall14 = createSprite(325, 650, 640, 15);
  wall14.shapeColor = "black";

  wall15 = createSprite(793, 680, 15, 220);
  wall15.shapeColor = "black";

  wall16 = createSprite(500, 318, 270, 15);
  wall16.shapeColor = "black";

  wall17 = createSprite(373, 400, 15, 150);
  wall17.shapeColor = "black";

  wall18 = createSprite(405, 170, 480, 15);
  wall18.shapeColor = "black";

  wall19 = createSprite(282, 467, 170, 15);
  wall19.shapeColor = "black";

  wall20 = createSprite(205, 395, 15, 155);
  wall20.shapeColor = "black";

  // DOORS
  door1 = createSprite(1021, 400, 145, 15);
  door1.shapeColor = "red";

  door2 = createSprite(940, 90, 15, 145);
  door2.shapeColor = "red";

  door3 = createSprite(640, 400, 15, 145);
  door3.shapeColor = "red";

  door4 = createSprite(90, 170, 145, 15);
  door4.shapeColor = "red";

  // CONTROL ROOMS
  control1 = createSprite(1170, 520, 50, 50);
  control1.shapeColor = "red";

  control2 = createSprite(1170, 100, 50, 50);
  control2.shapeColor = "red";

  control3 = createSprite(715, 720, 50, 50);
  control3.shapeColor = "red";

  control4 = createSprite(290, 410, 50, 50);
  control4.shapeColor = "red";

  // Characters
  thief = createSprite(1180, 690, 12, 30);
  thief.addImage(thiefImg);
  thief.scale = 0.27;
  thief.setCollider("circle", 0, 0, 200);

  police1 = createSprite(1190, 300, 12, 30);
  police1.addImage(policeImg);
  police1.scale = 0.17;
  police1.velocityY = -2;
  police1.setCollider("rectangle", 0, 0, 300, 800);

  police2 = createSprite(720, 300, 12, 30);
  police2.addImage(policeImg);
  police2.scale = 0.17;
  police2.velocityY = 4;
  police2.setCollider("rectangle", 0, 0, 300, 800);

  police3 = createSprite(200, 250, 12, 30);
  police3.addImage(policeImg);
  police3.scale = 0.14;
  police3.velocityX = 4;
  police3.setCollider("rectangle", 0, 0, 300, 800);

  scoreBooster1 = createSprite(-200, -100, 10, 10);
  scoreBooster1.addImage(scoreBoosterImg);
  scoreBooster1.scale = 0.1;

  scoreBooster2 = createSprite(-200, -100, 10, 10);
  scoreBooster2.addImage(scoreBoosterImg);
  scoreBooster2.scale = 0.1;

  scoreBooster3 = createSprite(-200, -100, 10, 10);
  scoreBooster3.addImage(scoreBoosterImg);
  scoreBooster3.scale = 0.1;

  scoreBooster4 = createSprite(-200, -100, 10, 10);
  scoreBooster4.addImage(scoreBoosterImg);
  scoreBooster4.scale = 0.1;

  scoreBooster5 = createSprite(-200, -100, 10, 10);
  scoreBooster5.addImage(scoreBoosterImg);
  scoreBooster5.scale = 0.1;

  trap = createSprite(-100, -100, 15, 15);

  life1 = createSprite(70, 720, 15, 15);
  life1.addImage(lifeImg);
  life1.scale = 0.08;

  life2 = createSprite(140, 720, 15, 15);
  life2.addImage(lifeImg);
  life2.scale = 0.08;

  life3 = createSprite(210, 720, 15, 15);
  life3.addImage(lifeImg);
  life3.scale = 0.08;

  jewellery = createSprite(550, 100, 15, 15);
  jewellery.addImage(jewelleryImg);
  jewellery.scale = 0.05;

  // police2.debug = true;
  // thief.debug = true;
  
}

function draw() {
  background(255,255,255);
  
  // GameState Work
  if(gameState === 0) {
    form.display();
  }
  else if(gameState === 1) {
    form.displayStory();

    textFont("Squada One");
    textSize(30);
    textAlign(CENTER);
    fill("white");
    text("In a dark night, a thief came with a hope to steal the queen's necklace,", 650, 300);
    text("made up of pure diamond, but it won't be easy to steal the jewellery,", 650, 400);
    text("there will be police everywhere.", 650, 500);
    textSize(50);
    text("STORY", 650, 200);

    form.instructions.mousePressed(() => {
      console.log("Instructions");
      form.instructions.hide();
      gameState = 2;
    });
  }
  else if(gameState === 2) {
    form.displayInstructions();

    textFont("Squada One");
    textSize(30);
    fill("white");
    text("1. Use ARROW KEYS to control the THIEF.", 300, 300)
    text("2. Collect SCORE BOOSTERS to increase your SCORE.", 300, 400)
    text("3. Sneak through POLICE & collect the NECKLACE.", 300, 500)
    text("4. Don't hit the TRAPS or else 1 of your LIFE will be subtracted.", 300, 600)
    textSize(50);
    text("INSTRUCTIONS", 500, 200);
  }
  else if(gameState === 3) {
    form.hide();

    background(floor);

    police1.bounceOff(wall3);
    police1.bounceOff(wall9);

    police2.bounceOff(wall3);
    police2.bounceOff(wall4);

    police3.bounceOff(wall5);
    police3.bounceOff(wall1);

    thief.bounceOff(wall1);
    thief.bounceOff(wall2);
    thief.bounceOff(wall3);
    thief.bounceOff(wall4);
    thief.bounceOff(wall5);
    thief.bounceOff(wall6);
    thief.bounceOff(wall7);
    thief.bounceOff(wall8);
    thief.bounceOff(wall9);
    thief.bounceOff(wall10);
    thief.bounceOff(wall11);
    thief.bounceOff(wall12);
    thief.bounceOff(wall13);
    thief.bounceOff(wall14);
    thief.bounceOff(wall15);
    thief.bounceOff(wall16);
    thief.bounceOff(wall17);
    thief.bounceOff(wall18);
    thief.bounceOff(wall19);
    thief.bounceOff(wall20);
    thief.bounceOff(door1);
    thief.bounceOff(door2);
    thief.bounceOff(door3);
    thief.bounceOff(door4);

    if(keyDown("UP_ARROW")) {
      thief.y -= 4;
    }
    if(keyDown("DOWN_ARROW")) {
      thief.y += 4;
    }
    if(keyDown("LEFT_ARROW")) {
      thief.x -= 4;
    }
    if(keyDown("RIGHT_ARROW")) {
      thief.x += 4;
    }

    if(thief.isTouching(control1)) {
      door1.destroy();
    }
    if(thief.isTouching(control2)) {
      door2.destroy();
    }
    if(thief.isTouching(control3)) {
      door3.destroy();
    }
    if(thief.isTouching(control4)) {
      door4.destroy();
    }

    if(frameCount % 60 === 0) {
      popup = Math.round(random(1,2));
      if(popup === 1) {
        trap.destroy();
        trap = createSprite(Math.round(random(680, 750)), Math.round(random(100, 500)), 15, 15);
        trap.addImage(trapImg);
        trap.scale = 0.1;
        trap.depth = police2.depth;
        police2.depth += 1;
      }
      else if(popup === 2) {
        sb = Math.round(random(1, 5));
        if(sb === 1) {
          scoreBooster1.destroy();
          scoreBooster1 = createSprite(Math.round(random(980, 1050)), Math.round(random(550, 700)), 15, 15);
          scoreBooster1.addImage(scoreBoosterImg);
          scoreBooster1.scale = 0.1;
        }
        else if(sb === 2) {
          scoreBooster2.destroy();
          scoreBooster2 = createSprite(Math.round(random(100, 400)), Math.round(random(550, 600)), 15, 15);
          scoreBooster2.addImage(scoreBoosterImg);
          scoreBooster2.scale = 0.1;
        }
        else if(sb === 3) {
          scoreBooster3.destroy();
          scoreBooster3 = createSprite(Math.round(random(1000, 1050)), Math.round(random(100, 300)), 15, 15);
          scoreBooster3.addImage(scoreBoosterImg);
          scoreBooster3.scale = 0.1;
        }
        else if(sb === 4) {
          scoreBooster4.destroy();
          scoreBooster4 = createSprite(Math.round(random(100, 400)), Math.round(random(225, 250)), 15, 15);
          scoreBooster4.addImage(scoreBoosterImg);
          scoreBooster4.scale = 0.1;
          scoreBooster4.depth = police3.depth;
          police3.depth += 1;
        }
        else if(sb === 5) {
          scoreBooster5.destroy();
          scoreBooster5 = createSprite(Math.round(random(100, 400)), Math.round(random(50, 100)), 15, 15);
          scoreBooster5.addImage(scoreBoosterImg);
          scoreBooster5.scale = 0.1;
        }
      }
    }

    if(trap.isTouching(thief)) {

    }

    if(police1.isTouching(thief)) {
      gameState = 4;
    }
    else if(police2.isTouching(thief)) {
      gameState = 4;
    }
    else if(police3.isTouching(thief)) {
      gameState = 4;
    }

    if(scoreBooster1.isTouching(thief)) {
      scoreBooster1.destroy();
      score += 100;
    }
    if(scoreBooster2.isTouching(thief)) {
      scoreBooster2.destroy();
      score += 300;
    }
    if(scoreBooster3.isTouching(thief)) {
      scoreBooster3.destroy();
      score += 200;
    }
    if(scoreBooster4.isTouching(thief)) {
      scoreBooster4.destroy();
      score += 400;
    }
    if(scoreBooster5.isTouching(thief)) {
      scoreBooster5.destroy();
      score += 500;
    }

    if(trap.isTouching(thief) && lifeNo === 3) {
      trap.destroy();
      life3.visible = false;
      lifeNo = 2;
      // thief.x = 1180;
      // thief.y = 690;
    }
    else if(trap.isTouching(thief) && lifeNo === 2) {
      trap.destroy();
      life2.visible = false;
      lifeNo = 1;
      // thief.x = 1180;
      // thief.y = 690;
    }
    else if(trap.isTouching(thief) && lifeNo === 1) {
      trap.destroy();
      life1.visible = false;
      lifeNo = 0;
      gameState = 5;
    }

    if(jewellery.isTouching(thief)) {
      gameState = 6;
    }

    // TEXTS
    textFont("Squada One");
    fill("black");

    textSize(25);
    text("Control Room #1", 1100, 450);
    text("Control Room #2", 1100, 50);
    textSize(20);
    text("Control Room #3", 655, 650);
    textSize(24);
    text("Control Room #4", 215, 350);

    textSize(30);
    text("JEWELLERY ROOM", 250, 100);

    textSize(40);
    text("H", 710, 340);
    text("A", 710, 370);
    text("L", 710, 400);
    text("L", 710, 430);

    textSize(40);
    text("E", 1022.5, 500);
    text("N", 1020, 530);
    text("T", 1020, 560);
    text("R", 1020, 590);
    text("A", 1020, 620);
    text("N", 1020, 650);
    text("C", 1020, 680);
    text("E", 1022.5, 710);

    textSize(70);
    fill("white");
    text("SCORE : " + score, 300, 740);

    textSize(70);
    fill("white");
    text("M", 810, 250);
    text("A", 820, 300);
    text("D", 820, 350);
    text("E", 820, 400);
    text("B", 820, 500);
    text("Y", 820, 550);
    text("S", 880, 350);
    text("H", 880, 400);
    text("I", 890, 450);
    text("V", 880, 500);
    text("A", 880, 550);
    text("N", 880, 600);
    text("S", 880, 650);
    text("H", 880, 700);
    text("U", 880, 750);
    
    drawSprites();
  }
  else if(gameState === 4) {
    background(bg);
    textFont("Pricedown");
    textSize(100);
    fill("white");
    text("BUSTED", 500, 420);
  }
  else if(gameState === 5) {
    background(bg);
    textFont("Pricedown");
    textSize(100);
    fill("white");
    text("WASTED", 480, 420);
  }
  else if(gameState === 6) {
    background(bg);
    textFont("Pricedown");
    textSize(100);
    fill("white");
    text("MISSION COMPLETE", 280, 420);
  }

}