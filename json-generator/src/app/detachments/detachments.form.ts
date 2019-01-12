import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Roll } from '../shared';

export class DetachmentsForm extends FormGroup {
    constructor() {
        super({
        });
    }

    public getModel(): Roll {
        return new Roll(
            this.controls['chance'].value,
            this.controls['sidesOfDice'].value,
            this.controls['amountOfDice'].value,
            this.controls['modifier'].value
        );
    }
}
