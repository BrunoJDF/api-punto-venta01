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
        //const { name, user, password, host, port } = configService.postgres;
        const url = configService.postgresUrl;
        return {
          type: 'postgres',
          /*database: name,
          username: user,
          password,
          host,
          port,*/
          url,
          ssl: {
            rejectUnauthorized: false,
          },
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
        //const { name, user, password, host, port } = configService.postgres;
        const url = configService.postgresUrl;

        const client = new Client({
          /*database: name,
          user: user,
          password: password,
          host: host,
          port: port,*/
          connectionString: url,
          ssl: {
            rejectUnauthorized: false,
          },
        });

        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['PG', TypeOrmModule],
})
export class DatabaseModule { }
