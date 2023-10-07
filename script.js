const columns = document.getElementsByClassName('grid-column');
const gridContainer = document.querySelector('.grid-container');

function baseGrid(row, column) {
  makeRows(row);
  makeColumns(column);
}

baseGrid(16, 16);

const item = document.querySelectorAll('.grid-column');
item.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'black';
  });
});

function makeRows(rowVal) {
  for (let i = 0; i < rowVal; i++) {
    let row = document.createElement('div');
    gridContainer.appendChild(row).classList.add('grid-rows');
  }
}

function makeColumns(columnVal) {
  const rows = document.getElementsByClassName('grid-rows');
  rows.forEach((row) => {
    for (let c = 0; c < columnVal; c++) {
      let column = document.createElement('div');
      row.appendChild(column).classList.add('grid-column');
    }
  });
}

let input;

const btn = document.querySelector('#clear');
btn.addEventListener('click', () => {
  

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
  }
  while (gridContainer.childNodes.length > 0) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  resizeGrid(input); 
});

function resizeGrid(input) {
  makeRows(row);
  makeColumns(column);

    rows.style.flexBasis = `calc(100% / ${input})`;
    columns.style.flexBasis = `calc(100% / ${input})`;
  
  const item = document.querySelectorAll('.grid-column');
  item.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'black';
    });
  });
}



