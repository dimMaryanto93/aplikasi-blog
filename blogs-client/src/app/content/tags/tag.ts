export class Tag {
  id: number;
  nama: string;
}

export class TagContent {
  content: Tag[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  first: number;
  size: number;
  number: number;
}
