// const rows = document.getElementsByClassName('grid-rows');
const gridContainer = document.querySelector('.grid-container');

function baseGrid(rows, columns) {
  makeRows(rows);
  makeColumns(columns);
}

function makeRows(rowVal) {
  for (let i = 0; i < rowVal; i++) {
    let row = document.createElement('div');
    gridContainer.appendChild(row).classList.add('grid-rows');
  }
}

function makeColumns(columnVal) {
  const rows = document.querySelectorAll('.grid-rows')
  rows.forEach((row) => {
    for (let c = 0; c < columnVal; c++) {
      let column = document.createElement('div');
      row.appendChild(column).classList.add('grid-column');
    }
  });
}

function newGrid(input) {
  const existingGridSize = 16 * 16;

  while (gridContainer.childNodes.length > 0) {
    gridContainer.removeChild(gridContainer.lastChild);
  }

  const newSize = Math.min(Math.max(parseInt(input), 1), 100)
}

const btn = document.querySelector('#clear');
btn.addEventListener('click', () => {
  let input;

  while(true) {
    input = prompt('Enter a number up to 100 for a new grid!');

    if (input === null) {
      return;
    }

    const numberInput = parseInt(input);

    if (numberInput >= 1 && numberInput <= 100) {
    break; 
    }
    else {
      alert('Please enter a valid number from 1 to 100');
    }
  };


  baseGrid();
  
  const item = document.querySelectorAll('.grid-column');
  item.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'black';
    });
  });
});

baseGrid(16, 16);

const item = document.querySelectorAll('.grid-column');
item.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'black';
  });
});


