import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/createComment.dto';

@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService) {}

    async getAll(request_number: number) {
        return await this.prisma.comment.findMany({
            where: { request_number },
        });
    }

    async createComment(createCommentDto: CreateCommentDto) {
        return await this.prisma.comment.create({ data: createCommentDto });
    }

    async deleteComment(id: number) {
        return await this.prisma.comment.delete({ where: { id } });
    }
}
