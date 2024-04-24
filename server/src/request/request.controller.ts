import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { status } from '@prisma/client';
import { CreateRequestDto } from './dto/createRequest.dto';
import { EditRequestDto } from './dto/editRequest.dto';
import { RequestService } from './request.service';

@ApiTags('requests')
@Controller('requests')
export class RequestController {
    constructor(private requestService: RequestService) {}

    @Get()
    @ApiOperation({
        summary: 'Getting all request by status',
        parameters: [{ name: 'status', in: 'query' }],
    })
    getAllByStatus(@Query('status') status: status) {
        return this.requestService.getByStatus(status);
    }

    @Get()
    @ApiOperation({ summary: 'Getting all requests' })
    getAll() {
        return this.requestService.getAll();
    }

    @Post()
    @ApiOperation({ summary: 'Creating request' })
    create(@Body() createRequestDto: CreateRequestDto) {
        return this.requestService.create(createRequestDto);
    }

    @Delete(':number')
    @ApiOperation({ summary: 'Deleting request by number' })
    delete(@Param('number') id: string) {
        return this.requestService.delete(+id);
    }

    @Put(':number')
    @ApiOperation({ summary: 'Editing request by number' })
    edit(@Param('number') id: string, @Body() editRequestDto: EditRequestDto) {
        return this.requestService.edit(+id, editRequestDto);
    }
}
