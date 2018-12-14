import { Component, NgModule } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent {
    public titulo:string;
    public trabajos:Array<string>;
    public empleado:Empleado;
    public empleados:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor() {
        this.titulo = 'Componente empleados';
        this.trabajos = ['gka', 'hdhd'];
        this.empleado = new Empleado('Pamela Martínez', 27, 'Developer', true);
        this.empleados = [
            new Empleado('Pancho López', 30, 'Administrativo', false),
            new Empleado('Pamela Martínez', 55, 'Developer', true),
            new Empleado('Clara Gómez', 35, 'Gerente', true)
        ];
        this.trabajador_externo = true;
        this.color = 'green';
        this.color_seleccionado = 'blue';
    }

    // ngOnInit se llama siempre después del constructor y cada componente lo tiene
    // Aquí irían las peticiones ajax
    ngOnInit() {
        console.log(this.empleados);
    }

    cambiarExterno(valor) {
        this.trabajador_externo = valor;
    }
}