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