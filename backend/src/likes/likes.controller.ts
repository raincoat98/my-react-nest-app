import { Controller, Post, Body, Get } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Like } from './entities/like.entity';

@ApiTags('likes')
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  @ApiOperation({ summary: '좋아요 생성' })
  @ApiResponse({
    status: 201,
    description: '좋아요가 성공적으로 생성되었습니다.',
    type: Like,
  })
  async createLike(@Body() createLikeDto: CreateLikeDto) {
    console.log('createLikeDto', createLikeDto);
    return this.likesService.createLike(createLikeDto);
  }

  @Get()
  @ApiOperation({ summary: '모든 좋아요 조회' })
  @ApiResponse({
    status: 200,
    description: '좋아요 목록을 성공적으로 조회했습니다.',
    type: [Like],
  })
  async getAllLikes() {
    return this.likesService.findAll();
  }
}
