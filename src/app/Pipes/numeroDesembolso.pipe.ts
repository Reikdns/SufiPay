import { Pipe, PipeTransform } from '@angular/core';
import { Desembolso } from '../models/desembolso';

@Pipe({
  name: 'numeroDesembolsoFilter'
})
export class NumeroDesembolsoPipe implements PipeTransform {

  transform(value: Desembolso[], info: string): Desembolso[] {
    if (info === "" || info === undefined) {
      return value;
    }
    return value.filter( item => item.numeroDesembolso.toLowerCase().indexOf(info) != -1);
  }

}
