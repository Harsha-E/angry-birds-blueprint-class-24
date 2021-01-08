const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var offf, qwerty;
var box1, box2 , box3, box4 , box5;
var Bird, pigg , pigg2, logg , logg2, logg3 , logg4;
var ground1;

function setup() {
  createCanvas(800,700);
  
  offf = Engine.create();
  
  qwerty = offf.world;

  pigg = new pig(570,645);

  pigg2 = new pig(570,505);

  box1 = new box(450,650, 60,  60);
  
  box2 = new box(700,650, 60,  60);

  box3 = new box(450, 560, 60,  60);
  
  box4 = new box(700, 560, 60,  60);
  
  box5 = new box(575, 480, 60,  60);
  
  Bird = new bird(220,200);

  logg = new log(575, 600 , 315 , PI / 2 );

  logg2 = new log(575, 500 , 315 , PI / 2 );

  logg3 = new log(485, 490 , 140 , PI / 4 );

  logg4 = new log(650, 490 , 140 , -PI / 4 );
  
  ground1 = new ground(375,670, 850, 65);

}

function draw() {
  background(0);
  
  Engine.update(offf);

  box1.display();
  
  box2.display();
  
  box3.display();
  
  box4.display();

  box5.display();
  
  Bird.display();
  
  pigg.display();

  pigg2.display();
  
  logg.display();
  
  logg2.display();

  logg3.display();
  
  logg4.display();
  
  ground1.display();
  
}
