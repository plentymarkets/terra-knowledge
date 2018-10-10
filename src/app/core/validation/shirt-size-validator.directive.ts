import {
    Directive,
    Input
} from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    Validator
} from '@angular/forms';
import { shirtSizeValidator } from './shirt-size-validator';

@Directive({
    selector: '[possibleShirtSizes]',
    providers: [{
        provide:     NG_VALIDATORS,
        useExisting: ShirtSizeValidatorDirective,
        multi:       true
    }]
})
export class ShirtSizeValidatorDirective implements Validator
{
    @Input('possibleShirtSizes')
    public shirtSizes:Array<string>;

    public validate(control:AbstractControl):{ [key:string]:any } | null
    {
        return this.shirtSizes ? shirtSizeValidator(this.shirtSizes)(control) : null;
    }
}
