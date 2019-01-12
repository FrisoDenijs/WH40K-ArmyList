import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Detachment } from '../shared';

export class DetachmentsForm extends FormGroup {
    constructor() {
        super({
            name: new FormControl(),
            dedicatedTransportsForEach: new FormControl(),
            detachmentMin: new FormArray([new DetachmentsMinForm()]),
            detachmentMax: new FormArray([new DetachmentsMinForm()])
        });
    }

    public getModel(): Detachment {
        const detachment = new Detachment();

        return detachment;
    }

    public addDetachmentMin(){
        const detachmentMin = this.get('detachmentMin') as FormArray;
        detachmentMin.push(new DetachmentsMinForm());
    }

    public addDetachmentMax(){
        const detachmentMax = this.get('detachmentMax') as FormArray;
        detachmentMax.push(new DetachmentsMaxForm());
    }
}

class DetachmentsMinForm extends FormGroup {
    constructor() {
        super({
            battlefieldRole: new FormControl(),
            amount: new FormControl()
        });
    }
}

class DetachmentsMaxForm extends FormGroup {
    constructor() {
        super({
            battlefieldRole: new FormControl(),
            amount: new FormControl()
        });
    }
}
