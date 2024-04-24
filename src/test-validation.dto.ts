import { IsString } from 'class-validator';

export class TestValidationDto {
  @IsString()
  content: string;
}
