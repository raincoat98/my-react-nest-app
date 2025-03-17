import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('likes')
export class Like {
  @ApiProperty({ description: '좋아요 ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '좋아요 상태' })
  @Column()
  liked: boolean;
}
