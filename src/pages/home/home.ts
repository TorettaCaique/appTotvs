import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController} from 'ionic-angular';
 
import {PagAdd} from '../pag-add/pag-add';
import {TarefasService} from "../../services/tarefas.services"
import {Detalhes} from "../detalhes/detalhes"
import {LoginPage} from "../login/login"
import {Historico} from "../historico/historico"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  tarefas: {title:string, data:string, id:number} [];
  

  constructor(public navCtrl: NavController,private tarefasService:TarefasService, public actionSheetCtrl:ActionSheetController) {
 
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
presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Sair',
          handler: () => {
            this.goToPagLogin()
            console.log('Destructive clicked');
          }
        },{
          text: 'Cancelar',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
goToPagLogin(){
  this.navCtrl.push(LoginPage);
}
goToPagHist(){
  this.navCtrl.push(Historico);
}
}
