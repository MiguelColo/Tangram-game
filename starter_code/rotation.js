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
        var transStriA =striA.getAttribute('transform');
        
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