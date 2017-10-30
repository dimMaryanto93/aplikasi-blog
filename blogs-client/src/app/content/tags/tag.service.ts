import {Injectable} from '@angular/core';
import {Tag} from './tag';
import {Http} from '@angular/http';

@Injectable()
export class TagService {

  constructor(private http: Http) {
  }

  tags: Tag[] = [
    {nama: 'Java', id: 1},
    {nama: 'PHP', id: 2},
    {nama: 'Kotlin', id: 3},
    {nama: 'Ruby', id: 4},
    {nama: 'Python', id: 5},
  ];

  getListOfTag(halaman: number) {
    return this.http.get('http://localhost:8080/api/tags/list', {
      params: {size: 5, page: halaman}
    });
  }

  submitNewTag(tag: Tag) {
    return this.http.post('http://localhost:8080/api/tags/submit', tag);
  }

  removeTagById(tag: Tag) {
    return this.http.post(`http://localhost:8080/api/tags/remove`, tag);
  }

}
