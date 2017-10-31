import {NgForm} from "@angular/forms";
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Tag} from "../../model/tag";
import {TagService} from "../../service/tag";
import {ListPage} from "./list/list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tag: Tag = new Tag;

  constructor(public navCtrl: NavController,
              private tagService: TagService) {

  }

  showMeTheCode(formTag: NgForm) {
    this.tagService.submitNewTag(this.tag).subscribe(
      data => {
        console.log(data)
      }, error => {
        console.error(error);
      }
    );
  }

  showOtherPage() {
    this.navCtrl.push(ListPage);
  }
}
