import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CowBreedResolver } from './cow.breeds/cow.breed.resolver';
import { CowBreedService } from './cow.breeds/cow.breed.service';
import { GraphQLModule } from '@nestjs/graphql';
import {join} from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:(join(process.cwd(),'src/schema.gql'))
    })
  ],
  controllers: [AppController],
  providers: [AppService, CowBreedResolver, CowBreedService],
})
export class AppModule {}
