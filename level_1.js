// Constante canvas 2d para criação dos objetos
const background = document.getElementById("Mycanvas");
const snake_ctx = background.getContext("2d");


/*var image = new Image();
image.src = "Images/green_forest.png";

image.onload = function(){

  snake_ctx.drawImage(image, 0 ,0);

}*/

// Posição inicial da cobra, tamanho = 5
let snake = [ {x: 200, y: 40},  
              {x: 190, y: 40},  
              {x: 180, y: 40},  
              {x: 170, y: 40},  
              {x: 160, y: 40},];

//Walls inside the square
let wall1 = [ {x: 300, y: 90},  
    {x: 290, y: 90},  
    {x: 310, y: 90},
    {x: 320, y: 90},
    {x: 320, y: 100},  
    {x: 320, y: 110},
    {x: 320, y: 120},];

let wall2 = [ {x: 100, y: 90},  
     {x:90, y: 90},  
    {x: 80, y: 90},
    {x: 70, y: 90},
     {x: 70, y: 100},  
    {x: 70, y: 110},
    {x: 70, y: 120},];

let wall3 = [ {x: 100, y: 310},  
    {x:90, y: 310},  
    {x: 80, y: 310},
    {x: 70, y: 310},
    {x: 70, y: 300},  
    {x: 70, y: 290},
    {x: 70, y: 280},];

let wall4 = [ {x: 300, y: 310},  
    {x:310, y: 310},  
    {x: 320, y: 310},
    {x: 290, y: 310},
    {x: 320, y: 300},  
    {x: 320, y: 290},
    {x: 320, y: 280},
    ];

let wall5 = [ {x: 200, y: 200},
        {x: 210, y: 200},
        {x: 190, y: 200},
        {x: 220, y: 200},
        {x: 180, y: 200},
        {x: 200, y: 210},
        {x: 200, y: 190},
        {x: 200, y: 180},
        {x: 200, y: 220},];
    
// Velocidade horizontal
let dx = 10;
// Velocidade vertical
let dy = 0;

//Coordenadas do alimento da cobra
let food_x;
let food_y;

let score = 0;
let score2 = "Score: ";
document.getElementById('score2').innerHTML = score2;

let changing_direction = false;

main();

generate_food();

document.addEventListener("keydown", check_arrow);

let signal = "Level 1";
document.getElementById('signal').innerHTML = signal;

let target = "Target: 25";
document.getElementById('target').innerHTML = target;

let losegame = "You Lost. Refresh to play again.";
let wingame = "You passed the level 1. ";

//A funcao main repete-se e por isso a setTimeout é chamada vezes infinitas

function main() {

  //Se alguma condição para o jogo acabar acontecer, jogo para (acaba)
  if(game_lost()){

    document.getElementById('losegame').innerHTML = losegame;

    return;
  } 

  if(game_win()){

    document.getElementById('wingame').innerHTML = wingame;

    return
  }

  changing_direction = false;

  setTimeout(function onTick(){
  clearCanvas();
  drawFood();
  move_snake();
  drawWall1();
  drawWall2();
  drawWall3();
  drawWall4();
  drawWall5();
  drawSnake();

  //repete a main, e assim sucessivamente
  main();

  }, 100)
}

