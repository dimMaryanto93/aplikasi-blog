import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  namaAnda: string;
  id: number;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(formTag: NgForm) {
    // kirim suatu nilai
    console.log(formTag.value);
  }

}
