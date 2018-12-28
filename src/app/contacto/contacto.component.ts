import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo:string;
    public parametro:any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = "Pagina de contacto";
    }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            this.parametro = params['page'];
        })
    }

    toHome() {
        this._router.navigate(['home']);
    }
}