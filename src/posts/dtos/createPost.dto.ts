import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { postStatus } from '../enum/postStatus.enum';
import { PostType } from '../enum/postType.enum';
import { CreatePostMetaOptionsDto } from './createPostMetaOptions.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'Title of the Post',
    example: 'My First Post',
  })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: PostType,
    description: "Possible Values: 'post', 'page', 'story', 'series'",
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A Slug should be all small letters and uses only "-" and without spaces. Example: "my-first-post"',
  })
  slug: string;

  @ApiProperty()
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  featuredImageURL?: string;

  @ApiPropertyOptional()
  @IsISO8601()
  @IsOptional()
  publishOn: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description: 'The key of the meta option',
          example: 'sideBarEnabled',
        },
        value: {
          type: 'string',
          description: 'The value of the meta option',
          example: true,
        },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
