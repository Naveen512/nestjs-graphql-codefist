import {Resolver, Query, Args, Int, Mutation} from '@nestjs/graphql';
import { CowBreedService } from './cow.breed.service';
import {CowBreed} from './cow.breed';
import {CowBreedInput} from './cow.breed.Input';

@Resolver()
export class CowBreedResolver {
  constructor(private cowBreedService: CowBreedService) {}

  @Query(returns => [CowBreed])
  async getAllCows(){
    return await this.cowBreedService.getAllCows();
  }

  @Query(returns => CowBreed)
  async getCowById(@Args('id',{type:() => Int}) id:number){
    return await this.cowBreedService.getCowById(id);
  }

  @Mutation(returns => CowBreed)
   addCow(@Args('newCow') newCow:CowBreedInput){
    var cow =  this.cowBreedService.addCow(newCow);
    return cow;
  }
}
