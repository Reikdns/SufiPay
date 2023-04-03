import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesembolsosModule } from './desembolsos/desembolsos.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScriptService } from './Services/scriptService/script.service'
import { FormsModule } from '@angular/forms';
import { TipoDocumentoPipe } from './Pipes/tipoDocumento.pipe';
import { NumeroDesembolsoPipe } from './Pipes/numeroDesembolso.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DesembolsosModule,
    LoginModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [
    ScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
