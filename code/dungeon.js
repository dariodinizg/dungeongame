let userMove = "frente"
// movimentos: frente, tras, esquerda, direita
let currentRoom = "room1"

const dungeonMap =  {
    frente: "quarto frente"   
}


function getRoom(movimento){
    //corpo da funcao
    return dungeonMap[movimento]
}

console.log(getRoom(userMove))