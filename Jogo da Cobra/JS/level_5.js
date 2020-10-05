// Constante canvas 2d para criação dos objetos
const background = document.getElementById("Mycanvas");
const snake_ctx = background.getContext("2d");

// Posição inicial da cobra, tamanho = 5
let snake = [ {x: 60, y: 20},  
            {x: 50, y: 20},  
            {x: 40, y: 20},  
            {x: 30, y: 20},  
            {x: 20, y: 20},];

//Walls inside the square
let wall1 =[{x: 210, y: 100},
            {x: 200, y: 100},
            {x: 310, y: 200},
            {x: 310, y: 210},
            {x: 90, y: 200},
            {x: 90, y: 210},
          //
          {x: 30, y: 40},
          {x: 30, y: 50},
          {x: 40, y: 40},
          {x: 50, y: 40},
          {x: 30, y: 60},
        //
          {x: 370, y: 40},
          {x: 370, y: 50},
          {x: 360, y: 40},
          {x: 350, y: 40},
          {x: 370, y: 60},
        //
          {x: 370, y: 360},
          {x: 370, y: 350},
          {x: 360, y: 360},
          {x: 350, y: 360},
          {x: 370, y: 340},
        //
          {x: 30, y: 360},
          {x: 30, y: 350},
          {x: 40, y: 360},
          {x: 50, y: 360},
          {x: 30, y: 340},];

let wall2 = [{x: 60, y: 130},
            {x: 60, y: 120},
            {x: 60, y: 110},
            {x: 60, y: 100},
            {x: 60, y: 90},
            {x: 60, y: 80},
            {x: 60, y: 70},
            {x: 60, y: 140},
            {x: 60, y: 150},
            {x: 60, y: 160},
            {x: 60, y: 170},
            {x: 60, y: 180},
            {x: 60, y: 190},
            {x: 60, y: 200},
            {x: 60, y: 210},
            {x: 60, y: 220},
            {x: 60, y: 230},
            {x: 60, y: 240},
            {x: 60, y: 250},
            {x: 60, y: 260},
            {x: 60, y: 270},
            {x: 60, y: 280},
            {x: 60, y: 290},
            {x: 60, y: 300},
            {x: 60, y: 310},
            {x: 60, y: 320},
            {x: 60, y: 330},
          //
            {x: 70, y: 70},
            {x: 80, y: 70},
            {x: 90, y: 70},
            {x: 100, y: 70},
            {x: 110, y: 70},
            {x: 120, y: 70},
            {x: 130, y: 70},
            {x: 140, y: 70},
            {x: 150, y: 70},
            {x: 160, y: 70},
            {x: 170, y: 70},
            {x: 180, y: 70},
            {x: 190, y: 70},
            {x: 220, y: 70},
            {x: 230, y: 70},
            {x: 240, y: 70},
            {x: 250, y: 70},
            {x: 260, y: 70},
            {x: 270, y: 70},
            {x: 280, y: 70},
            {x: 290, y: 70},
            {x: 300, y: 70},
            {x: 310, y: 70},
            {x: 320, y: 70},
            {x: 330, y: 70},
          //
            {x: 340, y: 130},
            {x: 340, y: 120},
            {x: 340, y: 110},
            {x: 340, y: 100},
            {x: 340, y: 90},
            {x: 340, y: 80},
            {x: 340, y: 70},
            {x: 340, y: 140},
            {x: 340, y: 150},
            {x: 340, y: 160},
            {x: 340, y: 170},
            {x: 340, y: 180},
            {x: 340, y: 190},
            {x: 340, y: 200},
            {x: 340, y: 210},
            {x: 340, y: 220},
            {x: 340, y: 230},
            {x: 340, y: 240},
            {x: 340, y: 250},
            {x: 340, y: 260},
            {x: 340, y: 270},
            {x: 340, y: 280},
            {x: 340, y: 290},
            {x: 340, y: 300},
            {x: 340, y: 310},
            {x: 340, y: 320},
            {x: 340, y: 330},
          //
            {x: 70, y: 330},
            {x: 80, y: 330},
            {x: 90, y: 330},
            {x: 100, y: 330},
            {x: 110, y: 330},
            {x: 120, y: 330},
            {x: 130, y: 330},
            {x: 140, y: 330},
            {x: 150, y: 330},
            {x: 160, y: 330},
            {x: 170, y: 330},
            {x: 180, y: 330},
            {x: 190, y: 330},
            {x: 220, y: 330},
            {x: 230, y: 330},
            {x: 240, y: 330},
            {x: 250, y: 330},
            {x: 260, y: 330},
            {x: 270, y: 330},
            {x: 280, y: 330},
            {x: 290, y: 330},
            {x: 300, y: 330},
            {x: 310, y: 330},
            {x: 320, y: 330},
            {x: 330, y: 330},];

