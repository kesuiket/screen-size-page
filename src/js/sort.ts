import { ItemList } from "./types";

export function sortByPixels (data: ItemList): ItemList {
  return data.sort((a, b) => {
    return (a.pixels > b.pixels) ? 1 : -1;
  })
}