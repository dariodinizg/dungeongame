

function setUp(){
  const userPromt = document.getElementById("user-promt")
  const game_screen = document.getElementById("terminal-screen")
  const game_cursor = document.getElementById("cursor")

  game_cursor.innerText = ">>>"
  // console.log(userPromt)
  // console.log(game_screen)

  let user_input = []
  // userPromt.innerText = user_input
  
  let previous_room
  let current_room = "sala1"

  // let dungeon_map = {
  //   "sala1":["corredor 1", "corredor 3"],
  //   "sala2":["corredor 1", "corredor 2", "corredor 4"],
  //   "sala3":["corredor 2", "corredor 5"],
  //   "sala4":["corredor", "corredor"],
  //   "sala5":["corredor", "corredor"],
  //   "sala6":["corredor", "corredor"],
  //   "sala7":["corredor", "corredor"],
  //   "sala8":["corredor", "corredor"],
  //   "sala9":["corredor", "corredor"],
  // }

  const dungeon_room = {
    "sala1": "Bem vindo à sala 1",
    "sala2":"Está na sala 2",
    "sala5": "Chegou na sala 5"
  }

  const dungeon_map = {
    "sala1":{
      "west": dungeon_room["sala2"],
      "south": dungeon_room["sala5"]
    },
    "sala2": {
      // "west": "Caminho bloqueado"
      "east": dungeon_room["sala1"]
    },
    "sala5": {
      "north":dungeon_room["sala1"]
    }
  }

  //Implementa um pseudo simples terminal
  console.log(`Você está em ${Object.keys(dungeon_map)[0]}`)
  console.log(`Você pode ir para:`, String(dungeon_map[`${current_room}`].join(" ou ")))
  document.addEventListener("keydown", key => {
    terminal_input(key)
  })
  
  function terminal_input(key){
    if (key.code === "Enter"){
      console.log(user_input.join(""))
      previous_room = current_room
    }
    else if (key.code === "Backspace"){
      user_input.pop()
      userPromt.innerText = user_input.join("")
    }
    else if (key.keyCode >= 65 && key.keyCode <= 90 || key.code === "Space" || key.keyCode >= 48 && key.keyCode <= 57){
      user_input.push(key.key)
      userPromt.innerText = user_input.join("")
    }
  }
  
}


// function get_move(key){

// }

