import { AbstractControl } from "@angular/forms";

export function correctCI(control: AbstractControl){
    const value = control.value?.toString() ?? '';

    return value.length === 8 ? null : { correctCI: true };
}
