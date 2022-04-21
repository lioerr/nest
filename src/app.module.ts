import { EggController } from './egg.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
        EggController, AppController],
  providers: [AppService],
})
export class AppModule {}
