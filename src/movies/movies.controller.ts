import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

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

  // put == all resorce
  @Put('/:id')
  putMovie(@Param('id') id: string) {
    return `Put Movie ${id}`;
  }

  // patch == parts resorce
  @Patch('/:id')
  patchMovie(@Param('id') id: string) {
    return `Patch Movie ${id}`;
  }
}
