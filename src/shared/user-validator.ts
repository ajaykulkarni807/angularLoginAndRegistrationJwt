import { AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(control:AbstractControl): {[key: string]:any } | null {
        console.log(control.value);
        const forbidden= /admin/.test(control.value);
        console.log(forbidden);
        return forbidden ? {
            'forbiddenName': 
            {
                value: control.value}
            } 
            : null;



}