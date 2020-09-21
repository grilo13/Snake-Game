// Constante canvas 2d para criação dos objetos
const background = document.getElementById("Mycanvas");
const snake_ctx = background.getContext("2d");

// Posição inicial da cobra, tamanho = 5
let snake = [ {x: 200, y: 200},  
              {x: 190, y: 200},  
              {x: 180, y: 200},  
              {x: 170, y: 200},  
              {x: 160, y: 200},];

// Velocidade horizontal
let dx = 10;
// Velocidade vertical
let dy = 0;

main();

//A funcao main repete-se e por isso a setTimeout é chamada vezes infinitas

function main() {

  setTimeout(function onTick(){

  clearCanvas();
  move_snake();
  drawSnake();

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

 // draw a border around the canvas
 function clearCanvas() {
  //  Select the colour to fill the drawing
  snake_ctx.fillStyle = "white";
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
  snake.pop();
}

