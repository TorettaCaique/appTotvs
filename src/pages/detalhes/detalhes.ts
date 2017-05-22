import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { TarefasService } from "../../services/tarefas.services"
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class Detalhes {

  delete:any;
  tarefa:any;
  detalhes: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private tarefasService: TarefasService,public alertCtrl: AlertController) {
    

    this.tarefa = navParams.get('tarefa');
    console.log(this.tarefa.id);
    console.log(this.tarefa.title);
    console.log(this.tarefa.data);


    this.detalhes = [];

  
}

  deleteArray(){
    
    this.tarefasService.delete(this.tarefa)
    this.navCtrl.pop();
    this.showAlert();
  }

  naoRealizada(){
    this.navCtrl.pop();
  }
showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Tarefa finalizada com Sucesso',
      buttons: ['OK']
    });
    alert.present();
  }
}

