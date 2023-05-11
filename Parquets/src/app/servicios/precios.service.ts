import { Injectable, OnInit } from "@angular/core";
import { lista } from "../interfaces/listaInterface";


@Injectable()

export class PreciosService implements OnInit {
    public listaPresupuestos: lista[] = []
    totalHome: number = 0;
    precioTotalGlobal: number = 0
    totalPanel: number = 0
    ngOnInit() {

    }
    constructor() {

    }
    guardarEnLocal(lista:lista[]){
        localStorage.setItem('lista', JSON.stringify(lista))

    }
    getListFromLocalStorage(item: string) {
        if (!localStorage.getItem(item)) {
        return;
        }
        this.listaPresupuestos = JSON.parse(localStorage.getItem(item)!)||[];
    }

    ControlDelPanel(campo: boolean, valor: number) {
        if (campo == false && valor == 20||valor == 30||valor == 35) {
            this.totalPanel = 0;
        }
    }



    totalPrice() {
        this.precioTotalGlobal = (this.totalHome + this.totalPanel);
        return this.precioTotalGlobal;
    }
    restarTotal() {
        this.totalPanel = 0;
        this.totalHome = 0;
        this.precioTotalGlobal = 0;
    }
    ordenadoAz() {
        this.listaPresupuestos.sort((a, b) => {
            if (a.nombreCliente.toLowerCase() < b.nombreCliente.toLowerCase() ) {
                return -1;
            }
            if (a.nombreCliente.toLowerCase()  > b.nombreCliente.toLowerCase() ) {
                return 1
            }
            return 0;
        })

    }

    ordenFecha() {
        this.listaPresupuestos.sort((a, b) => {
            if (a.fecha < b.fecha) {
                return -1
            } if (a.fecha > b.fecha) {
                return 1
            }
            return 0;
        })
    }


    reset() {
        this.getListFromLocalStorage('lista');
        }
}
