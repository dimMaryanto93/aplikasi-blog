import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Tag} from "../../../model/tag";
import {NavParams, ViewController} from "ionic-angular";
import {TagService} from "../../../service/tag";

@Component({
  selector: 'detail-page',
  templateUrl: 'detail.html'
})
export class DetailPage {
  tag: Tag = new Tag;

  constructor(private navParam: NavParams,
              private tagService: TagService,
              private viewCtrl: ViewController) {
    // console.log(this.navParam.data);
    this.tag = this.navParam.data;
  }

  onUpdate(formTag: NgForm) {
    this.tagService.submitNewTag(this.tag).subscribe(data => {
      console.log(data);
      this.viewCtrl.dismiss();
    }, eror => {
      console.log(eror);
    });
  }
}
