import { AbstractControl } from "@angular/forms";

export class Misvalidators{
    static soloLetras() {
        return (control: AbstractControl) => {
            const valor = control.value;
            const regex = new RegExp('^[a-zA-ZñáéíóúÑÁÉÍÓÚ\\s]*$')

            if (!regex.test(valor)) {
                console.log("contiene caracteres no permitidos");
                return { solo_letras: true };
            }

            return null;
        };
    }
    static numeroEntero() {
        return (control: AbstractControl) => {
            if (control.value !== '' && !Number.isInteger(control.value)) {
                return { entero: true };
            }

            return null;
        };
    }

}