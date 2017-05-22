import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { TarefasService } from "../../services/tarefas.services"
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class Detalhes {
  
 public addTarefa: any;
  public nome: string;
  public data: string;
  public id:number;
  minhasTarefas = {title:"",data:"",id:0}

  delete:any;
  tarefa:any;
  detalhes: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private tarefasService: TarefasService) {
    

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
onAddTarefa() {
    this.minhasTarefas.title = this.addTarefa.value.Nome
    this.minhasTarefas.data = this.addTarefa.value.Data
    this.nome = this.addTarefa.value.Nome
    this.data = this.addTarefa.value.Data
    console.log() 
    this.tarefasService.addTarefa(this.minhasTarefas)
    console.log()
    this.navCtrl.pop(); 

  }
}


