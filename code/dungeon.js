

// =================== Pega a orientação do compasso ================  
function getPlayerOrientation(player_input, player_orientation){
    if (player_input === "frente") { // = recebe == semelhante === identico
        return player_orientation
    }

    return compass[player_orientation][player_input]
}

// =================== Verifica se o texto digitado é valido ================ 
function isInputValid(player_input){
    /* Checar se o input  esta dentro das possibilidades
    comprar com true e false
    ao encontrar a opção, parar de pesquisar, retornar true
    se nao encontrar parar na quantidade maxima de opções, retorna false
    */
    const validsInputs = ["frente", "tras", "esquerda", "direita"]
    for (let indice = 0; indice < validsInputs.length; indice++){
        if (player_input === validsInputs[indice]){
            return true
        }
    }
    return false
}

// =================== Verifica e nos entrega o proximo quarto ================ 
function getRoom(currentRoom, playerOrientation, mapdungeon){
    if (mapdungeon[currentRoom][playerOrientation] === undefined) {
        return currentRoom
    }
        
    else{
        return mapdungeon[currentRoom][playerOrientation]
    }

}

// =================== Da spawn no bau ================ 
function spawnChest(dungeon_rooms){
    let allRooms = Object.keys(dungeon_rooms) // retorna uma lista de todas as salas(chaves) da dungeon
    let numberOfRooms = allRooms.length - 1 
    let index = Math.floor(Math.random()*numberOfRooms)
    let chosenRoom = allRooms[index]
    dungeon_rooms[chosenRoom].chest = true
}

// =================== Pegar o bau ================ 
function checkVictory(dungeon_rooms, current_room){
    try{
        if (dungeon_rooms[current_room].chest === true){
            replyDisplay.innerText = "Você achou o bau. Ta de parabéns."
        }
    }
    catch (TypeError){

    }
}

// =================== Movimenta o jogador na dungeon ================ 
function movePlayer(player_input, player_orientation, current_room, mapdungeon, dungeon_rooms){
    

    playerOrientation = getPlayerOrientation(player_input, player_orientation)
    
    currentRoom = getRoom(current_room, playerOrientation, mapdungeon)
    if (current_room === currentRoom) { 
        replyDisplay.innerText = "Não há caminho para seguir nesta direção."
    playerOrientation = player_orientation
    }
    else if(currentRoom === "saida"){
        replyDisplay.innerText = "Você saiu da dungeon."
    }
    else {
        replyDisplay.innerText = dungeonRooms[currentRoom]["message"]
        player.stepsCount++
        if (player.stepsCount === 2){
            spawnChest(dungeonRooms) 
        }
        checkVictory(dungeon_rooms, currentRoom)
    }

    loadImgRomm(currentRoom, playerOrientation)
    console.log(currentRoom);
    return dungeon_rooms[currentRoom]
}

// =================== Carrega imagens da sala ================
function loadImgRomm(current_room, player_orientation){
    const imageLeft = document.getElementById("imageleft")
    const imageRight = document.getElementById("imageright")
    const imageUp = document.getElementById("imageup")
    const imageDown = document.getElementById("imagedown")

    if (dungeonMap[current_room][compass][player_orientation]["frente"] !== undefined){
       imageUp.setAttribute("src", "img/frente01.png")
        console.log("aki")
    }
    else {
        imageUp.setAttribute("src", "img/frente02.png")
        console.log("ali")
    }

    if (dungeonMap[current_room]["west"] !== undefined){
        imageLeft.setAttribute("src", "img/parede_esq01.png")
         console.log("aki")
     }
     else {
         imageLeft.setAttribute("src", "img/parede_esq02.png")
         console.log("ali")
     }

     if (dungeonMap[current_room]["east"] !== undefined){
        imageRight.setAttribute("src", "img/parede_dir01.png")
         console.log("aki")
     }
     else {
         imageRight.setAttribute("src", "img/parede_dir02.png")
         console.log("ali")
     }

     if (dungeonMap[current_room]["south"] !== undefined){
        imageDown.setAttribute("src", "img/traz.png")
         console.log("aki")
     }
     else {
         imageDown.setAttribute("src", "img/traz.png")
         console.log("ali")
     }
}


