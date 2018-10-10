import {
    AbstractControl,
    ValidatorFn
} from '@angular/forms';

/**
 * ValidatorFn added to a FormControl (Reactive Form) or to a Directive (Template-driven)
 * @param possibleShirtSizes
 */
export function shirtSizeValidator(possibleShirtSizes:Array<string>):ValidatorFn
{
    /**
     * Checks if a possible value is entered
     * @return {'forbiddenSize': {value: control.value}} if no possible value is entered
     */
    return (control:AbstractControl):{ [key:string]:any } | null =>
    {
        const forbidden:boolean = !possibleShirtSizes.includes(control.value);
        return forbidden ? {'forbiddenSize': {value: control.value}} : null;
    };
}
