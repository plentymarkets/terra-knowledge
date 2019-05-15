import { TerraristInterface } from './terrarist.interface';

export const terrarists:Array<TerraristInterface> = [
    {
        id:        7,
        name:      'Frank',
        forename:  'Michael',
        shirtSize: 'L',
        skills:    ['angular',
                    'typescript',
                    'html_css',
                    'reactive_forms'],
        skills2: 'typescript',
        ill: false,
        gender: 'male',
        drinks:    [
            {
                name:                  'Bier',
                preferredDrinkingSize: 0.5
            },
            {
                name:                  'Cola',
                preferredDrinkingSize: 0.5
            },
            {
                name:                  'Kaffee',
                preferredDrinkingSize: 0.25
            },
            {
                name:                  'Whiskey',
                preferredDrinkingSize: 0.02
            },
            {
                name:                  'Wasser',
                preferredDrinkingSize: 0.7
            }
        ]
    }
];
