import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/createComment.dto';

@ApiTags('comments')
@Controller('comments')
export class CommentController {
    constructor(private commentService: CommentService) {}

    @Get(':request_number')
    @ApiOperation({ summary: 'Getting all comment by request' })
    getAll(@Param('request_number') request_number: string) {
        return this.commentService.getAll(+request_number);
    }

    @Post()
    @ApiOperation({ summary: 'Adding comment to request' })
    create(@Body() createCommentDto: CreateCommentDto) {
        return this.commentService.createComment(createCommentDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deleting comment from request' })
    delete(@Param('id') id: string) {
        return this.commentService.deleteComment(+id);
    }
}
