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
import { NgForm } from '@angular/forms';
import { DrinkInterface } from '../../core/data-model/drink.interface';

@Component({
    selector:    'tk-template-driven-form',
    templateUrl: './template-driven-form.component.html',
    styles:   [require('./template-driven-form.component.scss')],
})
export class TemplateDrivenFormComponent implements OnInit
{
    @Language()
    public lang:string;

    @Input()
    public myTitle:string;

    @Input()
    public terrarist:TerraristInterface;

    protected skills:Array<TerraMultiCheckBoxValueInterface> = [];
    protected shirtSizes:Array<string> = shirtSizes;

    public ngOnInit():void
    {
        this.skills = skills.map((skill:SkillInterface) =>
        {
            return {
                value:    skill.value,
                caption:  skill.label,
                selected: this.terrarist.skills.includes(skill.value)
            };
        });
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
        this.terrarist.drinks.splice(index, 1);
        console.log('Drink ' + drink.name + ' removed');
    }

    /**
     * Adds a new plain drink
     */
    protected addDrink():void
    {
        this.terrarist.drinks.push({
            name:                  '',
            preferredDrinkingSize: 0
        });
    }

    /**
     * Submits the form.
     */
    protected submit(terraristForm:NgForm):void
    {
        console.log(terraristForm);
        console.log('submitted');
    }
}
