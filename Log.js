class Log{
    constructor(x,y,height,angle){
    var this_options = {
        'restitution':0.8,
        'friction':1

    }
    
    this.body = Bodies.rectangle(x,y,20,height,this_options);
    this.color="blue";
    this.width = 20;
    this.height = height;
    Body.setAngle(this.body,angle)
    World.add(world,this.body);
    }
    display(){
        
        var angle = this.body.angle;
        fill(this.color);
        strokeWeight(3);
        stroke("red")
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

    
    }