class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            bodyB: pointB,
            stiffness: 0.5            
        }
        ///this.sling1 = loadImage('sprites/sling1.png');
       
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
    }
   
   show(){
     //   image(this.sling1,200,20);
        
     
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
           
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}