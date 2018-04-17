// Rover Object Goes Here
// ======================

// ======================

// Matriz 10 x10 
var grid = [];
for (var y = 0; y < 10; y++) {
  grid[y] = [];
  for (var x = 0; x < 10; x++) {
    grid[y][x] = " ";
  }
}

// Matriz con las posiciones del rover
var coorsRover = [];
for (var y = 0; y < 10; y++) {
  coorsRover[y] = [];
  for (var x = 0; x < 10; x++) {
    coorsRover[y][x] = 0;
  }
}
coorsRover[0][0] = 1;

// Objeto Rover
var rover = {
  position: [0, 0],
  direction: '▲',
  positionPrevious: [0, 0]
};

// Movimientos del rover
function turnLeft(){
  switch (rover.direction) {
    case '▲':
      rover.direction = "◄";
      break;
    case '►':
      rover.direction = "▲";
      break;
    case '▼':
      rover.direction = "►";
      break;
    case '◄':
      rover.direction = "▼";
      break;
  }
  positionRover();
  console.log("turnLeft was called!");
}

function turnRight(){
  switch (rover.direction) {
    case '▲':
      rover.direction = "►";
      break;
    case '►':
      rover.direction = "▼";
      break;
    case '▼':
      rover.direction = "◄";
      break;
    case '◄':
      rover.direction = "▲";
      break;
  }
  positionRover();
  console.log("turnRight was called!");
}

function positionRover() {
  grid[rover.position[0]][rover.position[1]] = rover.direction;
  if (!(rover.position[0] === rover.positionPrevious[0] && rover.position[1] === rover.positionPrevious[1])) {
    grid[rover.positionPrevious[0]][rover.positionPrevious[1]] = " ";
  }

  for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 10; x++) {
      var n = y + "" + x;
      var p = grid[y][x];
      document.getElementById(n).innerHTML = p;
    }
  }
}

function goForward() {
  rover.positionPrevious[0] = rover.position[0];
  rover.positionPrevious[1] = rover.position[1];

  switch (rover.direction) {
    case '▲':
      if (rover.position[0] > 0) {
        rover.position[0]--;
        coorsRover[rover.position[0]][rover.position[1]]++;
        positionRover();
      }
      break;
    case '►':
      if (rover.position[1] < 9) {
        rover.position[1]++;
        coorsRover[rover.position[0]][rover.position[1]]++;
        positionRover();
      }
      break;
    case '▼':
      if (rover.position[0] < 9) {
        rover.position[0]++;
        coorsRover[rover.position[0]][rover.position[1]]++;
        positionRover();
      }
      break;
    case '◄':
      if (rover.position[1] > 0) {
        rover.position[1]--;
        coorsRover[rover.position[0]][rover.position[1]]++;
        positionRover();
      }
      break;
  }
}

function goBackward() {
  rover.positionPrevious[0] = rover.position[0];
  rover.positionPrevious[1] = rover.position[1];

  switch (rover.direction) {
    case '▲':
      if (rover.position[0] < 9) {
        rover.position[0]++;
        coorsRover[rover.position[0]][rover.position[1]]++;
        positionRover();
      }
      break;
    case '►':
      if (rover.position[1] > 0) {
        rover.position[1]--;
        coorsRover[rover.position[0]][rover.position[1]]++;
        positionRover();
      }
      break;
    case '▼':
      if (rover.position[0] > 0) {
        rover.position[0]--;
        coorsRover[rover.position[0]][rover.position[1]]++;
        positionRover();
      }
      break;
    case '◄':
      if (rover.position[1] < 9) {
        rover.position[1]++;
        coorsRover[rover.position[0]][rover.position[1]]++;
        positionRover();
      }
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
}
