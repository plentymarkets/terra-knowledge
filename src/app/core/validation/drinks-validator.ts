import {
    AbstractControl,
    ValidatorFn
} from '@angular/forms';
import { DrinkInterface } from '../data-model/drink.interface';

/**
 * ValidatorFn added to a FormControl (Reactive Form) or to a Directive (Template-driven)
 */
export function drinksValidator():ValidatorFn
{
    /**
     * Checks if a drink name and preferredDrinkingSize combination already exists
     * @return {'duplicateDrinks': {value: control.value} if a duplicate exists
     */
    return (control:AbstractControl):{ [key:string]:any } | null =>
    {
        let seen:Set<string> = new Set();
        const hasDuplicates:boolean = (control.value as Array<DrinkInterface>).some((currentObject:DrinkInterface) =>
        {
            return seen.size === seen.add(currentObject.name + currentObject.preferredDrinkingSize).size;
        });
        return hasDuplicates ? {'duplicateDrinks': {value: control.value}} : null;
    };
}
