
function getPlayerOrientation(player_input, player_orientation){
console.log(player_input, player_orientation)
    if (player_input === "frente") { // = recebe == semelhante === identico
       console.log(player_orientation)
        return player_orientation
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
    console.log(compass[player_orientation][player_input])
    return compass[player_orientation][player_input]
}


function getRoom(currentRoom, playerOrientation, mapdungeon){
    if (mapdungeon[currentRoom][playerOrientation] === undefined) {
        //return "Sem saida";
        return currentRoom
    }
    
    else{
        console.log(currentRoom, playerOrientation)
       // console.log(mapdungeon[current_room][playerOrientation])
        return mapdungeon[currentRoom][playerOrientation]

    }

}



function movePlayer(player_input, player_orientation, current_room, mapdungeon, dungeon_rooms){
   // console.log(player_input, player_orientation, current_room, mapdungeon, dungeon_rooms)
    playerOrientation = getPlayerOrientation(player_input, player_orientation)
    //console.log(playerOrientation)
  //  console.log(currentRoom)
    currentRoom = getRoom(current_room, playerOrientation, mapdungeon)
    if (getRoom(current_room, player_orientation, mapdungeon) === currentRoom) {
        replayDisplay.innerText = "Não ha nada aqui."
    }

    else {
        replayDisplay.innerText = dungeonRooms[currentRoom]["mensage"]
    }
  //  console.log(currentRoom)
    return dungeon_rooms[current_room]
}

const dungeonRooms = {
    room1:{
       mensage: "Você entra na torre, e ve apenas um salão vazio. Nele há duas portas."
    },
    room2:{
        mensage: "Você entra em uma sala escura. O cheiro de mofo invade seus pulmões, fazendo você sentir uma leve nausea."
     },
     room3:{
       mensage: "Você entra em um grande salão de festas. Você percebe que este salão não ve a tempos as grandes festas do passado."
     },
     room4:{
        mensage: "Você entra em uma sala sem saída. As portas fecham atras de você. "
     },
     room5:{
        mensage: "Você entra em uma sala escura. O cheiro de mofo invade seus pulmões, fazendo você sentir uma leve nausea."
     }
}




let currentRoom = "room1"
let playerOrientation = "north"
const replayDisplay = document.getElementById("replaydisplay")


function setup(){
    
    
    let keyReceiver = []
    const inputBox = document.getElementById("inputbox")
    const messageDisplay = document.getElementById("messagedisplay")
    
    console.log(dungeonRooms[currentRoom]["mensage"])
    replayDisplay.innerText = dungeonRooms[currentRoom]["mensage"]

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