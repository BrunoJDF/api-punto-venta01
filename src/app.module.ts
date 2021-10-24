import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/config';
import { enviroments } from './config/enviroments';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    ProductsModule,
  ],
})
export class AppModule {}
