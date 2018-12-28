import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent{
    public titulo:string;
    public listado_ropa:Array<string>;
    public nueva_prenda:string;
    public fecha;

    constructor(
        private _ropaService:RopaService
    ) {
        this.titulo = "Pagina principal";
        this.fecha = new Date();
    }

    ngOnInit() {
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this._ropaService.prueba('camiceta'));
    }

    guardarPrenda() {
        this._ropaService.addRopa(this.nueva_prenda);
        this.nueva_prenda = null;
    }

    removePrenda(indice) {
        this._ropaService.deleteRopa(indice);
    }
}