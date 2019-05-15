import { Component } from '@angular/core';
import { TerraristInterface } from './core/data-model/terrarist.interface';
import { terrarists } from './core/data-model/terrarists';

@Component({
    selector:    'tk-terra-basic-app',
    templateUrl: './terra-knowledge.component.html',
    styles:   [require('./terra-knowledge.component.scss')],
})
export class TerraKnowledgeComponent
{
    public terrarists:Array<TerraristInterface> = terrarists;
}
