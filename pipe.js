function Pipe(){
   // this.top=random(height/2);
    //this.bottom=random(height/2);
    this.gap=int(random(20,height-120));
    this.x=width;
    this.speed=2;
    this.w=20;
    this.es=100;//empty space between pipes
    this.highlight=false;
    this.show=function(){
        fill(255);
        if(this.highlight){
            fill(255,0,0);
        }
        rect(this.x,0,this.w,this.gap);
        rect(this.x,this.gap+this.es,this.w,height-(this.gap+this.es));
    }
    this.hits=function(bird){
        if(bird.y<this.gap || bird.y>this.gap+this.es){
            if(bird.x>this.x && bird.x<this.x+this.w){
              this.highlight=true;  
              return true;
            }
        }
        return false;
    }
    this.update=function(){
        this.x-=this.speed;
    }
    this.offscreen=function(){
        if((this.x+this.w) <= 0)
            return true;
        else
            return false;    
    }
}