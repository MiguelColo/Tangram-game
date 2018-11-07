function Game(svg){
this.document=document.querySelector("svg g")
}
Game.prototype.generator=function(){
    this.xmlns = "http://www.w3.org/2000/svg";
    this.elem = document.createElementNS(xmlns, "polygon");
    this.elem.setAttribute("id", "pepe");
    this.elem.setAttributeNS(null,"points", "100,0 0,0 0,100");
    this.elem.setAttributeNS(null,"fill","black");
    this.elem.setAttributeNS(null,"stroke","red");
    this.document.appendChild(this.elem)   
    console.log(elem) 
}
window.onload = function () {

    document.getElementById("generate").onclick = function () {
    generator();
     
    }
}