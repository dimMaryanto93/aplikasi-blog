import {Component, OnInit} from '@angular/core';
import {Tag} from '../tags/tag';
import {TagService} from '../tags/tag.service';
import {NgForm} from '@angular/forms';
import {Topic} from './topic';
import {TopicService} from './topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topic: Topic = new Topic;
  tags: Tag[] = [];
  topics: Topic[] = [];

  constructor(private tagService: TagService,
              private topicService: TopicService) {
    this.tags = tagService.tags;
    this.topics = topicService.topics;
  }

  ngOnInit() {
  }

  onSubmit(formValue: NgForm) {
    this.topics.push(formValue.value);
    formValue.reset();
  }

}

