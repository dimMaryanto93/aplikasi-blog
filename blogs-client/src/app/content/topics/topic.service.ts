import {Topic} from './topic';
import {Injectable} from '@angular/core';

@Injectable()
export class TopicService {
  topics: Topic[] = [
    {title: 'Java Fundamental', tags: [], imgUrl: ''},
    {title: 'Java Core', tags: [], imgUrl: ''}
  ];
}
