import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component';
import { ContentComponent } from './content/content.component';
import { services } from './services/service.constants';
import { PostsService } from './services/posts.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewpostComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:services.AccountServiceEndpointAddress, useValue:"http://localhost:54314/mockup/home" },
    {provide:PostsService, useClass:PostsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
