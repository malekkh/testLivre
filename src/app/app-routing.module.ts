import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerchComponent } from './serch/serch.component';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [
  { path: 'search', component: SerchComponent },
  { path: 'booksList', component: BooksListComponent },
  { path: '**', redirectTo: 'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
