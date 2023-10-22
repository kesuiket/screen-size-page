export function clear () {
  Array.from(document.getElementsByClassName('row')).forEach(rowElement => {
    rowElement.remove();
  })
}