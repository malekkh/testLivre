import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.book=this.data;
  }

}
