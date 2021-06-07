var jerry, jerryAnimation;
var tom , tomAnimation;
var cat, catAnimation;
var garden , gardenImage;
var jerrystart
var catsleeping



function preload() {
    //load the images here

 jerryAnimation = loadAnimation("mouse2.png","mouse3.png");

 tomAnimation = loadAnimation("cat2.png","cat3.png");

 catAnimation = loadAnimation("cat4.png");

 mouseAnimation = loadAnimation("mouse4.png");

gardenImage = loadImage("garden.png");
jerrystart=loadAnimation("mouse1.png")
catsleeping=loadAnimation("cat1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  garden = createSprite(500,400,10,80);
  garden.scale = 1.2;
  garden.addImage(gardenImage)
   
  tom = createSprite(800,600,8,6);
  tom.addAnimation("T",catsleeping);
  tom.scale =0.2;
 

  jerry = createSprite(100,600,3,2);
  jerry.addAnimation("M",jerrystart);
  jerry.scale = 0.1;




}

function draw() {

    background(0,0,0);

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.addAnimation("lastcat",catAnimation);
        tom.changeAnimation("lastcat");
        tom.velocityX =0;
        jerry.addAnimation("lastimage",mouseAnimation);
        jerry.changeAnimation("lastimage");

      tom.x=300
        }


   
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();}

  function keyPressed(){
if(keyCode===LEFT_ARROW){
   tom.addAnimation("catrunning",tomAnimation)
   tom.changeAnimation("catrunning")

   jerry.addAnimation("jerrydancing",jerryAnimation)
   jerry.changeAnimation("jerrydancing")
   tom.velocityX =-3;
   jerry.frameDelay=5
}

}
