import { CowBreed } from './cow.breed';
export class CowBreedService {
    cowBreeds: CowBreed[]=[{
        id : 1,
        name: "Gir",
        maxYield:6000,
        minYield:2000,
        country: "India",
        state: "Gujarat",
        Description:"This breed produces the highest yield of milk amongst all breeds in India. Has been used extensively to make hybrid varieties, in India and in other countries like Brazil"
    },{
        id:2,
        name: "Ongole",
        maxYield:null,
        minYield:null,
        country:"India",
        state:"Andhra Pradesh",
        Description:"Bullocks are useful for ploughing and cart-work / transport. Cows are fair milkers. Has natural resistance to both foot and mouth disease and mad cow disease"
    },{
        id:3,
        name: "Sahiwal",
        maxYield:4000,
        minYield:2000,
        country:"India",
        state: "Punjab",
        Description:"The cow is easily identifiable by its prominent red color"
    }];

    getAllCows(){
        return this.cowBreeds;
    }

    getCowById(id:number){
        return this.cowBreeds.filter(_ => _.id == id)[0];
    }

    addCow(newItem:any):CowBreed{
        this.cowBreeds.push(newItem);
        return newItem;
    }
}