// Função para desenhar a cobra em si
function drawSnakePart(snakePart) {  
    snake_ctx.fillStyle = 'lightgreen';  
    snake_ctx.strokestyle = 'darkblue';
    snake_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  
    snake_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// Função que dá print nas partes da cobra
function drawSnake() {  
    snake.forEach(drawSnakePart);
  }

function drawWallPart(wall1Part){
    snake_ctx.fillStyle = 'orange';  
    snake_ctx.strokeStyle = 'darkred';
    snake_ctx.fillRect(wall1Part.x, wall1Part.y, 10, 10);  
    snake_ctx.strokeRect(wall1Part.x, wall1Part.y, 10, 10);
}

function drawWall1() {  
    wall1.forEach(drawWallPart);
  }

function drawWall2Part(wall2Part){
    snake_ctx.fillStyle = 'orange';  
    snake_ctx.strokeStyle = 'darkred';
    snake_ctx.fillRect(wall2Part.x, wall2Part.y, 10, 10);  
    snake_ctx.strokeRect(wall2Part.x, wall2Part.y, 10, 10);
}

function drawWall2() {  
    wall2.forEach(drawWall2Part);
  }

function drawWall3Part(wall3Part){
    snake_ctx.fillStyle = 'orange';  
    snake_ctx.strokeStyle = 'darkred';
    snake_ctx.fillRect(wall3Part.x, wall3Part.y, 10, 10);  
    snake_ctx.strokeRect(wall3Part.x, wall3Part.y, 10, 10);
}

function drawWall3() {  
    wall3.forEach(drawWall3Part);
  }

function drawWall4Part(wall4Part){
    snake_ctx.fillStyle = 'orange';  
    snake_ctx.strokeStyle = 'darkred';
    snake_ctx.fillRect(wall4Part.x, wall4Part.y, 10, 10);  
    snake_ctx.strokeRect(wall4Part.x, wall4Part.y, 10, 10);
}

function drawWall4() {  
    wall4.forEach(drawWall4Part);
  }

  function drawWall5Part(wall5Part){
    snake_ctx.fillStyle = 'orange';  
    snake_ctx.strokeStyle = 'black';
    snake_ctx.fillRect(wall5Part.x, wall5Part.y, 10, 10);  
    snake_ctx.strokeRect(wall5Part.x, wall5Part.y, 10, 10);
}

function drawWall5() {  
    wall5.forEach(drawWall5Part);
  }

//Generate randomly a x coordinate and an y coordinate
function random_food(min,max){
  return Math.round((Math.random()*(max-min)+min)/10)*10;
}

function drawFood(){
    snake_ctx.fillStyle = 'red';
    snake_ctx.strokestyle = 'black';
    snake_ctx.fillRect(food_x, food_y, 10,10);
    snake_ctx.strokeRect(food_x, food_y, 10, 10);
  }

//Generate the food on the location from the random_food function (x and y)
function generate_food(){
  food_x = random_food(0, background.width-10);
  food_y = random_food(0, background.height-10);

  snake.forEach(function has_snake_eaten_food(part){
    const has_eaten = part.x == food_x && part.y == food_y;

    //Se a food estiver em cima da cobra volta a generar comida
    if(has_eaten){
      generate_food();
    }
  });

  wall1.forEach(function has_snake_eaten_food(part1){
    const has_eaten1 = part1.x == food_x && part1.y == food_y;

    //Se a food estiver em cima da parede 1 volta a gerar
    if(has_eaten1){
      generate_food();
    }
  });

  wall2.forEach(function has_snake_eaten_food(part2){
    const has_eaten2 = part2.x == food_x && part2.y == food_y;

    //Se a food estiver em cima da parede 2 volta a gerar
    if(has_eaten2){
      generate_food();
    }
  });

  wall3.forEach(function has_snake_eaten_food(part3){
    const has_eaten3 = part3.x == food_x && part3.y == food_y;

    //Se a food estiver em cima da parede 3 volta a gerar
    if(has_eaten3){
      generate_food();
    }
  });

  wall4.forEach(function has_snake_eaten_food(part4){
    const has_eaten4 = part4.x == food_x && part4.y == food_y;

    //Se a food estiver em cima da parede 4 volta a gerar
    if(has_eaten4){
      generate_food();
    }
  });

  wall5.forEach(function has_snake_eaten_food(part5){
    const has_eaten5 = part5.x == food_x && part5.y == food_y;

    //Se a food estiver em cima da parede 5 volta a gerar
    if(has_eaten5){
      generate_food();
    }
  });
}

 // draw a border around the canvas
 function clearCanvas() {
  //  Select the colour to fill the drawing
  snake_ctx.fillStyle = '#ffe6cc';
  //  Select the colour for the border of the canvas
  snake_ctx.strokestyle = 'black';
  // Draw a "filled" rectangle to cover the entire canvas
  snake_ctx.fillRect(0, 0, background.width, background.height);
  // Draw a "border" around the entire canvas
  snake_ctx.strokeRect(0, 0, background.width, background.height);
}

// Função que movimenta a cobra - tira a parte de trás e adiciona na parte de frente, e assim por diante
// Dx simboliza a velocidade horizontal e dy simboliza a velocidade vertical

function move_snake() {
  // Create the new Snake's head
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  // Add the new head to the beginning of snake body
  snake.unshift(head);  
  const eaten_food = snake[0].x === food_x && snake[0].y === food_y;

  //se posicao = comida, aumenta tamanho e genera outra vez. Else dá pop como faria normalmente, continua apenas
  if(eaten_food){

    score = score + 1;
    document.getElementById('score').innerHTML = score;
    generate_food();

  } else {
    snake.pop();
  }
}

// Function that checks if the pressed key is a arrow direction. If it is, it changes the direction
function check_arrow(event){

    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    if(changing_direction) return;
    changing_direction = true;
    const keyPressed = event.keyCode;
    // Use this to check if the snake is moving in the reverse side
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    if(keyPressed === LEFT_KEY && !goingRight){
      dx = -10;
      dy = 0;
    }

    if(keyPressed === RIGHT_KEY && !goingLeft){
      dx = 10;
      dy = 0;
    }

    if(keyPressed === UP_KEY && !goingDown){
      dx = 0;
      dy = -10;
    }

    if(keyPressed === DOWN_KEY && !goingUp){
      dx = 0;
      dy = 10;
    }
}

    function game_lost(){

      //Se snake[0] == snake[i] quer dizer que a 
      //cabeça da cobra toca na cauda da mesma, e o jogo termina
      for(let i = 4; i < snake.length; i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
          return true;
        }
      }
      //when the snake touches a wall it ends the game
      //wall1
      for(let i2 = 0; i2 < wall1.length; i2++){
        if(snake[0].x === wall1[i2].x && snake[0].y === wall1[i2].y){
            return true;
        }
      }
      //wall2
      for(let i3 = 0; i3 < wall2.length; i3++){
        if(snake[0].x === wall2[i3].x && snake[0].y === wall2[i3].y){
            return true;
        }
      }
      //wall3
      for(let i4 = 0; i4 < wall3.length; i4++){
        if(snake[0].x === wall3[i4].x && snake[0].y === wall3[i4].y){
            return true;
        }
      }
      //wall4
      for(let i5 = 0; i5 < wall4.length; i5++){
        if(snake[0].x === wall4[i5].x && snake[0].y === wall4[i5].y){
            return true;
        }
      }
      //wall5
      for(let i6 = 0; i6 < wall5.length; i6++){
        if(snake[0].x === wall5[i6].x && snake[0].y === wall5[i6].y){
            return true;
        }
      }
      ///////////////////////////////////////////////////////////////
      //Se a cobra passar os limites do tabuleiro termina o jogo
      const HIT_LEFTWALL = snake[0].x < 0;
      const HIT_RIGHTWALL = snake[0].x > background.width - 10;
      const HIT_UPWALL = snake[0].y < 0;
      const HIT_DOWNWALL = snake[0].y > background.height - 10;

      return HIT_DOWNWALL || HIT_LEFTWALL || HIT_RIGHTWALL || HIT_UPWALL;
    }

    function game_win(){

    //when arrive 25 score it ends and the player win
      if(score === 25){
        return true;
        }
    }


