import { Module } from '@nestjs/common';
import { DolgozoService } from './dolgozo.service';
import { DolgozoController } from './dolgozo.controller';

@Module({
  controllers: [DolgozoController],
  providers: [DolgozoService],
})
export class DolgozoModule {}
