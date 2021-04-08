import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmStrategyFactory } from './typeOrmStrategy/typeOrm.provider';

/**
 * Module d'injection de la connexion a la base
 * ce module aura pour but futur de permettre de mettre en place
 * un pattern d'injection stratégique afin de permettre d'utiliser
 * une bdd en mémoire type SQLlite afin de ne pas se connecter a la base
 * de dev, ou encore de prévoir une injection complete par des mocks des appels
 * a typeOrm (à étudier)
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return typeOrmStrategyFactory(config);
      },
    }),
  ],
})
export class DatabaseModule {}
