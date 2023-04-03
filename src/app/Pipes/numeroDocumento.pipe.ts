import { Pipe, PipeTransform } from '@angular/core';
import { Desembolso } from '../models/desembolso';
import { FiltroDesembolso } from '../interfaces/filtroDesembolso';

@Pipe({
  name: 'numeroDocumentoFilter'
})
export class NumeroDocumentoPipe implements PipeTransform {

  a: any[] | undefined;

  transform(value: Desembolso[], info: string): Desembolso[] {
    if (info === undefined || info === "") {
      return value;
    }
    return value.filter( item => item.numeroDocumento.toLowerCase().indexOf(info) != -1);
  }
}
