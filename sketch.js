//Create variables here
var dog;
var dogI
var happydog;
var foodS;
var foodStock;
var database;


function preload()
{
  dogI=loadImage("images/dogimg.png");
  happydog=loadImage("images/dogimg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog=createSprite(200,200);
  dog.addImage(dogI)
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);

  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog);
}

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,250,200);
  textSize(14);
  text("Note: Press UP Arrow key to feed Drago Milk!",110,10,300,20);
}
 function readStock(data)
 {
   foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}





