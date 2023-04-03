import { Desembolso } from "../models/desembolso"

export class Data{
    lista: Desembolso[];

    constructor(){
        this.lista = new Array<Desembolso>;
        this.iniciarDatos();
    }

    iniciarDatos(){
        this.lista.push(
            new Desembolso("CC", "50000", "1065850985", new Date("08/09/2016 21:20:32"), 45000)
        )
        this.lista.push(
            new Desembolso("TI", "40000", "1065854656", new Date("08/09/2020 22:55:34"), 350000)
        )
        this.lista.push(
            new Desembolso("CE", "30000", "1065769764", new Date("08/09/2022 13:56:32"), 235000)
        )
        this.lista.push(
            new Desembolso("CC", "20000", "1065854658", new Date("08/09/2050 04:23:12"), 200000)
        )
        this.lista.push(
            new Desembolso("TI", "10000", "10656595478", new Date("08/09/2010 09:53:32"), 150000)
        )
        this.lista.push(
            new Desembolso("CC", "6000", "10658245934", new Date("08/09/2001 12:34:45"), 900000)
        )
        this.lista.push(
            new Desembolso("CE", "30000", "1065769764", new Date("08/09/2022 13:56:32"), 235000)
        )
        this.lista.push(
            new Desembolso("CC", "20000", "1065854658", new Date("08/09/2050 04:23:12"), 200000)
        )
        this.lista.push(
            new Desembolso("TI", "10000", "10656595478", new Date("08/09/2010 09:53:32"), 150000)
        )
        this.lista.push(
            new Desembolso("CC", "6000", "10658245934", new Date("08/09/2001 12:34:45"), 900000)
        )
        this.lista.push(
            new Desembolso("CC", "50000", "1065850985", new Date("08/09/2016 21:20:32"), 45000)
        )
        this.lista.push(
            new Desembolso("TI", "40000", "1065854656", new Date("08/09/2020 22:55:34"), 350000)
        )
        this.lista.push(
            new Desembolso("CE", "30000", "1065769764", new Date("08/09/2022 13:56:32"), 235000)
        )
        this.lista.push(
            new Desembolso("CC", "20000", "1065854658", new Date("08/09/2050 04:23:12"), 200000)
        )
        this.lista.push(
            new Desembolso("TI", "10000", "10656595478", new Date("08/09/2010 09:53:32"), 150000)
        )
        this.lista.push(
            new Desembolso("CC", "6000", "10658245934", new Date("08/09/2001 12:34:45"), 900000)
        )
        this.lista.push(
            new Desembolso("CE", "30000", "1065769764", new Date("08/09/2022 13:56:32"), 235000)
        )
        this.lista.push(
            new Desembolso("CC", "20000", "1065854658", new Date("08/09/2050 04:23:12"), 200000)
        )
        this.lista.push(
            new Desembolso("TI", "10000", "10656595478", new Date("08/09/2010 09:53:32"), 150000)
        )
        this.lista.push(
            new Desembolso("CC", "6000", "10658245934", new Date("08/09/2001 12:34:45"), 900000)
        )
    }
}