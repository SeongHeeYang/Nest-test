import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `Input Id : ${id}`;
  }

  @Post()
  createMovie() {
    return 'Create a moive';
  }

  @Delete('/:id')
  removeMovie(@Param('id') id: string) {
    return `Remove a movie for ID : ${id}`;
  }
}
