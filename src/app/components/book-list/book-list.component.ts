import { Component, ViewChild, OnInit } from '@angular/core';

import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = new Array<Book>();
  open: Boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    // this.bookService.getAllBooks().subscribe(data => this.books = data);
    this.bookService.getAllBooks().then(data => this.books = data);
  }
  toggleForm() {
    this.open = !this.open;
  }
}