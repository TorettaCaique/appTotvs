import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PagAdd} from '../pag-add/pag-add';
import {TarefasService} from "../../services/tarefas.services"
import{Detalhes} from "../detalhes/detalhes"
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  tarefas: {title:string, data:{month:"",day:"",year:""}, id:number} [];
  dataTarefa: {data:""};

  constructor(public navCtrl: NavController,private tarefasService:TarefasService) {
 
  }


ionViewWillEnter() {
   this.tarefasService.getTarefas ()
   .then(
      (tarefas) => this.tarefas = tarefas
   );
}


itemTapped() {
    this.navCtrl.push(PagAdd);
}


goToPagDet(tarefa){
  console.log(tarefa);
  this.navCtrl.push(Detalhes,
  {
    tarefa:tarefa
    
  });
}


}

