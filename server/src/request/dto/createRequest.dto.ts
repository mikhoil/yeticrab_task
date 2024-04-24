import { ApiProperty } from '@nestjs/swagger';

export class CreateRequestDto {
    @ApiProperty()
    readonly company_title: string;
    @ApiProperty()
    readonly carrier_name: string;
    @ApiProperty()
    readonly carrier_tel: string;
    @ApiProperty()
    readonly ati_code: string;
}
