const columns = document.getElementsByClassName('sketch-columns');
const gridContainer = document.querySelector('.grid-container');
let  storedSize = { columns: 16, cells: 16 };
let input;


// Creates default grid
function baseGrid(column, cell) {
  makeColumns(column);
  makeCells(cell);
};

baseGrid(16, 16);
// Switches color to black when you mouseover each cell/square
const item = document.querySelectorAll('.cells');
item.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'black';
  });
});

// Functions used to create the columns and cells in the DOM
function makeColumns(columnVal) {
  for (let i = 0; i < columnVal; i++) {
    let column = document.createElement('div');
    gridContainer.appendChild(column).classList.add('sketch-columns');
  };
};
function makeCells(cellVal) {
  for (let i = 0; i < columns.length; i++) {
    for (let c = 0; c < cellVal; c++) {
      let cell = document.createElement('div');
      columns[i].appendChild(cell).classList.add('cells');
    };
  };
};

// Click event to clear the current grid and replace it with user input
const resizeBtn = document.querySelector('#resize');
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
  // Adds mouseoever event to the newly created grid
  const item = document.querySelectorAll('.cells');
  item.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'black';
    });
  });
});

// Click event to clear the current grid of all colour
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {

  while (gridContainer.childNodes.length > 0) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  // Uses the stored grid values from user input to keep cells the same size after clearing
  baseGrid(storedSize.columns, storedSize.cells);

  const item = document.querySelectorAll('.cells');
  item.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'black';
    });
  });
});
// Click event to turn all cells from black to white on mouseover
const eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click', () => {
  const item = document.querySelectorAll('.cells');
  item.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'white';
    });
  });
})

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', () => {
  const item = document.querySelectorAll('.cells');
  item.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'black';
    });
  });
})

const rgbBtn = document.querySelector('#rgb');
rgbBtn.addEventListener('click', () => {
  const item = document.querySelectorAll('.cells');
})