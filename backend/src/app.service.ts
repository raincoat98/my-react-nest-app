import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './likes/entities/like.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Like)
    private likesRepository: Repository<Like>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async testDatabaseConnection(): Promise<string> {
    try {
      await this.likesRepository.query('SELECT 1');
      return 'Database connected successfully!';
    } catch (error: unknown) {
      if (error instanceof Error) {
        return `Database connection failed: ${error.message}`;
      }
      return 'Database connection failed';
    }
  }
}
