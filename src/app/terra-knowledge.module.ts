import {
    APP_INITIALIZER,
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TerraKnowledgeComponent } from './terra-knowledge.component';
import { HttpModule } from '@angular/http';
import {
    L10nLoader,
    TranslationModule
} from 'angular-l10n';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { l10nConfig } from './core/localization/l10n.config';
import { HttpClientModule } from '@angular/common/http';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';
import { RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './views/template-driven-form/template-driven-form.component';
import { ShirtSizeValidatorDirective } from './core/validation/shirt-size-validator.directive';
import { ReactiveFormComponent } from './views/reactive-form/reactive-form.component';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslationModule.forRoot(l10nConfig),
        RouterModule.forRoot([]),
        TerraComponentsModule.forRoot()
    ],
    declarations: [
        TerraKnowledgeComponent,
        TemplateDrivenFormComponent,
        ReactiveFormComponent,
        ShirtSizeValidatorDirective
    ],
    providers:    [
        {
            provide:    APP_INITIALIZER,
            useFactory: initL10n,
            deps:       [L10nLoader],
            multi:      true
        }
    ],
    bootstrap:    [
        TerraKnowledgeComponent
    ]
})
export class ReactiveFormsForTerraModule
{
    constructor(public l10nLoader:L10nLoader)
    {
        this.l10nLoader.load();
    }
}

function initL10n(l10nLoader:L10nLoader):Function
{
    return ():Promise<void> => l10nLoader.load();
}
