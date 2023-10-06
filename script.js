const container = document.querySelector('#container');
const rows = document.getElementsByClassName('grid-rows');


function baseGrid() {
  makeRows(16);
  makeColumns(16);
}

function makeRows(rowVal) {
  for (let i = 0; i < rowVal; i++) {
    let row = document.createElement('div');
    container.appendChild(row).classList.add('grid-rows');
  };
};

function makeColumns(columnVal) {
  for (let i = 0; i < rows.length; i++) {
    for (let c = 0; c < columnVal; c++) {
      let column = document.createElement('div');
      rows[i].appendChild(column).classList.add('grid-column');
    };
  };
};

baseGrid();