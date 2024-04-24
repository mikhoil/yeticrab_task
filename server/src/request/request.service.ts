import { Injectable } from '@nestjs/common';
import { status } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRequestDto } from './dto/createRequest.dto';
import { EditRequestDto } from './dto/editRequest.dto';

@Injectable()
export class RequestService {
    constructor(private prisma: PrismaService) {}

    async getAll() {
        return await this.prisma.request.findMany({
            include: { comments: true },
        });
    }

    async getByStatus(status: status) {
        return status === 'uncompleted'
            ? await this.prisma.request.findMany({
                  where: { OR: [{ status: 'todo' }, { status: 'in_process' }] },
                  include: { comments: true },
              })
            : await this.prisma.request.findMany({
                  where: { status },
                  include: { comments: true },
              });
    }

    async create(request: CreateRequestDto) {
        return await this.prisma.request.create({ data: request });
    }

    async delete(number: number) {
        return await this.prisma.request.delete({ where: { number } });
    }

    async edit(number: number, request: EditRequestDto) {
        return await this.prisma.request.update({
            where: { number },
            data: request,
        });
    }
}
