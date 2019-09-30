import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.css']
})
export class FilterCategoryComponent implements OnInit {
  @Input() category:any;

  @Output() keyWord = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
changeValue(event){
  const key = event.value;
  this.keyWord.emit(key);
}
}
