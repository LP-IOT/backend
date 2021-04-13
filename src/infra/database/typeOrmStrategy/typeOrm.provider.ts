import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmStrategyFactory = (configService: ConfigService) =>
  ({
    type: 'mariadb',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    username: "deploy",
    password: "deploy",
    database: "backend",
    entities: [join(__dirname, '../../..', '/**/*.entity{.ts,.js}')],
    synchronize: true,
    charset: 'utf8mb4',
    logging: true,
  } as TypeOrmModuleOptions);

