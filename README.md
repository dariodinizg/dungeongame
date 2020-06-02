# Caça ao Tesouro

**Objetivo:** Desenvolvimento de um jogo de caça ao tesouro dentro de uma dungeon.

**Funcionalidades:**
a) O jogador deve poder escolher para onde quer ir ao escrever o comando.
b) Há um tesouro que está escondido em algum lugar aleatório do mapa que não contenha outros itens.. Este local poderá ser diferente á cada novo jogo
c) Há um monstro na dungeon que aparece em um local aleatório na dungeon, desde que não seja no mesmo local do jogador.
d) O monstro deverá começar a se movimentar pela dungeon a partir do terceiro movimento do jogador.
e) O jogador possui uma quantidade de vida de 10 pontos e faz 1 ponto de dano desarmado.
f) O monstro possui uma quantidade de vida de 15 pontos e faz 2 pontos de dado.
g) Há uma poção de vida que recupera 10 pontos e está escondida em algum lugar aleatório do mapa que não contenha outros itens.
h) Há uma arma que causa 2.5 pontos de dano e está escondida em algum lugar aleatório do mapa que não contenha outros itens.
i) O sistema de combate é uma rolagem simples de um dado de 6 lados. Quem tirar o maior número conseguiu realizar a ação.
j) As ações disponíveis para monstro e jogador são: Atacar ou fugir. A qualquer momento o jogador poderá escrever "sair" para deixar o jogo.
k) O monstro irá fugir se tiver menos que dois terços de sua vida.
l) O jogo acaba quando o jogador consegue pegar o tesouro e fugir da dungeon.
m) Haverá uma pontuação para o jogador que será informada no final do jogo e que deve considerar:
    *A quantidade de vida do jogador (ponto positivo ou negativo)
    *Se o jogador matou o monstro (ponto positivo ou zero)
    *Se o jogador precisou fugir (ponto negativo)
    *Cada item encontrado (ponto positivo ou zero)
n) Ao retornar à entrada da dungeon, o jogador deve ser questionado se está desejando sair dela. Caso saia da dungeon, o jogo acaba.
o) Caso o personagem morra ou o jogador saia da dungeon sem o tesouro, o jogador perde o jogo.
p) Ao final do jogo, ou ao sair dele, deverá ser dado ao jogador a opção de iniciar um novo jogo.
