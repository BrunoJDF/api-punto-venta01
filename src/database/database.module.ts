import { Global, Module } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'pg';

import config from 'src/config/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { name, user, password, host, port } = configService.postgres;
        return {
          type: 'postgres',
          database: name,
          username: user,
          password,
          host,
          port,
          synchronize: true,
          autoLoadEntities: true,
        };
      }
    }),
  ],
  providers: [
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { name, user, password, host, port } = configService.postgres;

        const client = new Client({
          database: name,
          user: user,
          password: password,
          host: host,
          port: port,
        });

        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['PG'],
})
export class DatabaseModule { }
