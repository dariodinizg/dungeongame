



function getPlayerOrientation(Input, Orientation){

    if (Input === "frente") { // = recebe == semelhante === identico
       
        return Orientation
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


function getRoom(current_room, player_orientation, mapdungeon){
    if (mapdungeon[current_room][player_orientation] === undefined) {
        //return "Sem saida";
        return current_room
    }
    
    
    return mapdungeon[current_room][player_orientation]

}


function movePlayer(player_input, player_orientation, current_room, mapdungeon, dungeon_rooms){
    playerOrientation = getPlayerOrientation(player_input, player_orientation)
    currentRoom = getRoom(current_room, player_orientation, mapdungeon)
    return dungeon_rooms[current_room]
}

const dungeonRooms = {
    room1:{
       mensage: "Você entra em uma sala escura. O cheiro de mofo invade seus pulmões, fazendo você sentir uma leve nausea."
    },
    room2:{
        mensage: "Você entra em uma sala escura. O cheiro de mofo invade seus pulmões, fazendo você sentir uma leve nausea."
     },
     room3:{
       mensage: "Você entra em uma sala escura. O cheiro de mofo invade seus pulmões, fazendo você sentir uma leve nausea."
     },
     room4:{
        mensage: "Você entra em uma sala escura. O cheiro de mofo invade seus pulmões, fazendo você sentir uma leve nausea."
     },
     room5:{
        mensage: "Você entra em uma sala escura. O cheiro de mofo invade seus pulmões, fazendo você sentir uma leve nausea."
     }
}




let currentRoom = "room1"
let playerOrientation = "north"


function setup(){
    
    let keyReceiver = []
    const inputBox = document.getElementById("inputbox")
    const messageDisplay = document.getElementById("messagedisplay")
    const replayDisplay = document.getElementById("replaydisplay")
    
    const dungeonMap = {
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


    document.addEventListener("keydown", key =>{
        if (key.keyCode >= 65 && key.keyCode <= 90) {
            keyReceiver.push(key.key)
        }
        else if (key.keyCode === 13){
            playerInput = inputBox.innerText

            if (playerInput != ""){
                messageDisplay.innerText = inputBox.innerText
                console.log(currentRoom)
                movePlayer(playerInput, playerOrientation, currentRoom, dungeonMap, dungeonRooms)
                console.log(currentRoom)
                keyReceiver.length = 0
            }
        }
        else if (key.keyCode === 8){
            keyReceiver.pop()
        }
        else{
            console.log(key.keyCode,"este não")
        }
        inputBox.innerText = keyReceiver.join("")
    })




}