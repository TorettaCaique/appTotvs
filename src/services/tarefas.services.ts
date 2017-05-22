import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class TarefasService {
    private tarefas: { title: string, data: string, id: number }[] = [];

    constructor(private storage: Storage) { }

    addTarefa(tarefa: { title: string, data: string }) {
        let total = this.tarefas.length + 1
        let novaTarefa = { title: "", data: "", id: 0 }
        console.log(tarefa)
        novaTarefa.title = tarefa.title
        novaTarefa.data = tarefa.data   
        novaTarefa.id = total
        this.tarefas.push(novaTarefa)
        this.storage.set('tarefas', this.tarefas);
    }


    getTarefas() {
        return this.storage.get('tarefas')
            .then(
            (tarefas) => {
                this.tarefas = tarefas == null ? [] : tarefas;
                return this.tarefas;
            }
            );

    }

    getTarefaById(id) {
        // pesquisar na lista de tarefas uma tarefa que tenha o id
        this.tarefas.filter((x) => {
            if (x.id == id)
                return x;
        });
    }
    delete(id) {
        let pos = this.tarefas.indexOf(id)
        this.tarefas.splice(pos, 1);
        this.storage.set('tarefas', this.tarefas);
        
        
    }

    editar(){}
        

}
