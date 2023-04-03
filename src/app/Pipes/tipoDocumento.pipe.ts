import { Pipe, PipeTransform } from '@angular/core';
import { Desembolso } from '../models/desembolso';

@Pipe({
  name: 'tipoDocumentoFilter'
})
export class TipoDocumentoPipe implements PipeTransform {

  transform(value: Desembolso[], info: string): Desembolso[] {
    if (info === undefined || info === "") {
      return value;
    }
    return value.filter( item => item.tipoDocumento.indexOf(info) != -1);
  }

}
