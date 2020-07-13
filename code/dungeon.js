let dungeonMap = {
    room1:{
        south: "room4",
        west: "room2"
    },
    room2:{
        south: "room5",
        east: "room1",
        west: "room3"
    },
    room5:{
        north: "room2",
        south: "room8",
        east: "room4",
        west: "room6"
    }
}

let playerInput = "direita"
let playerOrientation = "north"
let currentRoom = "room1"



function getPlayerOrientation(Input, Orientation){
    /*
 escrever aqui.
    */
    if (playerInput === "frente") { // = recebe == semelhante === identico
        return playerOrientation
    }
    
    const compass = {
        "north": { 
            "tras": "south",
            "esquerda": "east",
            "direita": "west"  
        }, 
        'south': {
            "tras": 'north',
            "esquerda": 'west',
            "direita": 'east'
        },
        'west': {
            'tras':'east',
            'esquerda': 'north',
            'direita': 'south'
        },
        'east': {
            'tras': 'west',
            'esquerda': 'south',
            'direita': 'north',
        }
    }

    return compass[Orientation][Input]
}

// console.log(getPlayerOrientation(playerInput, playerOrientation))

function getRoom(current_room, player_orientation, mapdungeon){
    if (mapdungeon[current_room][player_orientation] === undefined) {
        return "Sem saida";
    }
    
    return mapdungeon[current_room][player_orientation]

}



console.log(getRoom(currentRoom, playerOrientation, dungeonMap))



const dungeonRooms = {
    room1:{
       mensage: "Você entra em uma sala escura. O cheiro de mofo invade seus pulmões, fazendo você sentir uma leve nausea."
    }
}

function movePlayer(player_input, player_orientation, current_room, mapdungeon, dungeon_rooms){
    playerOrientation = getPlayerOrientation(player_input, player_orientation)
    currentRoom = getRoom(current_room, player_orientation, mapdungeon)
    // console.log(dungeon_rooms[current_room])
    return dungeon_rooms[current_room]
}

console.log(movePlayer(playerInput, playerOrientation, currentRoom, dungeonMap, dungeonRooms)["mensage"])



function setup(){
    
    let inputBox = document.getElementById("inputbox")
    let userInput = document.getElementsByClassName("userinput")[0]
    let keyReceiver = []
    let messageDisplay = document.getElementById("messagedisplay")
    let replayDisplay = document.getElementById("replaydisplay")


    document.addEventListener("keydown", key =>{
        if (key.keyCode >= 65 && key.keyCode <= 90) {
            keyReceiver.push(key.key)
        }
        else if (key.keyCode === 13){
            console.log(key.keyCode)
            messageDisplay.innerText = inputBox.innerText
            playerInput = inputBox.innerText
            keyReceiver.length = 0

        }
        else if (key.keyCode === 8){
            keyReceiver.pop()
        }
        else{
            console.log(key.keyCode,"este não")
        }
        console.log(keyReceiver)
        inputBox.innerText = keyReceiver.join("")
    })




}