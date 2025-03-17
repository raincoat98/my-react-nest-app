import { ApiProperty } from '@nestjs/swagger';

export class CreateLikeDto {
  @ApiProperty({ description: '좋아요 상태', example: true })
  readonly liked: boolean;
}
