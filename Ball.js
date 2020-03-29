class Ball {
  constructor(x, y, width, height){
   (x,y,width,height);
    this.image = loadImage("Cicle.png");
  }
  display(){
  
    var pos =this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);

    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
   

  }
};