let wall3 = [{x: 120, y: 120},
            {x: 130, y: 120},
            {x: 140, y: 120},
            {x: 150, y: 120},
            {x: 160, y: 120},
            {x: 170, y: 120},
            {x: 180, y: 120},
            {x: 190, y: 120},
            {x: 200, y: 120},
            {x: 210, y: 120},
            {x: 220, y: 120},
            {x: 230, y: 120},
            {x: 240, y: 120},
            {x: 250, y: 120},
            {x: 260, y: 120},
            {x: 270, y: 120},
            {x: 280, y: 120},
          //
            {x: 280, y: 130},
            {x: 280, y: 140},
            {x: 280, y: 150},
            {x: 280, y: 160},
            {x: 280, y: 170},
            {x: 280, y: 180},
            {x: 280, y: 190},
            {x: 280, y: 220},
            {x: 280, y: 230},
            {x: 280, y: 240},
            {x: 280, y: 250},
            {x: 280, y: 260},
            {x: 280, y: 270},
            {x: 280, y: 280},
          //
            {x: 120, y: 280},
            {x: 130, y: 280},
            {x: 140, y: 280},
            {x: 150, y: 280},
            {x: 160, y: 280},
            {x: 170, y: 280},
            {x: 180, y: 280},
            {x: 190, y: 280},
            {x: 200, y: 280},
            {x: 210, y: 280},
            {x: 220, y: 280},
            {x: 230, y: 280},
            {x: 240, y: 280},
            {x: 250, y: 280},
            {x: 260, y: 280},
            {x: 270, y: 280},
            {x: 280, y: 280},
          //
            {x: 120, y: 130},
            {x: 120, y: 140},
            {x: 120, y: 150},
            {x: 120, y: 160},
            {x: 120, y: 170},
            {x: 120, y: 180},
            {x: 120, y: 190},
            {x: 120, y: 220},
            {x: 120, y: 230},
            {x: 120, y: 240},
            {x: 120, y: 250},
            {x: 120, y: 260},
            {x: 120, y: 270},
            {x: 120, y: 280},];

let wall4 = [{x: 120, y: 250},];

let wall5 = [ {x: 180, y: 200},
             {x: 190, y: 200},
             {x: 180, y: 190},
             {x: 200, y: 200},
             {x: 210, y: 200},
             {x: 220, y: 200},
             {x: 220, y: 210},
             {x: 220, y: 220},
             {x: 220, y: 230},
             {x: 220, y: 240},
             {x: 210, y: 240},
             {x: 200, y: 240},
             {x: 190, y: 240},
             {x: 180, y: 240},
             {x: 180, y: 180},
             {x: 180, y: 170},
             {x: 180, y: 160},
             {x: 190, y: 160},
             {x: 190, y: 160},
             {x: 200, y: 160},
             {x: 210, y: 160},
             {x: 220, y: 160},]
            

let wall6 = [ {x: 80, y: 310},];

