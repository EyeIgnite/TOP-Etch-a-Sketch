const container = document.querySelector('#container');

function baseGrid() {
  makeRows(16);
  makeColumns(16);
}

function makeRows(rowVal) {
  for (let i = 0; i < rowVal; i++) {
    let row = document.createElement('div');
    container.appendChild(row).classList.add('gridRows');
  }
}
