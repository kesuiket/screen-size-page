import { ItemList, Sort } from './types';
import { clear } from './clear';
import { createItemHtml } from './createHtml'

export function render (data: ItemList, sort: Sort) {
  clear();

  const table = document.getElementById('js-table');

  sort(data).forEach(item => {
    table!.appendChild(createItemHtml(item))
  });

  return table
}
