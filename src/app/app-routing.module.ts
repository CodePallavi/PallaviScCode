import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPostComponent } from './show-post/show-post.component';
import { AppComponent } from './app.component';
import { ShowAllComponent } from './show-all/show-all.component';


const routes: Routes = [  
 {
   path: 'showpost',
   component: ShowPostComponent
 },
 {
   path:'',
   component:ShowAllComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
