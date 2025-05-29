import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static correctCI(control: AbstractControl): ValidationErrors | null{
        const value = control.value?.toString() ?? '';

        return value.length === 8 ? null : { correctCI: true };
    }

    static strongPassword(control: AbstractControl): ValidationErrors | null {
        
        const value = control.value ? control.value.toString() : '';
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        const passwordValid = hasLowerCase && hasUpperCase && hasNumber && hasSpecialCharacter;

        return passwordValid ? null : { stongPassword: {
                hasUpperCase,
                hasLowerCase,
                hasNumber,
                hasSpecialCharacter
            } 
        };
    }
}
