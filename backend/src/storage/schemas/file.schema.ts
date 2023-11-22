import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class File extends Document {
  @Prop({ required: true })
  fileName: string;

  @Prop({ required: true })
  uploadDate: Date;

  // Add any other attributes you need
}

export const FileSchema = SchemaFactory.createForClass(File);
