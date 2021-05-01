var bg,tom,t1,t2,t3,jerry,j1,j2,j3
function preload() {
bg=loadImage("garden.png")
t1=loadAnimation("cat1.png")
t2=loadAnimation("cat2.png","cat3.png")
t3=loadAnimation("cat4.png")
j1=loadAnimation("mouse1.png")
j2=loadAnimation("mouse2.png","mouse3.png")
j3=loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600)
tom.addAnimation("tom",t1)
tom.scale=0.2
jerry=createSprite(200,600)
jerry.addAnimation("jerry",j1)
jerry.scale=0.15
}

function draw() {
background(bg);
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
tom.velocityX=0
tom.addAnimation("t4",t3)
tom.scale=0.2
tom.x=300
tom.changeAnimation("t4")
jerry.addAnimation("j4",j3)
jerry.scale=0.15
jerry.changeAnimation("j4")
}

    drawSprites();
}


function keyPressed(){
if(keyCode==LEFT_ARROW){
tom.velocityX=-5
tom.addAnimation("running",t2)
tom.changeAnimation("running")
jerry.addAnimation("running1",j2)
jerry.changeAnimation("running1")
jerry.frameDelay=25
}

}
