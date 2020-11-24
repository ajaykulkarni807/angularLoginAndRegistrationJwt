import { AbstractControl } from '@angular/forms';
import { strict } from 'assert';
import { Key } from 'protractor';

export function PasswordValidator(control:AbstractControl): { [Key : string]: boolean } | null
{
    const password= control.get('Password');
    const confirPassword=control.get('confirmPassword');
    if(password.pristine || confirPassword.pristine){
        return null;
    }
    return password && confirPassword && password.value != confirPassword.value ?
     {'mismatch' : true}: null;


}