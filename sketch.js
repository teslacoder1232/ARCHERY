var Bow, BowImage;
var Arrow, ArrowImage;
var scenary, scenaryImage;
var Red, RedImage;
var Blue, BlueImage;
var Green, GreenImage;
var Pink, PinkImage;
var Score = 0 ;

function preload() {

  BowImage = loadImage("BowImage.png");
  ArrowImage = loadImage("ArrowImage.png");
  scenaryImage = loadImage("scenaryImage.png");
  RedImage = loadImage("RedImage.png");
  BlueImage = loadImage("BlueImage.png");
  GreenImage = loadImage("GreenImage.png");
  PinkImage = loadImage("PinkImage.png");
}
function setup() {

  createCanvas(600, 600);

  scenary = createSprite(0, 0, 600, 600);
  scenary.addImage("scenary", scenaryImage);
  scenary.x = scenary.width / 2;
  scenary.velocityX = -3;
  scenary.scale = 3.0;
  
  
  Bow = createSprite(500, 300, 20, 20);
  Bow.addImage("Bow", BowImage);
  Bow.scale = 1; 
  
  RedB= new Group();
  PinkB= new Group();
  GreenB= new Group();
  BlueB= new Group();
  ArrowGroup = new Group();
}

function draw() {

  background(220);

scenary.VelocityX = -3;
  
   if (scenary.x < 0) {
    scenary.x = scenary.width / 2;
  }
  
  Bow.y = World.mouseY;

  if (keyDown("space")) {
  var newArrow = createArrow();
  newArrow.addImage("Arrow", ArrowImage);
  newArrow.y = Bow.y;
  }
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if(World.frameCount % 80 === 0) {
    if(select_balloon == 1) {
      Redballoon();
    } else if (select_balloon == 2){
      Greenballoon();
    }else if (select_balloon == 3){
      Blueballoon();
    } else {
      Pinkballoon();
      
    }
    
  }
if(RedB.isTouching(ArrowGroup)) {
  RedB.destroyEach();
  ArrowGroup.destroyEach();
   Score = Score+2;
}
  if(BlueB.isTouching(ArrowGroup)) {
  BlueB.destroyEach();
  ArrowGroup.destroyEach();
   Score = Score+4;
}
if(GreenB.isTouching(ArrowGroup)) {
  GreenB.destroyEach();
  ArrowGroup.destroyEach();
   Score = Score+1;
}
  if(PinkB.isTouching(ArrowGroup)) {
  PinkB.destroyEach();
  ArrowGroup.destroyEach();
   Score = Score+4;
}
  drawSprites();
  
  text("Score : "+ Score,540,30);
    textSize(20);

}

function Redballoon (){
  var Red = createSprite(0,Math.round(random(20,370)),10,10); 
  
  Red.addImage(RedImage);
  Red.velocityX = 6;
  Red.lifetime = 150;
  Red.scale = 0.1
  RedB.add(Red);
}

function Blueballoon (){
  var Blue = createSprite(0,Math.round(random(20,370)),10,10); 
  
  Blue.addImage(BlueImage);
  Blue.velocityX = 5;
  Blue.lifetime = 150;
  Blue.scale = 0.1 ;
  Blue.lifetime = 70 ;
  BlueB.add(Blue);
}

function Greenballoon (){
  var Green = createSprite(0,Math.round(random(20,370)),10,10); 
  
  Green.addImage(GreenImage);
  Green.velocityX = 8;
  Green.lifetime = 150;
  Green.scale = 0.1
  Green.lifetime = 70 ;
  GreenB.add(Green);
}


function Pinkballoon (){
  var Pink = createSprite(0,Math.round(random(20,370)),10,10); 
  
  Pink.addImage(PinkImage);
  Pink.velocityX = 7;
  Pink.lifetime = 150;
  Pink.scale = 1;
  Pink.lifetime = 60 ;
  PinkB.add(Pink);
}

function createArrow(){
  Arrow = createSprite(500, 300, 10, 10);
  Arrow.addImage(ArrowImage);
  Arrow.velocityX = -5;
  Arrow.scale = 0.3 ;
  Arrow.lifetime = 100 ;
  ArrowGroup.add(Arrow);
  return Arrow;
}

