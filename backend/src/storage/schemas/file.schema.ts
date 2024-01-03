import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type UploadDocument = Upload & Document;

@Schema()
export class Upload {
  @Prop({ required: true })
  alias: string;

  @Prop({ required: true })
  fileName: string;

  @Prop({ required: true })
  uploadDate: Date;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: User;
}

export const UploadSchema = SchemaFactory.createForClass(Upload);
