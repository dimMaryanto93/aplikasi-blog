import {Http} from "@angular/http";
import {Tag} from "../model/tag";
import {Injectable} from "@angular/core";

@Injectable()
export class TagService {

  constructor(private http: Http) {
  }

  submitNewTag(tag: Tag) {
    return this.http.post('http://localhost:8080/api/tags/submit', tag);
  }

  getAllTags(){
    return this.http.get('http://localhost:8080/api/tags/list');
  }
}
