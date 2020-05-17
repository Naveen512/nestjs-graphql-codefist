import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CowBreed {
  @Field(type => Int)
  id: number;
  @Field()
  name: string;
  @Field(type => Int, { nullable: true })
  maxYield?: number;
  @Field(type => Int, { nullable: true })
  minYield?: number;
  @Field({ nullable: true })
  state?: string;
  @Field({ nullable: true })
  country?: string;
  @Field({ nullable: true })
  Description?: string;
}
