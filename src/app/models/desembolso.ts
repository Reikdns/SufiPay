export class Desembolso{
    tipoDocumento: string;
    numeroDocumento: string;
    numeroDesembolso: string;
    fecha: Date;
    monto: number;

    constructor(tipoDocumento:string, numeroDesembolso:string, numeroDocumento:string, fecha:Date, monto:number){
        this.tipoDocumento = tipoDocumento;
        this.numeroDesembolso = numeroDesembolso;
        this.numeroDocumento = numeroDocumento;
        this.fecha = fecha;
        this.monto = monto;
    }

}