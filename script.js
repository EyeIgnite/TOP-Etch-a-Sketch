const container = document.querySelector('#container');
let rows = document.getElementsByClassName('row');
let columns = document.getElementsByClassName('column');

function grid() {
  makeRows(16);
  makeColumns(16);
}

function makeRows(rowVal) {
  for (let r = 0; r < rowVal; r++) {
    let row = document.createElement('div');
    container.appendChild(row).className('row');
  }
}