import { AppRoutingModule } from './app-routing.module';
import {NgModule} from '@angular/core';
import {ResumeComponent} from './resume/resume.component';
import {LinksComponent} from './links/links.component';
import {AboutComponent} from './about/about.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LinksComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
