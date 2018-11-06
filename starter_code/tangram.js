
window.onload = function() {
var striA=document.getElementById('striA');
// var striB=document.getElementById('strib');
var striB=document.querySelector('striB')
var ltriA=document.getElementById('ltriA');
var ltriB=document.getElementById('ltriB');
var squ=document.getElementById('squ');
var rom=document.getElementById('rom');
var mtri=document.getElementById('mtri');
var eleId=""
var xOrigin = 0;
var yOrigin = 0;
var button=document.getElementsByClassName('btn');
var x0;
var y0;
var x0striA=400;
var y0striA=200;
var x0striB=700;
var y0striB=300;
var x0ltriA=400;
var y0ltriA=200;
var x0ltriB=400;
var y0ltriB=600;
var x0squ=600;
var y0squ=200;
var x0rom=700;
var y0rom=300;
var x0mtri=600;
var y0mtri=200;

}


function drag(e) {
    if(e.path[0].tagName == "polygon"){
        eleId=(e.path[0].id)
        xOrigin = e.toElement.attributes[1].ownerElement.points[0].x;
        yOrigin = e.toElement.attributes[1].ownerElement.points[0].y;
    }else{
        x0 = e.clientX;
        y0 = e.clientY;
    var x = e.clientX-xOrigin;
    var y = e.clientY-yOrigin;
    
    switch(eleId){
    case "striA":
        striA.setAttribute('transform',`translate(${x},${y})`);
        break;
    case "striB":
        striB.setAttribute('transform',`translate(${x},${y})`);
        break;
    case "ltriA":    
        ltriA.setAttribute('transform',`translate(${x},${y})`);
        break;
    case "ltriB":    
        ltriB.setAttribute('transform',`translate(${x},${y})`);
        break;
    case "squ":    
        squ.setAttribute('transform',`translate(${x},${y})`);
        break;
    case "rom":    
        rom.setAttribute('transform',`translate(${x},${y})`);
        break;
    case "mtri":    
        mtri.setAttribute('transform',`translate(${x},${y})`);
        break;
        
    }
    approach(e)
}
}




function rotation(e) {
    // // if(e.path[0].tagName == "polygon"){
    // //     eleId=(e.path[0].id)
    //     xOrigin = e.toElement.attributes[1].ownerElement.points[0].x;
    //     yOrigin = e.toElement.attributes[1].ownerElement.points[0].y;
    // // // // }else{
    // var x = e.clientX;
    // var y = e.clientY;
    var ang = 45;
    // var n=e.clientX.toString() + e.clientY.toString()
    // console.log(n)
    switch(eleId){
        case "striA":
        var transStriA =  striA.getAttribute('transform');
        
        console.log(striA.getAttribute('transform').split(" ")[0].replace(/[^0-9,]/g, "").split(","));
        // var cal =[ x0 - 0*Math.sin(ang), y0 - 0*Math.cos(ang)]

        striA.setAttribute('transform',`${transStriA} rotate(${ang})`);
        // striA.setAttribute('transform',`${transStriA} rotate(${ang})`);
        break;
        case "striB":
        striB.style.WebkitTransformOrigin="100px 300px"
        striB.style.transform=`rotate(${ang}deg)`
        // console.log(striB.getAttribute('transform').split(" ")[0].replace(/[^0-9,]/g, "").split(","));
        striB.setAttribute('transform',`${transStriB} rotate(${ang})`);
        break;
        case "ltriA": 
        var  transLtriA = ltriA.getAttribute('transform');
        console.log(ltriA.getAttribute('transform').split(" ")[0].replace(/[^0-9,]/g, "").split(","));
        ltriA.setAttribute('transform',`${transLtriA} rotate(${ang})`);
        break;
        case "ltriB":
        var  transLtriB = ltriB.getAttribute('transform');
        console.log(ltriB.getAttribute('transform').split(" ")[0].replace(/[^0-9,]/g, "").split(","));   
        ltriB.setAttribute('transform',`${transLtriB} rotate(${ang})`);
        break;
        case "squ": 
       
        var  transSqu = squ.getAttribute('transform');
        console.log(squ.getAttribute('transform').split(" ")[0].replace(/[^0-9,]/g, "").split(","));
        squ.setAttribute('transform',`${transSqu} rotate(${ang})`);
        break;
        case "rom":
        var  transRom = rom.getAttribute('transform');
        console.log(rom.getAttribute('transform').split(" ")[0].replace(/[^0-9,]/g, "").split(","));   
        rom.setAttribute('transform',`${transRom} rotate(${ang})`);
        break;
        case "mtri":
        var  transMtri = mtri.getAttribute('transform')
        var coords=mtri.getAttribute('transform').split(" ")[0].replace(/[^0-9,]/g, "").split(","); 
        // var cal =[ x0 - 200*Math.cos(ang), y0 - 200*Math.sin(ang)]
        console.log(cal);

        // var newcoords=coords.map(function(e){
        //     var newcoordx=e.newcoords[0]+57
        //     var newcoordy=e.newcoords[1]-143
            
        //     return newcoords
        // }) 
        console.log(mtri.getAttribute('transform').split(" ")[0].replace(/[^0-9,]/g, "").split(","));

        mtri.setAttribute('transform',`translate(${transMtri} rotate(${ang})`);
        break;
        
    }
}








function approach(e){
    x0=e.clientX;
    y0=e.clientY;
    var x0striA=400;
    var y0striA=100;
    var x0striB=700;
    var y0striB=200;
    var x0ltriA=400;
    var y0ltriA=100;
    var x0ltriB=400;
    var y0ltriB=500;
    var x0squ=600;
    var y0squ=100;
    var x0rom=700;
    var y0rom=200;
    var x0mtri=600;
    var y0mtri=100;
    
    switch(eleId){

    case "striA":
        if (380<x0 && x0<420 && 80<y0&& y0<120){
        striA.setAttribute('transform',`translate(${x0striA-xOrigin},${y0striA-yOrigin})`);
    }
        break;
    case "striB":
        if (680<x0 && x0<720 && 180<y0 && y0<220){
        striB.setAttribute('transform',`translate(${x0striB-xOrigin},${y0striB-yOrigin})`);
    }
        break;
    case "ltriA": 
        if (380<x0 && x0<420 && 80<y0 && y0<120){ 
        ltriA.setAttribute('transform',`translate(${x0ltriA-xOrigin},${y0ltriA-yOrigin})`);
    }
        break;
    case "ltriB":
        if (380<x0 && x0<420 && 480<y0 && y0<520){    
        ltriB.setAttribute('transform',`translate(${x0ltriB-xOrigin},${y0ltriB-yOrigin})`);
        var 
        }
        break;
    case "squ":
        if (580<x0 && x0<620 && 80<y0 && y0<120){    
        squ.setAttribute('transform',`translate(${x0squ-xOrigin},${y0squ-yOrigin})`);
        var confsqu=true
        }

        break;
    case "rom": 
        if (680<x0 && x0<720 && 180<y0 && y0<220){
        rom.setAttribute('transform',`translate(${x0rom-xOrigin},${y0rom-yOrigin})`);
        var confrom=true
    }
        break;
    case "mtri":
        if (580<x0 && x0<620 && 80<y0 && y0<120){
        mtri.setAttribute('transform',`translate(${x0mtri-xOrigin},${y0mtri-yOrigin})`);
        }
        break;
    }  
   if()
}
