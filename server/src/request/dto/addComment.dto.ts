import { ApiProperty } from '@nestjs/swagger';

export class AddCommentDto {
    @ApiProperty()
    readonly comment: string;
}
