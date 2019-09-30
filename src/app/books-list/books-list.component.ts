import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LivreService } from '../livre.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsComponent } from './book-details/book-details.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  searchText;
  books;
  backupBooks;
  q:string;
  data : [];
  category=[];
  values = '';

  constructor(private route:ActivatedRoute,private router :Router, private livreService:LivreService, public dialog: MatDialog) { 
    
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {

      this.q = params.q;
      console.log(this.q); 
    });

    this.livreService.SearchBooks(this.q )
        .subscribe((data: any) => {
            this.books = data.items
            this.backupBooks=JSON.parse(JSON.stringify(this.books));
            console.log(data)
            this.getCategories(data.items);
        
        });

        
        
  }    
  getCategories(data){
  data.map(book=>{
    if(book.volumeInfo.categories){
    if(this.category.map(c => c.name).indexOf(book.volumeInfo.categories[0])===-1)
      this.category.push({
        name:book.volumeInfo.categories[0]
      })
    }
    });
  }

  navigate() {
    this.router.navigateByUrl('/search');
 }

 openDialog(book) {
  const dialogRef = this.dialog.open(BookDetailsComponent,{
    data :book
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

filterCategory(event){
  this.books = JSON.parse(JSON.stringify(this.backupBooks)).filter((book) => {
    return book.volumeInfo.categories[0]===event }
  );
}
}


