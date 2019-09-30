import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerchComponent } from './serch/serch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BooksListComponent} from './books-list/books-list.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { BookDetailsComponent } from './books-list/book-details/book-details.component';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    SerchComponent,
    BooksListComponent,
    BookDetailsComponent,
    FilterCategoryComponent
  ],
  entryComponents: [BookDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    Ng2SearchPipeModule,
    MatGridListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
