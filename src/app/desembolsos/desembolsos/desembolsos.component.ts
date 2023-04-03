import { Component } from '@angular/core';
import { ScriptService } from 'src/app/Services/scriptService/script.service';
import { Data } from 'src/app/data/data';
import { FiltroDesembolso } from 'src/app/interfaces/filtroDesembolso';
import { OnInit } from '@angular/core'
import * as moment from 'moment';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-desembolsos',
  templateUrl: './desembolsos.component.html',
  styleUrls: ['./desembolsos.component.css']
})
export class DesembolsosComponent {

  data: Data;

  tipoDeDocumento: string;
  numeroDocumento: string;
  numeroDeDesembolso: string;
  fechaInicio: Date;
  fechaFinal: Date;

  constructor(private _scriptService: ScriptService) {
    this.data = new Data();
    this.tipoDeDocumento = "";
    this.numeroDeDesembolso = "";
    this.numeroDocumento = "";
    this.fechaFinal = new Date("08/09/9999 23:59:59");
    this.fechaInicio = new Date("08/09/1 00:0:00");
  }

  ngOnInit() {
    this._scriptService.loadScript("inputScript", "../../../assets/js/inputScript.js");
  }

}
