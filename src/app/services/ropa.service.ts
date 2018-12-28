import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
    public nombre_prenda:string;
    public colleccion_ropa:Array<string>;

    constructor(){
        this.nombre_prenda = 'Pantalones vaqueros';
        this.colleccion_ropa = ['Pantalones blancos', 'Camiceta roja'];
    }

    prueba(nombre) {
        return nombre;
    }

    addRopa(prenda) {
        this.colleccion_ropa.push(prenda);
    }

    getRopa() {
        return this.colleccion_ropa;
    }

    deleteRopa(indice) {
        this.colleccion_ropa.splice(indice, 1);
    }

}