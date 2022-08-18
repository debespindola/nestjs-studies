import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/book.dto';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.booksService.createBook(createBookDto);
  }

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: Book['id']): Book {
    return this.booksService.getBook(id);
  }
}
