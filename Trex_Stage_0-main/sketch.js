// declare all the variables
var trex ,trex_running;
var ground, groundImg;

function preload()
{
  // to load animation we use -> sprite = loadAnimation("file path");
  trex_running = loadAnimation("trex1.png" ,"trex3.png" , "trex4.png");
  groundImg = loadImage("ground2.png");
} 

function setup()
{
  createCanvas(600,300);
  
  //create a trex sprite
 trex = createSprite(50,150,10,40);

 // add animation sprite.addAnimation("label" , variable)
 trex.addAnimation("running" , trex_running);

 // resize the trex
 trex.scale = 0.5;

 ground = createSprite(50,180,10,40);
ground.addImage("ground", groundImg);
}

function draw()
{
  background("pink")
  
 drawSprites();
}
