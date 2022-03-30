import { PartialType } from '@nestjs/mapped-types';
import { UserRequestDto } from './users.request.dto';

export class UserUpdateDto extends PartialType(UserRequestDto) {}
