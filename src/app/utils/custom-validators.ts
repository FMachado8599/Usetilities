import { AbstractControl } from "@angular/forms";

export function correctCI(control: AbstractControl){
    const value = control.value;

    if (value == null || value === ''){
        return null;
    }

    if (value.length === 8){
        return {correctCI: true};
    }
    return null;
}
