import { Component, OnInit } from '@angular/core';
import { Aplicacao } from '../aplicacao';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import { AplicacaoService } from '../aplicacao.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aplicacao-add',
  templateUrl: './aplicacao-add.component.html',
  styleUrls: ['./aplicacao-add.component.css']
})
export class AplicacaoAddComponent implements OnInit {

  aplicacao: Aplicacao = new Aplicacao();
  aplicacoes: Aplicacao[];
  exibirDialog: boolean;
  novoRegistro: boolean;
  entidades: SelectItem[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private aplicacaoService: AplicacaoService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.consultar();
    this.aplicacao = new Aplicacao();
    this.entidades = [];
    this.activatedRoute.params.subscribe(params => {
      console.log('?1');
      console.log(params);
      const id = params.id ? Number(params.id) : null;
      console.log(id);
      if (id != null) {
        console.log("contem id" + id);
        this.buscar(id);
      }
    });

  }

  buscar(id: number) {
    this.aplicacaoService.buscar(id).subscribe(resposta => {
      this.aplicacao = resposta as Aplicacao;
    }, error => {
      console.log(error);
      alert('erro entidades.' + error);
    });
  }

  consultar() {
    this.aplicacaoService.consultar().subscribe(resposta => {
      this.aplicacoes = resposta as Aplicacao[];
    }, error => {
      console.log(error);
      alert('erro aplicacoes.' + error);
    });
  }

  novo() {
    const aplicacao = new Aplicacao();
    this.exibirModal(aplicacao);
  }

  exibirModal(aplicacao: Aplicacao) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    this.aplicacao = aplicacao;
  }

  salvar() {
    console.log('salvar');
    this.aplicacaoService.adicionar(this.aplicacao).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro adicionado com sucesso.'});
      }, error => {
        console.log(error);
        alert(error.ok);
      }
    );
  }

  confirmarExcluir() {
    console.log('confirmarExcluir');
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este registro?',
      accept: () => {
          console.log('confirmarExcluir - accept');
          this.excluir();
      },
      reject: () => {
          this.messageService.add({severity: 'success', summary: 'Cancelado', detail: 'Ok. Cancelado.'});
      }
    });
  }

  excluir() {
    console.log('excluir');
    this.aplicacaoService.excluir(this.aplicacao).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.'});
      }, error => alert('erro aplicacoes.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }

  onSubmit(aplicacaoForm) {

  }

}

