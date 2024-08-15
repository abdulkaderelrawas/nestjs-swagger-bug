import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { FilterDto } from './dtos/FilterDto';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bug')
  public async getBug(@Query() params: FilterDto): Promise<FilterDto> {
    console.log('====================================');
    console.log(params);
    console.log('====================================');
    return params;
  }
}
