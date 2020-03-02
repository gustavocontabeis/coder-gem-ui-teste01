import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Entidade } from '../entidade';
import { EntidadeService } from '../entidade.service';
import { SelectItem } from 'primeng/api/selectitem';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-entidade-add',
  templateUrl: './entidade-add.component.html',
  styleUrls: ['./entidade-add.component.css']
})
export class EntidadeAddComponent implements OnInit {

  entidade: Entidade = new Entidade();
  entidades: Entidade[];
  exibirDialog: boolean;
  novoRegistro: boolean;
  aplicacoes: SelectItem[] = [];
  atributos: SelectItem[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private entidadeService: EntidadeService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.consultar();
    this.entidade = new Entidade();
    this.aplicacoes = [];
    this.atributos = [];
    console.log('?');

    this.activatedRoute.params.subscribe(params => {
      console.log('?1');
      console.log(params);
      const id = params["id"] ? Number(params['id']) : null;
      console.log(id);
      // if (id != null) {
      //   console.log("contem id" + id);
      //   //this.buscar(id);
      // }
    });

  }

  consultar() {
    this.entidadeService.consultar().subscribe(resposta => {
      this.entidades = resposta as Entidade[];
    }, error => {
      console.log(error);
      alert('erro entidades.' + error);
    });
  }

  novo() {
    const entidade = new Entidade();
    this.exibirModal(entidade);
  }

  exibirModal(entidade: Entidade) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    this.entidade = entidade;
  }

  salvar() {
    console.log('salvar');
    this.entidadeService.adicionar(this.entidade).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({ severity: 'success', summary: 'OK', detail: 'Registro adicionado com sucesso.' });
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
        this.messageService.add({ severity: 'success', summary: 'Cancelado', detail: 'Ok. Cancelado.' });
      }
    });
  }

  excluir() {
    console.log('excluir');
    this.entidadeService.excluir(this.entidade).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({ severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.' });
    }, error => alert('erro entidades.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }

  onSubmit(entidadeForm) {

  }

}

