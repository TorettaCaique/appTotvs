import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
  import { FormBuilder, Validators } from '@angular/forms'
import { AlertController } from 'ionic-angular'
import {Home} from '../home/home'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public registro: any;
  public usuario: string;
  public senha: string;

  constructor(public navCtrl: NavController, public _form: FormBuilder, public alertCtrl: AlertController) {
    this.registro = this._form.group({
      "Usuario": ["", Validators.required],
      "Senha": ["", Validators.required]
    })
  }


  submit() {

    this.usuario = this.registro.value.Usuario
    this.senha = this.registro.value.Senha;


    if (this.usuario == "admin" && this.senha == "admin") {
      this.navCtrl.push(Home)
      
    }

    else {
      this.mostrarAlerta(); 
      this.registro.reset();

    }
  }
  mostrarAlerta() {
    let alert = this.alertCtrl.create({
      title: "Usuario ou senha incorretos",
      subTitle: "Tente novamente",
      buttons: ['OK']
    })
    alert.present();
  }
 
  
}
