var win = {
    striA:false,
    striB:false,
    ltriA:false,
    ltriB:false,
    squ:false,
    rom:false,
    mtri:false
}
function approach(e){
    x0=e.clientX;
    y0=e.clientY;
    var x0striA1=400;
    var y0striA1=100;
    var x0striB1=700;
    var y0striB1=200;
    var x0ltriA1=400;
    var y0ltriA1=100;
    var x0ltriB1=400;
    var y0ltriB1=500;
    var x0squ1=600;
    var y0squ1=100;
    var x0rom1=700;
    var y0rom1=200;
    var x0mtri1=600;
    var y0mtri1=100;
    var x0striA2=400;
    var y0striA2=100;
    var x0striB2=400;
    var y0striB2=300;
    var x0ltriA2=400;
    var y0ltriA2=700;
    var x0ltriB2=218;
    var y0ltriB2=682;
    var x0squ2=300;
    var y0squ2=200;
    var x0rom2=400;
    var y0rom2=100;
    var x0mtri2=218;
    var y0mtri2=400;
   
    
    switch(eleId){

    case "striA":
        if (380<x0 && x0<420 && 80<y0&& y0<120){
        striA.setAttribute('transform',`translate(${x0striA1-xOrigin},${y0striA1-yOrigin})`);
        win.striA=true
    }else{
        win.striA=false
    }
        break;
    case "striB":
        if (680<x0 && x0<720 && 180<y0 && y0<220){
        striB.setAttribute('transform',`translate(${x0striB1-xOrigin},${y0striB1-yOrigin})`);
        win.striB=true
    }else{
        win.striB=false
    }
        break;
    case "ltriA": 
        if (380<x0 && x0<420 && 80<y0 && y0<120){ 
        ltriA.setAttribute('transform',`translate(${x0ltriA1-xOrigin},${y0ltriA1-yOrigin})`);
        win.ltriA=true
        }else{
            win.ltriA=false
        }
        break;
    case "ltriB":
        if (380<x0 && x0<420 && 480<y0 && y0<520){    
        ltriB.setAttribute('transform',`translate(${x0ltriB1-xOrigin},${y0ltriB1-yOrigin})`);
        win.ltriB=true
        }else{
        win.ltriB=false
        }
        break;
    case "squ":
        if (580<x0 && x0<620 && 80<y0 && y0<120){    
        squ.setAttribute('transform',`translate(${x0squ1-xOrigin},${y0squ1-yOrigin})`);
        win.squ=true
        }else{
        win.squ=false
        }

        break;
    case "rom": 
        if (680<x0 && x0<720 && 180<y0 && y0<220){
        rom.setAttribute('transform',`translate(${x0rom1-xOrigin},${y0rom1-yOrigin})`);
        win.rom=true
    }else{
        win.rom=false
    }
        break;
    case "mtri":
        if (580<x0 && x0<620 && 80<y0 && y0<120){
        mtri.setAttribute('transform',`translate(${x0mtri1-xOrigin},${y0mtri1-yOrigin})`);
        win.mtri=true
    }else{
        win.mtri=false
    }
        break;
    }  
    
        if (win.striA===true && win.striB===true && win.ltriA===true && win.ltriB===true && win.squ===true && win.rom===true & win.mtri===true){
            alert("You win!")
        }
    }
    // switch(eleId){

    //     case "striA":
    //         if (680<x0 && x0<720 && 180<y0&& y0<220){
    //         striA.setAttribute('transform',`translate(${x0striA2-xOrigin},${y0striA2-yOrigin})`);
    //         win.striA=true
    //     }else{
    //         win.striA=false
    //     }
    //         break;
    //     case "striB":
    //         if (680<x0 && x0<720 && 380<y0 && y0<420){
    //         striB.setAttribute('transform',`translate(${x0striB2-xOrigin},${y0striB2-yOrigin})`);
    //         win.striB=true
    //     }else{
    //         win.striB=false
    //     }
    //         break;
    //     case "ltriA": 
    //         if (680<x0 && x0<720 && 380<y0 && y0<420){ 
    //         ltriA.setAttribute('transform',`translate(${x0ltriA2-xOrigin},${y0ltriA2-yOrigin})`);
    //         win.ltriA=true
    //         }else{
    //             win.ltriA=false
    //         }
    //         break;
    //     case "ltriB":
    //         if (300<x0 && x0<340 && 480<y0 && y0<520){    
    //         ltriB.setAttribute('transform',`translate(${x0ltriB2-xOrigin},${y0ltriB2-yOrigin})`);
    //         win.ltriB=true
    //         }else{
    //         win.ltriB=false
    //         }
    //         break;
    //     case "squ":
    //         if (480<x0 && x0<620 && 280<y0 && y0<320){    
    //         squ.setAttribute('transform',`translate(${x0squ2-xOrigin},${y0squ2-yOrigin})`);
    //         win.squ=true
    //         }else{
    //         win.squ=false
    //         }
    
    //         break;
    //     case "rom": 
    //         if (680<x0 && x0<720 && 180<y0 && y0<220){
    //         rom.setAttribute('transform',`translate(${x0rom2-xOrigin},${y0rom2-yOrigin})`);
    //         win.rom=true
    //     }else{
    //         win.rom=false
    //     }
    //         break;
    //     case "mtri":
    //         if (300<x0 && x0<340 && 480<y0 && y0<520){
    //         mtri.setAttribute('transform',`translate(${x0mtri2-xOrigin},${y0mtri2-yOrigin})`);
    //         win.mtri=true
    //     }else{
    //         win.mtri=false
    //     }
    //         break;
    //     }  
    //         if (win.striA===true && win.striB===true && win.ltriA===true && win.ltriB===true && win.squ===true && win.rom===true & win.mtri===true){
    //             alert("You win!")
    //         }
    //     }