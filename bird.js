function Bird(){
    this.y=height/2;
    this.x=width/4;
    this.grav=0.6;
    this.lift=-15;
    this.vel=0;
    this.show=function(){
        fill(255);
        ellipse(this.x,this.y,30,30);
    }
    this.update = function(){
        this.vel+=this.grav;
        this.vel*=0.9;
        this.y+=this.vel;
        if (this.y+15>height){
            this.y=height;
            this.vel=0;
        }
        else if(this.y-15<0){
            this.y+=0;
            this.vel=0;
        }
    }   
    this.moveUp=function(){
        this.vel+=this.lift;
    }
}