// =================== Variaveis e constantes globais ================ 
let currentRoom = "entrada"
let playerOrientation = "north"
const replyDisplay = document.getElementById("replydisplay")
const player = {
    stepsCount: 0,
    chest: false,
    life: 10,
    sword: false,
}
const dungeonRooms = {
    room1:{
       message: "Você entra na torre, e ve apenas um salão vazio. Nele há duas portas."
    },
    room2:{
        message: "Você entra em uma sala escura. O cheiro de mofo invade seus pulmões, fazendo você sentir uma leve nausea."
    },
    room3:{
       message: "Você entra em um grande salão de festas. Você percebe que este salão não ve a tempos as grandes festas do passado."
    },
    room4:{
       message: "Você entra em uma sala sem saída. As portas fecham atras de você. "
    },
    room5:{
       message: "Você entra em uma sala escura. O cheiro de mofo invade seus pulmões, fazendo você sentir uma leve nausea."
    },
    room6:{
       message: "Você entra na torre, e ve apenas um salão vazio. Nele há duas portas."
    },
    room7:{
       message: "Você entra em uma sala escura. O cheiro de mofo invade seus pulmões, fazendo você sentir uma leve nausea."
    },
    room8:{
       message: "Você entra em um grande salão de festas. Você percebe que este salão não ve a tempos as grandes festas do passado."
    },
    entrada:{
       message: "Você esta na entrada da mansão. "
    },
}
const dungeonMap = {
    entrada:{
        north: "room5",
        south: "saida",
        west: "room7",
        east: "room8"
    },
    room1:{
        south: "room4",
        east: "room2"
    },
    room2:{
        south: "room5",
        west: "room1",
        east: "room3"
    },
    room3:{
        south: "room6",
        west: "room2",
    },
    room4:{
        north: "room1",
        south: "room7",
        east: "room5",
    },
    room5:{
        north: "room2",
        south: "entrada",
        west: "room4",
        east: "room6"
    },
    room6:{
        north: "room3",
        south: "room8",
        west: "room5"
    },
    room7:{
        north: "room4",
        east: "entrada"
    },
    room8:{
        north: "room6",
        west: "entrada",
    },
}
const compass = {
    "north": { 
        "frente": "north",
        "tras": "south",
        "direita": "east",
        "esquerda": "west"  
    }, 
    'south': {
        "frente": "south",
        "tras": 'north',
        "direita": 'west',
        "esquerda": 'east'
    },
    'east': {
        "frente": "east",
        'tras':'west',
        'esquerda': 'north',
        'direita': 'south'
    },
    'west': {
        "frente": "west",
        'tras': 'east',
        'esquerda': 'south',
        'direita': 'north',
    }
}


// =================== SETUP ================ 
function setup(){
    spawnChest(dungeonRooms)
    loadImgRomm(currentRoom, playerOrientation)
    let keyReceiver = []
    const inputBox = document.getElementById("inputbox")
    const messageDisplay = document.getElementById("messagedisplay")
    
    replyDisplay.innerText = dungeonRooms[currentRoom]["message"]

   


    document.addEventListener("keydown", key =>{
        if (key.keyCode >= 65 && key.keyCode <= 90) {
            keyReceiver.push(key.key)
        }
        else if (key.keyCode === 13){
            playerInput = inputBox.innerText.toLowerCase()
            console.log(playerInput)

            if (playerInput != ""){
                messageDisplay.innerText = playerInput
                if (isInputValid(playerInput)){
                    movePlayer(playerInput, playerOrientation, currentRoom, dungeonMap, dungeonRooms)
                }
                else{
                    messageDisplay.innerText = "Não entendi a orientação."
                }

                keyReceiver.length = 0              
            }
        }
        else if (key.keyCode === 8){
            keyReceiver.pop()
        }
        inputBox.innerText = keyReceiver.join("")
    })




}