let wall7 = [ {x: 80, y: 90},];

let wall8 = [ {x: 320, y: 90},
];

let wall9 = [ {x: 320, y: 310},];

let wall10 = [ {x: 210, y: 300},
              {x: 200, y: 300},];
    
// Velocidade horizontal
let dx = 10;
// Velocidade vertical
let dy = 0;

//Coordenadas do alimento da cobra
let food_x;
let food_y;

let contador = 1;

let score = 0;

let changing_direction = false;

main();

generate_food();

document.addEventListener("keydown", check_arrow);

let losegame = "You Lost. Refresh to play again.";
let wingame = "You passed the level 5. ";

//A funcao main repete-se e por isso a setTimeout é chamada vezes infinitas

function main() {

    let contador = 1;

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
  drawWall6();
  drawWall7();
  drawWall8();
  drawWall9();
  drawWall10();
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
    snake_ctx.fillStyle = '#666666';  
    snake_ctx.strokeStyle = 'black';
    snake_ctx.fillRect(wall1Part.x, wall1Part.y, 10, 10);  
    snake_ctx.strokeRect(wall1Part.x, wall1Part.y, 10, 10);
}

function drawWall1() {  
    wall1.forEach(drawWallPart);
  }

function drawWall2Part(wall2Part){
    snake_ctx.fillStyle = '#666666';  
    snake_ctx.strokeStyle = 'black';
    snake_ctx.fillRect(wall2Part.x, wall2Part.y, 10, 10);  
    snake_ctx.strokeRect(wall2Part.x, wall2Part.y, 10, 10);
}

function drawWall2() {  
    wall2.forEach(drawWall2Part);
  }

function drawWall3Part(wall3Part){
    snake_ctx.fillStyle = '#666666';  
    snake_ctx.strokeStyle = 'black';
    snake_ctx.fillRect(wall3Part.x, wall3Part.y, 10, 10);  
    snake_ctx.strokeRect(wall3Part.x, wall3Part.y, 10, 10);
}

function drawWall3() {  
    wall3.forEach(drawWall3Part);
  }

function drawWall4Part(wall4Part){
    snake_ctx.fillStyle = '#666666';  
    snake_ctx.strokeStyle = 'black';
    snake_ctx.fillRect(wall4Part.x, wall4Part.y, 10, 10);  
    snake_ctx.strokeRect(wall4Part.x, wall4Part.y, 10, 10);
}

function drawWall4() {  
    wall4.forEach(drawWall4Part);
  }

  function drawWall5Part(wall5Part){
    snake_ctx.fillStyle = '#666666';  
    snake_ctx.strokeStyle = 'black';
    snake_ctx.fillRect(wall5Part.x, wall5Part.y, 10, 10);  
    snake_ctx.strokeRect(wall5Part.x, wall5Part.y, 10, 10);
}

function drawWall5() {  
    wall5.forEach(drawWall5Part);
  }

function drawWall6Part(wall6Part){
    snake_ctx.fillStyle = '#666666';  
    snake_ctx.strokeStyle = 'black';
    snake_ctx.fillRect(wall6Part.x, wall6Part.y, 10, 10);  
    snake_ctx.strokeRect(wall6Part.x, wall6Part.y, 10, 10);
}

function drawWall6() {  
    wall6.forEach(drawWall6Part);
  }


function drawWall7Part(wall7Part){
    snake_ctx.fillStyle = '#666666';  
    snake_ctx.strokeStyle = 'black';
    snake_ctx.fillRect(wall7Part.x, wall7Part.y, 10, 10);  
    snake_ctx.strokeRect(wall7Part.x, wall7Part.y, 10, 10);
}

function drawWall7() {  
    wall7.forEach(drawWall7Part);
  }

function drawWall8Part(wall8Part){
    snake_ctx.fillStyle = '#666666';  
    snake_ctx.strokeStyle = 'black';
    snake_ctx.fillRect(wall8Part.x, wall8Part.y, 10, 10);  
    snake_ctx.strokeRect(wall8Part.x, wall8Part.y, 10, 10);
}

