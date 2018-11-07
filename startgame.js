var game = new Game();
window.onload = function () {
    game.svg(document.querySelector("svg g"))
    
    document.getElementById("generate").onclick = function () {
        startGame();
    }
    
    function startGame(){
        game.generator()
    }
}