import { Pipe, PipeTransform } from '@angular/core';
import { Desembolso } from '../models/desembolso';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({
  name: 'fechaFilter'
})
export class FechaPipe implements PipeTransform {

  transform(value: Desembolso[], info: any): Desembolso[] {
    if (info === undefined || info === null) {
      return value;
    }

    return value.filter( item => (item.fecha >= (new Date(info.fechaInicio)) && item.fecha <= (new Date(info.fechaFinal)) || new Date(info.fechaInicio) == new Date(info.fechaFinal)));
  }
}
