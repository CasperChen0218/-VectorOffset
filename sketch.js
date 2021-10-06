let numX=10;
let numY=10;
let nbs=[];

function setup() {
  createCanvas(400, 400);
  background(500);
  nb=new ourBall(width/2,height/2,10);//把預定放到畫布中間
//for loop

  
for (let i=0;i<numX;i=i+1){
for (let j=0;j<numY;j=j+1){
    
    nbs.push(new ourBall 
             
          (i*width/numX+width/numX/2,
          j*height/numY+height/numY/2,
          20))
      
      
    
          //circle(i*width/numX+width/numX/2,
          //j*height/numY+height/numY/2,
          //20);
    
   
  }
   }
 
}

function draw() {
  
  background(0);
  //稱 list 裡面的每一個東西為v
  nbs.forEach(v=>{
    v.display();
    
    
    })
}


class ourBall{
  
  //建構類別需要的參數
  constructor(x,y,s){
    this.x=x;
    this.y=y;
    this.size=s;
    //速度
    this.dx=5;
    this.dy=-5;
    this.color=color(256, 256, 256);
    }
  //能力method()
    
  
    display(){
    
      this.checkmouse();
      //this.run();
      this.bounce();
      fill(this.color);
    
      push();
      translate(this.x,this.y)
      circle(0,0,this.size)
      //隨著單元變化 先找到單元跟滑鼠的 角度關係
      let v1 = createVector(-1,0,0)
      let v2 = createVector(mouseX-this.x,mouseY-this.y,0)
      let angle =v1.angleBetween(v2);
      
      rotate(angle);
      circle(20,0,5);
      pop();
    
  }
  run(){
    this.x=this.x+this.dx;
    this.y=this.y+this.dy;
  }
  bounce(){
    if (this.y-this.size<0)
    {this.dy=-1*this.dy;
    this.color=color(255, 0, 0);}//Upperside
    
    if (this.x+this.size>width)
    {this.dx=-1*this.dx;
    this.color=color(255, 0, 255);}//Right
    
    if (this.y+this.size>height)
    {this.dy=-1*this.dy;
    this.color=color(255, 255, 0);}//lower side
    
    if (this.x-this.size<0)
    {this.dx=-1*this.dx;
    this.color=color(255, 255, 255);}//Left
  }

  checkmouse(){
    //line(this.x,this.y,mouseX,mouseY);
    if (mouseX < this.x + this.size/2 && //&&= 且 的意思
        mouseX > this.x - this.size/2 &&
        mouseX < this.y + this.size/2 &&
        mouseX > this.y - this.size/2
      ){
      circle(this)
    }
        
  }
}
  
