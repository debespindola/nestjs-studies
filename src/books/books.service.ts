import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  getAllBooks(): Book[] {
    return this.books;
  }

  getBook(bookId: Book['id']) {
    return this.books.find((book) => book.id === bookId);
  }
}
