import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ValidateSchemaDto } from './dto/validate-schema.dto';
import { CheckOutSchemaService } from './check-out-schema/check-out-schema.service';
import { InputDto } from './dto/input.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly checkOutSchemaService: CheckOutSchemaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('validate-schema')
  validateSchema(@Body() body: ValidateSchemaDto) {
    return this.checkOutSchemaService.validate(body.schema, body.data);
  }

  @Post('mapping')
  checkMapping(@Body() body: InputDto){
    return this.checkOutSchemaService.doMapping(body);
  }
}
