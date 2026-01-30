import { Injectable } from '@nestjs/common';
import { Mapper, Mappings } from 'ts-mapstruct';
import { InputDto } from '../dto/input.dto';
import { InputEntity } from '../entity/input.entity';

@Injectable()
@Mapper()
export class InputMapper {
  @Mappings()
  fromDtoToEntity(source: InputDto) {

    console.log(`Mapping ${JSON.stringify(source)}`);
    return new InputEntity();
  }
}
