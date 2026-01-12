import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DolgozoModule } from './dolgozo/dolgozo.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), DolgozoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
