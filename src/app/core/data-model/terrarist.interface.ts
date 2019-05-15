import { DrinkInterface } from './drink.interface';

export interface TerraristInterface
{
    id:number;
    forename:string;
    name:string;
    shirtSize:string | number;
    skills:Array<string>;
    skills2:string;
    ill:boolean;
    gender:string;
    drinks:Array<DrinkInterface>;
}
