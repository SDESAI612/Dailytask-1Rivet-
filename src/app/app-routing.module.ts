import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmojiComponent } from './emoji/emoji.component';


const routes: Routes = [
  {
    path:"Dynamic",
    loadChildren: () => import('./dynamic/dynamic.module').then(m=>m.DynamicModule),
  },
   { path:"Pipe",
     component: EmojiComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
