class bird{
    constructor(x, y){
         this.body = Bodies.rectangle(x, y, 30, 45);
         
         World.add(qwerty, this.body);
         
     }
     display(){
         var angle = this.body.angle;
 
         push();
         
         translate(this.body.position.x , this.body.position.y);
         rotate(angle);
         
 
         rectMode(CENTER);
         strokeWeight(3);
         stroke(225);
         fill(230, 0, 92);
         rect(0 ,0 , 30, 45);
         pop();
 
     }
     
 }