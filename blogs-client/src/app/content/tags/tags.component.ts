import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Tag} from "./tag";
import {TagService} from "./tag.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tag: Tag = new Tag;
  tags: Tag[] = [];

  constructor(private tagService: TagService) {
    this.tags = tagService.tags;
  }

  ngOnInit() {
  }

  onRemove(i: number) {
    this.tags.splice(i, 1);
  }

  onSubmit(formTag: NgForm) {
    this.tags.push(formTag.value);
    formTag.reset();
  }

}
