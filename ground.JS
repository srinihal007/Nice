class Ground {
constructor(x,y,w,h) {
    var gravity = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,w,h,gravity);
    this.w = w
    this.h = h
    World.add(world,this.body);

}
display(){
    let pos = this.body.position
    push();
    rectMode(CENTER);
    fill("lightgreen");
    rect(pos.x,pos.y,this.w,this.h);
    pop();
}
}