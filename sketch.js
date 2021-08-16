var back,sunimg,sungroup,enemygroup,coin=0;
var plant,plantgroup,zombies,enemy,enemyimg;


function preload()
{
  back = loadImage("images/background122.jpg")
  sunimg = loadImage("images/sunused.png");
  plantimg=loadAnimation("images/plant1.png","images/plant2.png","images/plant3.png");
  enemyimg = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png")
}


function setup() {
  createCanvas(innerWidth,innerHeight);
sungroup = new Group();
plantgroup = new Group();
enemygroup = new Group();
}

function draw() {
  background(back); 
  Zombies();
  energy() 

  
  if(coin>=100)
  {
    createPlant();
  
  }

for(var i=0;i<plantgroup.length;i++)
{
  if(mouseIsOver(plantgroup[i])&&mouseDidMove())
  {
    plantgroup[i].x=mouseX;
    plantgroup[i].y=mouseY;
    //plantgroup[i].flag=false;
    break;
    //flag=false;
  }
}

  drawSprites();
  textSize(25)
  fill("brown")
  text("Energy "+coin,20,40)

  
}



function energy()
{
  if(frameCount%100===0)
{
  sun = createSprite(random(100,width/2),50)
  sun.addImage("sun",sunimg)
 sun.scale= 0.2;
 sun.velocityY = 1;
sun.lifetime = height;
sungroup.add(sun);
}

for(var i=0;i<sungroup.length;i++)
{
  if(mousePressedOver(sungroup[i]))
  {
    coin+=25;
    sungroup[i].destroy();
  }
}



}


function createPlant()
{
  plant = createSprite(40,120)
  plant.addAnimation("plant",plantimg)
  plant.scale= 2;
  coin=coin-100;
  //plant.flag=true;
  plantgroup.add(plant)
  
}
function Zombies()
{
    

  if(frameCount%100===0)
{
  enemy = createSprite(width-150,random(90,height-200))
  enemy.addAnimation("enemy",enemyimg);
  enemy.scale = 1;
  enemy.velocityX = -0.6;
  enemygroup.add(enemy)
  
}


}