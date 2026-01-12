import { PartialType } from '@nestjs/mapped-types';
import { CreateDolgozoDto } from './create-dolgozo.dto';

export class UpdateDolgozoDto extends PartialType(CreateDolgozoDto) {}
