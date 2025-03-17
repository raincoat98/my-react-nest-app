import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';
import { CreateLikeDto } from './dto/create-like.dto';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private likesRepository: Repository<Like>,
  ) {}

  async createLike(createLikeDto: CreateLikeDto): Promise<Like> {
    const like = this.likesRepository.create(createLikeDto);
    return this.likesRepository.save(like);
  }

  async findAll(): Promise<number> {
    return this.likesRepository.count();
  }
}
