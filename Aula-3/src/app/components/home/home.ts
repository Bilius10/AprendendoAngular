import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [FormsModule,CommonModule], 
  templateUrl: './home.html',
  styleUrls: ['./home.scss'] 
})
export class Home {
  titulo: string = '';
  descricao: string = '';
  dataFinalizacao: string = '';
  tarefas: { titulo: string; descricao: string; dataFinalizacao: string }[] = [];

  adicionarTarefa() {
    if (this.titulo && this.descricao && this.dataFinalizacao) {
      console.log('Adicionando tarefa:', this.titulo, this.descricao, this.dataFinalizacao);
      const novaTarefa = {
        titulo: this.titulo,
        descricao: this.descricao,
        dataFinalizacao: this.dataFinalizacao
      };
      this.tarefas.push(novaTarefa);

      this.titulo = '';
      this.descricao = '';
      this.dataFinalizacao = '';
    }
  }

  removerTarefa(tarefa: { titulo: string; descricao: string; dataFinalizacao: string }) {
    const index = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(index);
  }
}
