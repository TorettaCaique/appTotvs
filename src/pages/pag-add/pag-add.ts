import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms'
import { Home } from '../home/home';
import { TarefasService } from "../../services/tarefas.services"

@Component({
  selector: 'page-pag-add',
  templateUrl: 'pag-add.html',
})
export class PagAdd {
  public addTarefa: any;
  public nome: string;
  public data: string;
  public id:number;
  minhasTarefas = {title:"",data:"",id:0}
  

  

  


  constructor(private tarefasService: TarefasService, private navCtrl: NavController, public _form: FormBuilder) {
    this.addTarefa = this._form.group({
      "id":[""],
      "Nome": ["", Validators.required],
      "Data": ["", Validators.required],
      
    })
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
