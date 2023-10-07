const rows = document.getElementsByClassName('sketch-columns');
const gridContainer = document.querySelector('.grid-container');

function baseGrid(column, cell) {
  makeRows(column);
  makeColumns(cell);
};

baseGrid(16, 16);

const item = document.querySelectorAll('.cells');
item.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'black';
  });
});


function makeRows(columnVal) {
  for (let i = 0; i < columnVal; i++) {
    let row = document.createElement('div');
    gridContainer.appendChild(row).classList.add('sketch-columns');
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

  while (gridContainer.childNodes.length > 0) {
    gridContainer.removeChild(gridContainer.lastChild);
  }

  baseGrid(input, input);
  
  const item = document.querySelectorAll('.cells');
  item.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'black';
    });
  });
});



