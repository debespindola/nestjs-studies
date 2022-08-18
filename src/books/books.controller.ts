import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: Book['id']): Book {
    return this.booksService.getBook(id);
  }
}
