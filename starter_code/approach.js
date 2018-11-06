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
        win.striA=true
    }else{
        win.striA=false
    }
        break;
    case "striB":
        if (680<x0 && x0<720 && 180<y0 && y0<220){
        striB.setAttribute('transform',`translate(${x0striB-xOrigin},${y0striB-yOrigin})`);
        win.striB=true
    }else{
        win.striB=false
    }
        break;
    case "ltriA": 
        if (380<x0 && x0<420 && 80<y0 && y0<120){ 
        ltriA.setAttribute('transform',`translate(${x0ltriA-xOrigin},${y0ltriA-yOrigin})`);
        win.ltriA=true
        }else{
            win.ltriA=false
        }
        break;
    case "ltriB":
        if (380<x0 && x0<420 && 480<y0 && y0<520){    
        ltriB.setAttribute('transform',`translate(${x0ltriB-xOrigin},${y0ltriB-yOrigin})`);
        win.ltriB=true
        }else{
        win.ltriB=false
        }
        break;
    case "squ":
        if (580<x0 && x0<620 && 80<y0 && y0<120){    
        squ.setAttribute('transform',`translate(${x0squ-xOrigin},${y0squ-yOrigin})`);
        win.squ=true
        }else{
        win.squ=false
        }

        break;
    case "rom": 
        if (680<x0 && x0<720 && 180<y0 && y0<220){
        rom.setAttribute('transform',`translate(${x0rom-xOrigin},${y0rom-yOrigin})`);
        win.rom=true
    }else{
        win.rom=false
    }
        break;
    case "mtri":
        if (580<x0 && x0<620 && 80<y0 && y0<120){
        mtri.setAttribute('transform',`translate(${x0mtri-xOrigin},${y0mtri-yOrigin})`);
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