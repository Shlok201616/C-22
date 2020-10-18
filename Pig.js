class Pig{
    constructor(x,y){
    var this_options = {
        restitution:0.8
    }
    
    this.body = Bodies.rectangle(x,y,50,50,this_options);
    this.color="green";
    this.width = 50;
    this.height = 50;
    World.add(world,this.body);
    }
    display(){
        
        var angle = this.body.angle;
        fill(this.color);
        strokeWeight(3);
        stroke("navyblue")
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
    
    
    }