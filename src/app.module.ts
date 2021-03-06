import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { PlayerController } from './player/player.controller';
import { PlayerService } from './player/player.service';
import { Player } from './player/player.entity';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'containers-us-west-44.railway.app',
    port: 6083,
    username: 'root',
    password: 'W2WahUh61gs4h1VNsAql',
    database: 'railway',
    entities: [Player],
    synchronize: true,
  }),
    TypeOrmModule.forFeature([Player]),
    ItemsModule
  ],
  controllers: [AppController, PlayerController],
  providers: [ PlayerService],
})
export class AppModule {}
