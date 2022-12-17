let w=400
let h=400
let x=0
let  y=0
let lato=40
function setup(){
    createCanvas(w,h);
    //background(0, 255, 255);
}

function draw(){
   let r=random()
   if(r>0.5){
    line(x, y, x+lato, y+lato)
   }
   else
   {
    circle(x+lato/2, y+lato/2, lato/2);
   }
   x=x+lato;
}