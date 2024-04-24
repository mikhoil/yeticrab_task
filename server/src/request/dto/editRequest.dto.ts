import { ApiProperty } from '@nestjs/swagger';
import { status } from '@prisma/client';

export class EditRequestDto {
    @ApiProperty()
    readonly company_title: string;
    @ApiProperty()
    readonly carrier_name: string;
    @ApiProperty()
    readonly carrier_tel: string;
    @ApiProperty({
        description: 'todo | in_process | completed',
        example: status.completed,
    })
    readonly status: status;
    @ApiProperty()
    readonly ati: string;
}
