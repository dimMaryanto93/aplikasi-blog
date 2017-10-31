import {Component} from "@angular/core";
import {ModalController} from "ionic-angular";

import {TagService} from "../../../service/tag";
import {Tag} from "../../../model/tag";
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  daftarTag: Tag[] = [];

  constructor(private tagService: TagService,
              private modalCtrl: ModalController) {
    this.tagService.getAllTags().subscribe(
      data => {
        // console.log(data.json().content);
        this.daftarTag = data.json().content;
      }, error => {
        console.log(error);
      }
    );
  }

  showDetailPage(t: Tag) {
    const md = this.modalCtrl.create(DetailPage, t);
    md.present();
  }
}
