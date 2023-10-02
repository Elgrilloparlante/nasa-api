import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('apod')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAPOD(
    @Query('date') date?: string,
    @Query('start_date') start_date?: string,
    @Query('end_date') end_date?: string,
    @Query('count') count?: number,
    @Query('thumbs') thumbs?: boolean,
  ): Promise<JSON> {
    const params = {
      date,
      start_date,
      end_date,
      count,
      thumbs,
    };

    return this.appService.getAPOD(params);
  }
}
