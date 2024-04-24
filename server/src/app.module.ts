import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { RequestModule } from './request/request.module';

@Module({
    imports: [RequestModule, CommentModule],
})
export class AppModule {}
