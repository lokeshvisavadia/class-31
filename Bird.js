class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage('sprites/smoke.png');
    this.treajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    console.log(this.treajectory);
    super.display();
    if(this.body.velocity.x>1 && this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y]
      this.treajectory.push(position);
    }
    
    
    for(var i = 0 ; i<this.treajectory.length;i++){
      image (this.smokeImage,this.treajectory[i][0],this.treajectory[i][1])
    }
  }
}
