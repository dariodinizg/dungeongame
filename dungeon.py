""" Informações relativas a cada sala. É possível criar um atributo de
introdução do aposento para cada sala
"""
dungeon_room = {
    "1": "sala1",
    "2": "sala2",
    "5": "sala5"
}


# Mapa da dungeon
dungeon_map = {
    "sala1":{
        "west": dungeon_room["2"],
        "south": dungeon_room["5"]
    },
    "sala2": {
        "east": dungeon_room["1"]
    },
    "sala5": {
        "north":dungeon_room["1"]
    }
}

# Setup inicial
user_direction = "west"
current_room = 'sala1'

def to_cardinal(user_direction, user_move):
    """ Transforma os inputs do usuários em direções cardinais (norte, sul, leste e oeste)
    """
    cardinal_compass = {
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
            'direita': 'north'
        }
    }
    if user_move == "frente":
        return user_direction
    
    user_direction = cardinal_compass[f'{user_direction}'][f'{user_move}']
    return user_direction

def get_possible_movements(user_direction, dungeon_map, current_room):
    possible_cardinal_directions = list(dungeon_map[f'{current_room}'].keys())
    perspective_compass = {
        "north": {
            "south": "tras",
            "east": "esquerda",
            "west": "direita",
            "north": 'frente'
        },
        'south': {
            'north': "tras",
            'west': "esquerda",
            'east': "direita",
            "south": 'frente'
        },
        'west': {
            'east':'tras',
            'north':'esquerda',
            'south':'direita',
            "west": 'frente'
        },
        'east': {
            'west': 'tras',
            'south': 'esquerda',
            'north': 'direita',
            "east": 'frente'
        }
    }
    return [perspective_compass[user_direction][direction] for direction in possible_cardinal_directions]

def get_user_move(user_direction, dungeon_map, current_room):
    print(f'Para onde deseja ir? Opções: {get_possible_movements(user_direction, dungeon_map, current_room)}')
    user_move = input('R: ')
    user_move = user_move.strip().lower()
    return user_move

def move(user_direction, current_room, dungeon_map):
    """ Retorna a sala para qual o jogador se moveu.
    Busca no dicionário dungeon_map conforme:
    Ex: dungeon_map['sala1']['east']
    """
    return dungeon_map[f'{current_room}'][f'{user_direction}']

gameOn = True
while gameOn:

    user_move = get_user_move(user_direction, dungeon_map, current_room)

    try: 
        user_direction = to_cardinal(user_direction, user_move)
    except:
        print('Não entendi sua escolha')
        quit()

    current_room = move(user_direction, current_room, dungeon_map)
    print(current_room)
