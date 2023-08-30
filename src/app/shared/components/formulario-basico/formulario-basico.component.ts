import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Misvalidators } from '../../utils/validators';

@Component({
  selector: 'app-formulario-basico',
  templateUrl: './formulario-basico.component.html',
  styleUrls: ['./formulario-basico.component.scss']
})
export class FormularioBasicoComponent {
  /*
  nombreField = new FormControl<string>('');
  apellidoField = new FormControl<string>('');
  edadField = new FormControl<number>(0);*/
  nombreField: FormControl;
  apellidoField: FormControl;
  edadField: FormControl;
  emailField: FormControl;
  constructor() {
    this.nombreField =  new FormControl('',[Validators.required, Misvalidators.soloLetras()]);
    this.apellidoField =  new FormControl('',[Validators.required, Misvalidators.soloLetras()]);
    this.edadField =  new FormControl('',[Validators.required, Validators.min(18),Misvalidators.numeroEntero()]);
    this.emailField = new FormControl('',[Validators.required, Validators.email])
  }

 get nombre(){
  return this.nombreField.value
 }

 get apellido(){
  return this.apellidoField.value
 }

 get edad(){
  return this.edadField.value
 }

 get email(){
  return this.emailField.value
 }

  cargarDatos(){

    if(this.nombreField.invalid || this.apellidoField.invalid || this.edadField.invalid){
      console.log("Formulario Invalido")
      return
    }

    console.log("Nombre: " + this.nombre)
    console.log("Apellido: " + this.apellido)
    console.log("Edad: " + this.edad)
    console.log("Email: " + this.email)
  }

}
