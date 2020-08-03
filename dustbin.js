class Dustbin{

    constructor(x,y,width,height){


        this.bin1=Bodies.rectangle(550,475,200,20,{isStatic:true})   
        this.bin2=Bodies.rectangle(560,415,20,100,{isStatic:true})  
        this.bin3=Bodies.rectangle(740,415,20,100,{isStatic:true}) 
        World.add(world,this.bin1)
        World.add(world,this.bin2)
        World.add(world,this.bin3)
        this.bin4=Bodies.rectangle(560,360,180,125);
        this.image= loadImage("sprites/dustbingreen.png");

       
        
    }

    display(){
       // rectMode(CENTER);
        //noStroke();
        fill("white");
        image(this.image,this.bin4.position.x,this.bin4.position.y,180,125);
        rect(this.bin2.position.x,this.bin2.position.y,20,100)
        rect(this.bin3.position.x,this.bin3.position.y,20,100)
        
    }
}