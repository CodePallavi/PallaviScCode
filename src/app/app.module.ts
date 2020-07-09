import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatasvcService } from './service/datasvc.service'
import { HttpClientModule } from '@angular/common/http';
import { ShowPostComponent } from './show-post/show-post.component';
import { ShowAllComponent } from './show-all/show-all.component'

@NgModule({
  declarations: [
    AppComponent,
    ShowPostComponent,
    ShowAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ DatasvcService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
