import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import { Language } from 'angular-l10n';
import { TerraristInterface } from '../../core/data-model/terrarist.interface';
import { skills } from '../../core/data-model/skills';
import { SkillInterface } from '../../core/data-model/skill.interface';
import { TerraMultiCheckBoxValueInterface } from '@plentymarkets/terra-components';
import { shirtSizes } from '../../core/data-model/shirt-sizes';
import {
    FormArray,
    FormBuilder,
    FormGroup
} from '@angular/forms';
import { shirtSizeValidator } from '../../core/validation/shirt-size-validator';
import { DrinkInterface } from '../../core/data-model/drink.interface';
import { drinksValidator } from '../../core/validation/drinks-validator';

@Component({
    selector:    'tk-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls:   ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit
{
    @Language()
    public lang:string;

    @Input()
    public myTitle:string;

    @Input()
    public terrarist:TerraristInterface;

    protected skills:Array<TerraMultiCheckBoxValueInterface> = [];
    protected shirtSizes:Array<string> = shirtSizes;

    protected terraristForm:FormGroup;

    constructor(private formBuilder:FormBuilder)
    {
    }

    public ngOnInit():void
    {
        // Map skills into a TerraMultiCheckBoxValueInterface array
        this.skills = skills.map((skill:SkillInterface) =>
        {
            return {
                value:    skill.value,
                caption:  skill.label,
                selected: this.terrarist.skills.includes(skill.value)
            };
        });

        // Create a FormGroup with the FormBuilder.
        // Every FormControl is initialized with a default value. Pattern: key: [defaultValue, [syncValidators], [asyncValidators]]
        this.terraristForm = this.formBuilder.group({
            id:        [this.terrarist.id],
            name:      [this.terrarist.name],
            forename:  [this.terrarist.forename],
            shirtSize: [this.terrarist.shirtSize, [shirtSizeValidator(this.shirtSizes)]],
            skills:    [this.terrarist.skills],
            drinks:    this.createDrinksFormArray(this.terrarist.drinks)
        });

        this.terraristForm.patchValue(this.terrarist);
    }

    /**
     * Called for shirt size validation error message
     * @return all shirt sizes as a comma separated string
     */
    protected get possibleShirtSizes():string
    {
        return this.shirtSizes.join(', ');
    }

    /**
     * Remove the given drink
     * @param drink to delete
     * @param index of drink
     */
    protected removeDrink(drink:DrinkInterface, index:number):void
    {
        (this.terraristForm.controls.drinks as FormArray).removeAt(index);
        console.log('Drink ' + drink.name + ' removed');
    }

    /**
     * Adds a new plain drink
     */
    protected addDrink():void
    {
        (this.terraristForm.controls.drinks as FormArray).push(this.createDrinkFormGroup());
    }

    /**
     * Submits the form.
     */
    protected submit():void
    {
        console.log(this.terraristForm);
    }

    /**
     * Create a new FormArray from drinks
     * @param drinks
     * @return the created FormArray
     */
    private createDrinksFormArray(drinks:Array<DrinkInterface>):FormArray
    {
        return this.formBuilder.array(
            drinks.map((drink:DrinkInterface):FormGroup =>
            {
                const drinkGroup:FormGroup = this.createDrinkFormGroup();
                drinkGroup.setValue(drink);
                return drinkGroup;
            }),
            drinksValidator()
        );
    }

    /**
     * Create a new FormGroup for a drink
     * @return the created Form
     */
    private createDrinkFormGroup():FormGroup
    {
        return this.formBuilder.group(
            {
                name:                  [''],
                preferredDrinkingSize: ['']
            });
    }
}
