import {Injectable} from "@angular/core";
import {Tag} from "./tag";

@Injectable()
export class TagService {

  tags: Tag[] = [
    {nama: 'Java', id: 1},
    {nama: 'PHP', id: 2},
    {nama: 'Kotlin', id: 3},
    {nama: 'Ruby', id: 4},
    {nama: 'Python', id: 5},
  ];

}
