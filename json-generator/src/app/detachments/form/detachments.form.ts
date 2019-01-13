import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Detachment, MaxRole } from '../../shared';

export class DetachmentsForm extends FormGroup {
    constructor() {
        super({
            name: new FormControl(),
            dedicatedTransportsForEach: new FormControl(),
            minRoles: new FormArray([]),
            maxRoles: new FormArray([]),
            restrictions: new FormArray([]),
            benefits: new BenefitsForm()
        });
    }

    public getModel(): Detachment {
        if (this.invalid) {
            throw new Error('Detachment form is invalid');
        }

        const detachment = new Detachment();

        detachment.name = this.value.name;
        detachment.dedicatedTransportsForEach = this.value.dedicatedTransportsForEach;
        detachment.minRoles = this.value.minRoles;
        detachment.maxRoles = this.value.maxRoles;
        detachment.restrictions = this.value.restrictions;
        detachment.benefits = this.value.benefits;

        return detachment;
    }

    public addMinRole() {
        const minRoles = this.get('minRoles') as FormArray;
        minRoles.push(new MinRolesForm());
    }

    public addMaxRole() {
        const maxRoles = this.get('maxRoles') as FormArray;
        maxRoles.push(new MaxRolesForm());
    }

    public addRestriction() {
        const restrictions = this.get('restrictions') as FormArray;
        restrictions.push(new DetachmentRestrictionFormControl());
    }

    public removeMinRole(index: number) {
        const minRoles = this.get('minRoles') as FormArray;
        minRoles.removeAt(index);
    }

    public removeMaxRole(index: number) {
        const maxRoles = this.get('maxRoles') as FormArray;
        maxRoles.removeAt(index);
    }

    public removeRestriction(index: number) {
        const restrictions = this.get('restrictions') as FormArray;
        restrictions.removeAt(index);
    }
}

class MinRolesForm extends FormGroup {
    constructor() {
        super({
            battlefieldRole: new FormControl(),
            amount: new FormControl('', Validators.pattern(/[0-9]*/))
        });
    }
}

class MaxRolesForm extends FormGroup {
    constructor() {
        super({
            battlefieldRole: new FormControl(),
            amount: new FormControl('', Validators.pattern(/[0-9]*/))
        });
    }
}

class DetachmentRestrictionFormControl extends FormControl {
    constructor() {
        super();
    }
}

class BenefitsForm extends FormGroup {
    constructor() {
        super ({
            commandPoints: new FormControl('', Validators.pattern(/[0-9]*/))
        });
    }
}
