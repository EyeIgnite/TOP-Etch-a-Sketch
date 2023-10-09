const columns = document.getElementsByClassName('sketch-columns');
const gridContainer = document.querySelector('.grid-container');
const resizeBtn = document.querySelector('#resize');
const clearBtn = document.querySelector('#clear');
const eraserBtn = document.querySelector('#eraser');
const blackBtn = document.querySelector('#black');
const rgbBtn = document.querySelector('#rgb');
const greyScale = document.querySelector('#grey-scale');
const colorPicker = document.querySelector('#color-picker');
let  storedSize = { columns: 16, cells: 16 };
let input;

function handleEvent(behavior) {
  const cells = document.querySelectorAll('.cells');
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
      if (behavior === 'eraser') {
        cell.style.backgroundColor = 'white';
      }
     else if (behavior === 'black') {
        cell.style.backgroundColor = 'black';
      }
      else if (behavior === 'rgb') {
        cell.style.backgroundColor = randomColor();
      }
      else if (behavior === 'color-picker') {
        cell.style.backgroundColor = pickedColor;
      }
    });
  });
}

// Creates default grid
function baseGrid(column, cell) {
  makeColumns(column);
  makeCells(cell);
}

baseGrid(16, 16);
// Switches color to black when you mouseover each cell/square
handleEvent('black');

// Functions used to create the columns and cells in the DOM
function makeColumns(columnVal) {
  for (let i = 0; i < columnVal; i++) {
    let column = document.createElement('div');
    gridContainer.appendChild(column).classList.add('sketch-columns');
  }
}
function makeCells(cellVal) {
  for (let i = 0; i < columns.length; i++) {
    for (let c = 0; c < cellVal; c++) {
      let cell = document.createElement('div');
      columns[i].appendChild(cell).classList.add('cells');
    }
  }
}

resizeBtn.addEventListener('click', () => {
  // Repeats until a number between 1-100 is typed in
  while(true) {
    input = prompt('Enter a number from 1-100 for a new sketchpad!');
    // Exits function if user cancels the prompt 
    if (input === null) {
      return;
    }

    const numberInput = parseInt(input);
    // checks for input to be in the correct range
    if (numberInput >= 1 && numberInput <= 100) {
    break; 
    }
    else {
      alert('Please enter a valid number from 1 to 100');
    }
  };

  storedSize = { columns: input, cells: input }
  // Checks the length of gridContainer's children and removes them until none are left
  while (gridContainer.childNodes.length > 0) {
    gridContainer.removeChild(gridContainer.lastChild);
  }

  baseGrid(input, input);
  handleEvent('black');
});

clearBtn.addEventListener('click', () => {

  while (gridContainer.childNodes.length > 0) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  // Uses the stored grid values from user input to keep cells the same size after clearing
  baseGrid(storedSize.columns, storedSize.cells);
  handleEvent('black')
});
// Click event to turn cells from black to white on mouseover
eraserBtn.addEventListener('click', () => {
  handleEvent('eraser');
});

blackBtn.addEventListener('click', () => {
  handleEvent('black');
});
// Function for random rgb 
function randomColor() {
  // Store empty array
  let color = [];
  // Generates 3 random values for R, G, and B and pushes them into empty array
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  //Combines the above into one string 'rgb(num1, num2, num3);
  return 'rgb(' + color.join(', ') + ')';
}

rgbBtn.addEventListener('click', () => {
  handleEvent('rgb');
});

// Function for progressive darkening of a cell
function progressiveDarken(count) {
  // Uses whatever the current count value is * 10 and reduces that from the starting 100%
  const brightness = 100 - count * 10;
  // Hue, saturation, lightness where the l takes the value from the brightness variable
  return `hsl(0, 0%, ${brightness}%)`;
}

greyScale.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cells');
  cells.forEach((cell) => {
    // Initialize count to 0. Tracks how many times you've moused over a cell
    let mouseoverCount = 0;
    cell.addEventListener('mouseover', () => {
      // Incremements 1 to mouseoverCount on every mouseover. 10 is the max
      mouseoverCount = Math.min(mouseoverCount + 1, 10);
      const darkenedColor = progressiveDarken(mouseoverCount);
      cell.style.backgroundColor = darkenedColor;
    });
  });
});
// So when count is 1, the formula for the mouseover becomes '100 - (1 * 10)' resulting in a brightness change of -10%. And that continues each time you mouseover a cell adding 10% on each increment up to 10, eventually resulting in a fully black cell


colorPicker.addEventListener('input', () => {
  pickedColor = colorPicker.value;
  handleEvent('color-picker');
});