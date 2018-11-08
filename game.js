function Game(){
this.document;
this.xmlns = "http://www.w3.org/2000/svg";
this.x0;
this.y0;
this.level = 0;
this.counter=0;
this.key=levels.level1.polygons;
this.keysObj=Object.keys(this.key);
this.win = {
    rect: true,
    striA:false,
    striB:false,
    ltriA:false,
    ltriB:false,
    squ:false,
    rom:false,
    mtri:false
}

}
Game.prototype.generator=function(){
    
         this.keysObj.forEach(function(key2, i){
            
            var obj = this.key[key2];
            var elem;
            if(obj.x){
                elem = document.createElementNS(this.xmlns, "rect");
                elem.setAttributeNS(null,"x",obj.x);
                elem.setAttributeNS(null,"y",obj.y);
                elem.setAttributeNS(null,"width",obj.width);
                elem.setAttributeNS(null,"height",obj.height);
                elem.setAttributeNS(null,"fill",obj.fill);
            } else {
                elem = document.createElementNS(this.xmlns, "polygon");
                elem.setAttribute("id", obj.id);
                elem.setAttributeNS(null,"points", obj.points);
                elem.setAttributeNS(null,"fill",obj.fill);
                elem.setAttribute("transform",`translate(${Math.floor(Math.random() * (800-100)+100)},${Math.floor(Math.random() *(200-50)+50)})`);
                
            }
            elem.setAttributeNS(null,"stroke", obj.stroke);
            
            this.document.appendChild(elem)  
         }.bind(this))
         this.deactivate()
         this.activate()
}
Game.prototype.changeLevel= function(){
    this.win = {
        rect: true,
        striA:false,
        striB:false,
        ltriA:false,
        ltriB:false,
        squ:false,
        rom:false,
        mtri:false
    }
    if (this.counter===1){
        this.key=levels.level2.polygons;
        document.getElementById("level").classList.add('level2');
        document.getElementById("level").classList.remove('level1');
    }else if (this.counter===2){
        this.key=levels.level3.polygons;
        document.getElementById("level").classList.add('level3');
        document.getElementById("level").classList.remove('level2');
    }else {
        alert("You WIN")
    }
}

Game.prototype.drag=function(e){
    if(e.path[0].tagName == "polygon"){
        this.id=(e.path[0].id)
        this.xOrigin = e.toElement.attributes[1].ownerElement.points[0].x;
        this.yOrigin = e.toElement.attributes[1].ownerElement.points[0].y;
    }else{
        this.x0 = e.clientX;
        this.y0 = e.clientY;
        var x = this.x0 - this.xOrigin;
        var y = this.y0 - this.yOrigin;
        var polygon = document.getElementById(this.id);
        polygon.setAttribute("transform", `translate(${x}, ${y})`);
        this.approach(e, polygon);
    }
    
}

Game.prototype.approach=function(e, polygon){

    this.x0 = e.clientX;
    this.y0 = e.clientY;
    
    if(this.key[polygon.id].xSolbouMin<this.x0 && this.x0<this.key[polygon.id].xSolbouMax && this.key[polygon.id].ySolbouMin<this.y0 && this.y0<this.key[polygon.id].ySolbouMax)
    {
    polygon.setAttribute('transform',`translate(${this.key[polygon.id].xSolution-this.xOrigin},${this.key[polygon.id].ySolution-this.yOrigin})`);
    
        this.win[polygon.id]=true
        
    }else {
        this.win[polygon.id]=false
    }
    
    
    var win = this.keysObj.every(function(id){
        return this.win[id];
    }.bind(this))
    
    if(win){
        setTimeout(function(){
            if(!alert("Done")){
                this.counter++
                // console.log(this.document);
                this.keysObj.forEach(function(){
                    this.document.removeChild(this.document.firstChild)
                }.bind(this))
                this.changeLevel();
                try {
                    this.document.removeChild(this.document.firstChild)
                } catch (error) {
                    console.log(error);
                    
                }
            };
        }.bind(this),1000)    
    }
}

Game.prototype.deactivate=function(){
    document.getElementById("generate").disabled = true;
}

Game.prototype.activate=function(){
    document.getElementById("generate").disabled = false;
}


Game.prototype.svg = function(svg){
    this.document = svg;
}