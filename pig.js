class pig{
    constructor(x, y){

        var options = {
            restitution : 0.8 ,
            friction : 0.3,
            density : 1,

        }

         this.body = Bodies.rectangle(x, y, 45, 45 , options);
         
         World.add(qwerty, this.body);
         
     }
     display(){
         var angle = this.body.angle;
 
         push();
         
         translate(this.body.position.x , this.body.position.y);
         rotate(angle);
         
 
         rectMode(CENTER);
         strokeWeight(4);
         stroke(0, 102, 0);
         fill(0, 204, 0);
         rect(0 ,0 , 45, 45);
         pop();
 
     }
     
 }