import { FormGroup } from "@angular/forms";

export default class validateForm {
    static validateAllFormsFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormGroup) {
                control.markAsDirty({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormsFields(control)
            }

        })
    }
}