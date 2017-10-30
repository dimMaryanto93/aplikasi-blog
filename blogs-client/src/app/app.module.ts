import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'

import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import {TagsComponent} from './content/tags/tags.component';
import {TagService} from './content/tags/tag.service';
import {TopicsComponent} from './content/topics/topics.component';
import {TopicService} from './content/topics/topic.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    TagsComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TagService, TopicService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
