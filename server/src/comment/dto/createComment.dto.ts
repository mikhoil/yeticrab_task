import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
    @ApiProperty()
    readonly text: string;
    @ApiProperty()
    readonly request_number: number;
}
