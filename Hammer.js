class Hammer {
    constructor(x,y){
        var options = {
	    'density': 2,
	    'friction': 1.0,
	    'restitution': 0.5
    }
    this.body = Bodies.rectangle(x, y, 100,60, options);
      this.width = 100;
      this.height = 60;

      World.add(world, this.body);
  }
  display(){
    this.body.position.x = mouseX;
      this.body.position.y = mouseY;  
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(225,105,0);
      stroke(255,255,255);
      strokeWeight(5)
      rect(0, 0, this.width, this.height);
      pop();
  }
}
