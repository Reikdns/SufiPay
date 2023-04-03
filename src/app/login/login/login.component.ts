import { Component } from '@angular/core';
import { OnInit} from '@angular/core'
import { ScriptService } from 'src/app/Services/scriptService/script.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title: string;

  constructor(private _scriptService: ScriptService){
    this.title = "hola mundo";
  }

  ngOnInit()
  {
    this._scriptService.loadScript("inputScript", "../../../assets/js/inputScript.js");
  }

}
