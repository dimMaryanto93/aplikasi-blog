import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Tag, TagContent} from './tag';
import {TagService} from './tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tag: Tag = new Tag;
  tagContent: TagContent = new TagContent;
  pages: number[];

  constructor(private tagService: TagService) {
    this.gotoPage();
  }

  ngOnInit() {
  }

  onRemove(t: Tag) {
    this.tagService.removeTagById(t).subscribe(
      data => {
        this.gotoPage();
      },
      error => {
        console.log(error);
      });
  }

  onSubmit(formTag: NgForm) {
    this.tagService.submitNewTag(this.tag).subscribe(
      data => {
        console.log(data);
        this.gotoPage();
      },
      error => {
        console.log(error);
      });
    formTag.reset();
  }

  gotoPage(page: number = 0) {
    this.pages = [];
    this.tagService.getListOfTag(page).subscribe(data => {
      this.tagContent = data.json();
      for (let i = 1; i <= this.tagContent.totalPages; i++) {
        this.pages.push(i);
      }
    }, error => {
      console.log(error);
    });
  }

}
