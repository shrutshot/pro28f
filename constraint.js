class constraintt{
    constructor(bodyA,pnt){
        
        var options={
            bodyA: bodyA,
            pointB:pnt,
            stiffness:0.004,
            length:10
        }
        this.pointB=pnt;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);

        }

       fly(){
            this.rope.bodyA=null;
       }
       attach(){
            this.rope.bodyA=body;
        }

        display(){
            if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB= this.rope.pointB;

            
            
            line(pointA.x,pointA.y,pointB.x,pointB.y);
           
        }
    }
    
}