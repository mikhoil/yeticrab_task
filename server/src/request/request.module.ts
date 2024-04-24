import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';

@Module({
    imports: [PrismaModule],
    controllers: [RequestController],
    providers: [RequestService],
})
export class RequestModule {}
