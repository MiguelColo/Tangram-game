// var sTriAcoord1={
//     x:0,
//     y:0
// }
// var sTriAcoord2={
//     x:240,
//     y:0
// }
// var sTriAcoord3={
//     x:120,
//     y:120
// }
// var canvas = document.getElementById("micanvas");
// var ctx = canvas.getContext("2d");
// for (var x=0; x<=1000; x=x+10){
//   ctx.moveTo(x,0);
//   ctx.lineTo(x,1000);
// }
// for (var y=0; y<=1000; y=y+10){
//   ctx.moveTo(0,y);
//   ctx.lineTo(1000,y);
// }
// ctx.strokeStyle = "#000000";
// ctx.stroke();




// function originPoints(x,y){
//     var x1=x
//     var x2=x1+200;
//     var x3=x1+100;
//     var y1=y;
//     var y2=y1;
//     var y3=y1+100;
//     var points= x1+","+y1+" "+x2+","+y2+" "+x3+","+y3
//     return points
// }
// striA.setAttribute('points', originPoints(0,0))

window.onload = function() {
var striA=document.getElementById('striA');
var striB=document.getElementById('strib');
var ltriA=document.getElementById('ltriA');
var ltriB=document.getElementById('ltriB');
var squ=document.getElementById('squ');
var rom=document.getElementById('rom');
var mtri=document.getElementById('mtri');
}


function drag(e) {
    var x = e.clientX;
    var y = e.clientY;
    switch(e){
    case striA:
        striA.setAttribute('transform',`translate(${x},${y})`);
        console.log("hola")
        break;
    case striB:
        striB.setAttribute('transform',`translate(${x},${y})`);
        break;
    case ltriA:    
        ltriA.setAttribute('transform',`translate(${x},${y})`);
        break;
    case ltriB:    
        ltriB.setAttribute('transform',`translate(${x},${y})`);
        break;
    case squ:    
        squ.setAttribute('transform',`translate(${x},${y})`);
        break;
    case rom:    
        rom.setAttribute('transform',`translate(${x},${y})`);
        break;
    case mtri:    
        mtri.setAttribute('transform',`translate(${x},${y})`);
        break;
    }
}
// drag()
// function grid(num){
//     for (var i=0;i<num;i++){
//     var element=document.createElement('line')   
//     }
//     return elements
// }
// grid()

function compare(){
    var xpiece=e.clientX
    var ypiece=e.clientY
    var xfinal=""
    var yfinal=""
    if (xpiece===xfinal && ypiece===yfinal){
    }
}
function start(){

}