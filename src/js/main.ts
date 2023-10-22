import { render } from './render'
import { sortByPixels } from './sort'

const indexJson = 'data/index.json';

console.log('start');

function main () {
  console.log('main');
  window.fetch(indexJson).then(res => {
    return res.json();
  }).then(json => {
    console.log(json);
    render(json, sortByPixels);
  })
}

document.addEventListener('DOMContentLoaded', main, false);