import { Component } from '@angular/core';
import { Coche } from './coches';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html'
})

export class CochesComponent{
    public titulo:string;
    public coche:Coche;

    constructor(
    ) {
        this.titulo = "Pagina de coches";
        this.coche = new Coche("", "", "");
    }

    onSubmit() {
        console.log(this.coche);
    }
}