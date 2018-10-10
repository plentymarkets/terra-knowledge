import { DrinkInterface } from './drink.interface';

export interface TerraristInterface
{
    id:number;
    forename:string;
    name:string;
    shirtSize:string | number;
    skills:Array<string>;
    drinks:Array<DrinkInterface>;
}
