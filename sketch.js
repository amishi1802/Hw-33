const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var division=[];
var count=0;
var particle;
var gameStates="PLAY";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }


   if(particle !== null){
   
     particle.display();

   if(particle.body.position.x<300){
    score=score+500;
     particle=null;
      if ( count>= 5)
       gameState ="end"; }
        else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) {
        score = score + 100;
         particle=null;
       if ( count>= 5)
       gameState ="end"; } 
      else if (particle.body.position.x < 900 && particle.body.position.x > 601 ) {
         score = score + 200;
          particle=null;
          if ( count>= 5)
           gameState ="end"; }
}
}

function mousePressed(){
  if (gameStates !== "end"){
    count ++;
    particle=new Particle(mouseX, 10,10,10);  
  }
}