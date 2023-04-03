import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesembolsosModule } from './desembolsos/desembolsos.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScriptService } from './Services/scriptService/script.service'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesembolsosModule,
    LoginModule,
    BrowserAnimationsModule
  ],
  providers: [
    ScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
