import {
  Param,
  Controller,
  Body,
  NotImplementedException,
  UnauthorizedException,
  Post,
  Get,
  Delete,
} from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { RatingService } from './rating.service';
import { RatingDto } from './rating.dto';

@ApiBearerAuth()
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
  @ApiBody({ type: RatingDto })
  @ApiResponse({
    status: '2XX',
    description: 'rating was created',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async createRating(@Body() dto: RatingDto): Promise<RatingDto> {
    throw new NotImplementedException();
  }

  @Delete('/deleteRating')
  @ApiOperation({
    summary: 'delete rating',
  })
  @ApiResponse({
    status: '2XX',
    description: 'rating was created',
  })
  @ApiBadRequestResponse({ description: 'bad request' })
  async deleteRating(@Param('rating id') id: number): Promise<RatingDto> {
    throw new NotImplementedException();
  }
}
