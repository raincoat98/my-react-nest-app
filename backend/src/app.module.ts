import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LikesModule } from './likes/likes.module';
import { Like } from './likes/entities/like.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

// 데이터베이스 연결 정보:
// - 호스트: ww57403.synology.me
// - 포트: 5432
// - 사용자: raincoat
// - 데이터베이스: like
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [Like],
        synchronize: true,
        logging: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
      dataSourceFactory: async (options: DataSourceOptions) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    TypeOrmModule.forFeature([Like]),
    LikesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
