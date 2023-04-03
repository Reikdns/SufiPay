import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesembolsosComponent } from './desembolsos/desembolsos.component';
import { NumeroDocumentoPipe } from '../Pipes/numeroDocumento.pipe';
import { TipoDocumentoPipe } from '../Pipes/tipoDocumento.pipe';
import { NumeroDesembolsoPipe } from '../Pipes/numeroDesembolso.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select'
import { FormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker'
import { ScriptService } from '../Services/scriptService/script.service';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModel } from '@angular/forms'
import { FechaPipe } from '../pipes/fecha.pipe';


@NgModule({
  declarations: [
    DesembolsosComponent,
    NumeroDocumentoPipe,
    TipoDocumentoPipe,
    NumeroDesembolsoPipe,
    FechaPipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    DesembolsosComponent,
    NgModel
  ],
  providers: [
    ScriptService
  ]
})
export class DesembolsosModule { }
