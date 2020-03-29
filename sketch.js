const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var stand,ball,chain



function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

ball=new Ball(200,200,50,50);
stand=new P_Stand(200,300,150,20);

    chain=new Chain(stand.body,ball.body);

}

function draw(){
    background("white");
    Engine.update(engine);
   


    ball.display();
    stand.display();
  

    chain.display();
}
