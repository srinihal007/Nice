class Ball {
    constructor(x,y,r) {
        var bouncy = {
            restitution: 1
        }
        this.body = Bodies.circle(x,y,r,bouncy);
        this.r = r
        World.add(world,this.body);
    
    }
    display(){
        let pos = this.body.position
        push();
        ellipseMode(RADIUS);
        fill("Pink");
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
    }