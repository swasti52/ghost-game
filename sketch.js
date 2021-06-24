var ghost,door
var gameState="play"

function preload(){
  climberimg=loadImage("climber.png")
  doorimg=loadImage("door.png")
  towerimg=loadImage("tower.png")
  ghostimg2=loadImage("ghost-jumping.png")
   ghostimg=loadImage("ghost-standing.png")
}
function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300,20,20)
  tower.addImage("tower",towerimg)
  tower.velocityY=1
  tower.scale=0.98
  
  ghost=createSprite(200,60,20,20)
  ghost.addImage("ghost",ghostimg)
  ghost.scale=0.3
   
    
  
  
  
  
  
  
  
  
  doorgroup=new Group() ;
  climbergroup=new Group() ;
   invisiblegroup=new Group() ;
  
}

function draw(){
  background("black")
  if(gameState==="play"){
    
  
  if(tower.y>400){
    tower.y=30;
    
  }
  if(climbergroup.isTouching(ghost)){
    ghost.velocityY=0
  }
  if(keyDown("space")){
    ghost.velocityY =-5  
  }
  ghost.velocityY=ghost.velocityY+0.8
  spawndoors();
  if(keyDown("left")){
     ghost.x=ghost.x-5
  }
if(keyDown("right")){
    ghost.x=ghost.x+5
  }

if(invisiblegroup.isTouching(ghost)||ghost.y>600){
  gameState="end"
  ghost.destroy()
}
    

  drawSprites();
  }
  if(gameState==="end"){
    stroke("white")
    fill("red")
    textSize(30)
    text("Game over",230,250)
  }
}

function spawndoors(){
  if(frameCount%240===0){
    door=createSprite(200,0,20,20)
  door.addImage("door",doorimg)
  door.velocityY=1
  door.scale=0.98
    door.lifetime=700
    door.x=Math.round(random(120,400))
    doorgroup.add(door);
    
    
    
    climber=createSprite(200,60,20,20)
  climber.addImage("climber",climberimg)
  climber.velocityY=1
  climber.scale=0.98
    climber.lifetime=700
   climber.x=door.x
    climbergroup.add(climber);
     ghost.depth=door.depth
  ghost.depth=ghost.depth+1
    
    
 invisible=createSprite(200,70,20,20)
    invisible.visible=false
 invisible.velocityY=1
    invisible.lifetime=700
   invisible.x=climber.x
    invisiblegroup.add(invisible);
    invisible.width=climber.width
    invisible.height=2
  }
 
}




