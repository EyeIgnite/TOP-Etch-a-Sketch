const rows = document.getElementsByClassName('sketch-columns');
const gridContainer = document.querySelector('.grid-container');

// Creates default 16x16 grid
function baseGrid(column, cell) {
  makeRows(column);
  makeColumns(cell);
};

baseGrid(16, 16);
// Switches color to black when you mouseover each div
const item = document.querySelectorAll('.cells');
item.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'black';
  });
});

// Functions used in baseGrid() to create the default
function makeRows(columnVal) {
  for (let i = 0; i < columnVal; i++) {
    let column = document.createElement('div');
    gridContainer.appendChild(column).classList.add('sketch-columns');
  };
};
function makeColumns(cellVal) {
  for (let i = 0; i < rows.length; i++) {
    for (let c = 0; c < cellVal; c++) {
      let cell = document.createElement('div');
      rows[i].appendChild(cell).classList.add('cells');
    };
  };
};
// Button event to clear the current grid
const btn = document.querySelector('#clear');
btn.addEventListener('click', () => {
  let input;
  // Repeats until a number between 1-100 typed in
  while(true) {
    input = prompt('Enter a number from 1-100 to create a new grid with those dimensions!');
    // Exits function is user hits cancel on the prompt
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



// Eraser is easy enough. Just add a click event to the button that changes each item to white
