import {
  Param,
  Controller,
  Body,
  Post,
  Get,
  Delete,
  ParseIntPipe,
  NotFoundException,
  UseFilters,
} from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RatingService } from './rating.service';
import { RatingEntity } from './rating.entity';
import { CreateRatingDto } from './create-rating.dto';
import { ValidationExceptionFilter } from '../validation/validationExceptionFilter';

@ApiBearerAuth()
@UseFilters(new ValidationExceptionFilter())
@ApiTags('rating')
@Controller('rating')
export class RatingController {
  private readonly ratingService: RatingService;

  constructor(ratingService: RatingService) {
    this.ratingService = ratingService;
  }

  @Post('/createRating')
  @ApiOperation({
    summary: 'create rating',
  })
  @ApiCreatedResponse({ type: RatingEntity })
  @ApiResponse({
    status: '2XX',
    description: 'rating was created',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  createRating(@Body() dto: CreateRatingDto) {
    return this.ratingService.create(dto);
  }

  @Get('/allRatings')
  @ApiOperation({
    summary: 'find all ratings',
  })
  @ApiResponse({
    status: '2XX',
    description: 'ratings were found',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  findAllRatings() {
    return this.ratingService.findAll();
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'delete rating',
  })
  @ApiResponse({
    status: '2XX',
    description: 'rating was deleted',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  deleteRating(@Param('rating id', ParseIntPipe) id: number) {
    return this.ratingService.remove(id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'find one rating',
  })
  @ApiResponse({
    status: '2XX',
    description: 'rating was found',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async findRating(@Param('rating id', ParseIntPipe) id: number) {
    return this.ratingService.findOne(id);
  }
}
