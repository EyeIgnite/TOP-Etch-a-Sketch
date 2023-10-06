const container = document.querySelector('#container');
// const rows = document.getElementsByClassName('grid-rows');


function baseGrid(rows, columns) {
  makeRows(rows);
  makeColumns(columns);
};

function makeRows(rowVal) {
  for (let i = 0; i < rowVal; i++) {
    let row = document.createElement('div');
    container.appendChild(row).classList.add('grid-rows');
  };
};

function makeColumns(columnVal) {
  const rows = document.querySelectorAll('.grid-rows');
  rows.forEach((row) => {
    for (let c = 0; c < columnVal; c++) {
      let column = document.createElement('div');
      row.appendChild(column).classList.add('grid-column');
    }
  });
}

const btn = document.querySelector('#clear');
btn.addEventListener('click', () => {
  let input;

  while(true) {
    input = prompt('Enter a value up to 100 for a new grid!');

    if (input === null) {
      break;
    }

    const numberInput = parseInt(input);

    if (!isNaN(numberInput) && numberInput >= 1 && numberInput <= 100) {
    break; 
    }
    else {
      alert('Please enter a valid number from 1 to 100');
    }
  };

  const existingGridSize = container.childElementCount;
  const newSize = parseInt(input);

  const rows = Math.sqrt((existingGridSize / 16) * newSize);
  const columns = Math.sqrt((existingGridSize / 16) * newSize);

  while (container.childNodes.length > 2) {
    container.removeChild(container.lastChild);
  }

  baseGrid(input);
  
  const item = document.querySelectorAll('.grid-column');
  item.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = 'black';
  });
});


});

baseGrid();

const item = document.querySelectorAll('.grid-column');
item.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = 'black';
  });
});


