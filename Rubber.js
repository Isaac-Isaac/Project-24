class Rubber {
    constructor(x,y){
        var options = {
            'density': 1,
            'friction': 5,
            'restitution': 0.3
        };
        this.body = Bodies.circle(x, y,43, options);
            this.width = 85;
            this.height = 85;
            
            World.add(world, this.body);
            Matter.Bodies.circle(x,y,30,options);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(0);
        strokeWeight(0);
        ellipse(0,0,this.width,this.height);
        pop();
      }


}