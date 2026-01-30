import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckOutSchemaModule } from './check-out-schema/check-out-schema.module';
import { InputMapper } from './mappers/input.mapper';

@Module({
  imports: [CheckOutSchemaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
