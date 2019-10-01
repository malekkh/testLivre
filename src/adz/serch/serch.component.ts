import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serch',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})
export class SerchComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

/*
  OnSearch(){
    this.livreService.getBooks(this.search)
        .subscribe((data) => {
            this.books = data.items
            //console.log(data)
        });
        
  }
*/


}
