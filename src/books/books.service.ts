import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateBookDto } from './dto/book.dto';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  createBook(book: CreateBookDto) {
    const newBook = {
      id: uuid(),
      ...book,
    };

    this.books.push(newBook);

    return newBook;
  }

  getAllBooks(): Book[] {
    return this.books;
  }

  getBook(bookId: Book['id']) {
    return this.books.find((book) => book.id === bookId);
  }
}
