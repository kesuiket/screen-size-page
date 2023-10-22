export type Size =  {
  width: number;
  height: number;
}

export type AspectRatio = [number, number]

export type ItemData = {
  type: string;
  fullname: string;
  in: number;
  cm: Size;
  px: Size;
  aspect: AspectRatio[];
  pixels: number;
  note?: string;
  isPopular: boolean;
  isStandard: boolean;
}

export type ItemList = Array<ItemData>;

export type Sort = ([]: ItemList) => ItemList;