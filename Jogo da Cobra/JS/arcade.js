// Constante canvas 2d para criação dos objetos
const background = document.getElementById("Mycanvas");
const snake_ctx = background.getContext("2d");

var mySound;

// Posição inicial da cobra, tamanho = 5
let snake = [ {x: 110, y: 40},  
              {x: 100, y: 40},  
              {x: 90, y: 40},  
              {x: 80, y: 40},  
              {x: 70, y: 40},];


// Velocidade horizontal
let dx = 10;
// Velocidade vertical
let dy = 0;

//Coordenadas do alimento da cobra
let food_x;
let food_y;

let score = 0;

let changing_direction = false;

main();

generate_food();

document.addEventListener("keydown", check_arrow);

let losegame = "You Lost. Refresh to play again.";

//A funcao main repete-se e por isso a setTimeout é chamada vezes infinitas

function main() {

  //Se alguma condição para o jogo acabar acontecer, jogo para (acaba)
  if(game_lost()){

    document.getElementById('losegame').innerHTML = losegame;

    return;
  } 

  changing_direction = false;

  setTimeout(function onTick(){
  clearCanvas();
  drawFood();
  move_snake();
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
}

 // draw a border around the canvas
 function clearCanvas() {
  //  Select the colour to fill the drawing
  snake_ctx.fillStyle = '#d6f5d6';
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

      ///////////////////////////////////////////////////////////////
      //Se a cobra passar os limites do tabuleiro termina o jogo
      const HIT_LEFTWALL = snake[0].x < 0;
      const HIT_RIGHTWALL = snake[0].x > background.width - 10;
      const HIT_UPWALL = snake[0].y < 0;
      const HIT_DOWNWALL = snake[0].y > background.height - 10;

      return HIT_DOWNWALL || HIT_LEFTWALL || HIT_RIGHTWALL || HIT_UPWALL;
    }