function drawWall8() {  
    wall8.forEach(drawWall8Part);
  }

function drawWall9Part(wall9Part){
    snake_ctx.fillStyle = '#666666';  
    snake_ctx.strokeStyle = 'black';
    snake_ctx.fillRect(wall9Part.x, wall9Part.y, 10, 10);  
    snake_ctx.strokeRect(wall9Part.x, wall9Part.y, 10, 10);
}

function drawWall9() {  
    wall9.forEach(drawWall9Part);
  }

function drawWall10Part(wall10Part){
    snake_ctx.fillStyle = '#666666';  
    snake_ctx.strokeStyle = 'black';
    snake_ctx.fillRect(wall10Part.x, wall10Part.y, 10, 10);  
    snake_ctx.strokeRect(wall10Part.x, wall10Part.y, 10, 10);
}

function drawWall10() {  
    wall10.forEach(drawWall10Part);
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

  wall6.forEach(function has_snake_eaten_food(part6){
    const has_eaten6 = part6.x == food_x && part6.y == food_y;

    //Se a food estiver em cima da parede 5 volta a gerar
    if(has_eaten6){
      generate_food();
    }
  });

  wall7.forEach(function has_snake_eaten_food(part7){
    const has_eaten7 = part7.x == food_x && part7.y == food_y;

    //Se a food estiver em cima da parede 5 volta a gerar
    if(has_eaten7){
      generate_food();
    }
  });

  wall8.forEach(function has_snake_eaten_food(part8){
    const has_eaten8 = part8.x == food_x && part8.y == food_y;

    //Se a food estiver em cima da parede 5 volta a gerar
    if(has_eaten8){
      generate_food();
    }
  });
  wall10.forEach(function has_snake_eaten_food(part9){
    const has_eaten9 = part9.x == food_x && part9.y == food_y;

    //Se a food estiver em cima da parede 5 volta a gerar
    if(has_eaten9){
      generate_food();
    }
  });
}

 // draw a border around the canvas
 function clearCanvas() {
  //  Select the colour to fill the drawing
  snake_ctx.fillStyle = '#862d2d';
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
      //wall6
      for(let i7 = 0; i7 < wall6.length; i7++){
        if(snake[0].x === wall6[i7].x && snake[0].y === wall6[i7].y){
            return true;
        }
      }
      //wall7
      for(let i8 = 0; i8 < wall7.length; i8++){
        if(snake[0].x === wall7[i8].x && snake[0].y === wall7[i8].y){
            return true;
        }
      }
      //wall8
      for(let i9 = 0; i9 < wall8.length; i9++){
        if(snake[0].x === wall8[i9].x && snake[0].y === wall8[i9].y){
            return true;
        }
      }
      //wall9
      for(let i10 = 0; i10 < wall9.length; i10++){
        if(snake[0].x === wall9[i10].x && snake[0].y === wall9[i10].y){
            return true;
        }
      }
      //wall10
      for(let i11 = 0; i11 < wall10.length; i11++){
        if(snake[0].x === wall10[i11].x && snake[0].y === wall10[i11].y){
            return true;
        }
      }
      //////////////////////////////////////////////////////////////
      //Se a cobra passar os limites do tabuleiro termina o jogo
      const HIT_LEFTWALL = snake[0].x < 0;
      const HIT_RIGHTWALL = snake[0].x > background.width - 10;
      const HIT_UPWALL = snake[0].y < 0;
      const HIT_DOWNWALL = snake[0].y > background.height - 10;

      return HIT_DOWNWALL || HIT_LEFTWALL || HIT_RIGHTWALL || HIT_UPWALL;
    }

    function game_win(){

    //when arrive 25 score it ends and the player win
      if(score === 40){
        return true;
        }
    }


