class log{
    constructor(x, y, height , angle){

        var options = {
            restitution : 0.2 ,
            friction : 0.7,
            density : 1,

        }
         this.body = Bodies.rectangle(x, y, 10, height , options);
         
         this.height = height;
        

         World.add(qwerty, this.body);

         Matter.Body.setAngle(this.body , angle);

     }

     display(){

         var angle = this.body.angle;
 
         push();
         
         translate(this.body.position.x , this.body.position.y);

         rotate(angle);
         
 
         rectMode(CENTER);
         strokeWeight(3);
         stroke(204, 102, 0);
         fill(255, 102, 0);
         rect(0 ,0 , 10, this.height);
         pop();
 
     }
     
 }