function generator(elem){
    var xmlns = "http://www.w3.org/2000/svg";
    var elem = document.createElementNS(xmlns, "polygon");
    elem.setAttribute("id", "pepe");
    elem.setAttributeNS(null,"points", "400,0 600,0 600,100 400,100");
    elem.setAttributeNS(null,"fill","black");
    elem.setAttributeNS(null,"stroke","red");
    document.querySelector("svg g").appendChild(elem)   
    console.log(elem) 
}
