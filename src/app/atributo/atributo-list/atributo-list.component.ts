import { Router, ActivatedRoute } from '@angular/router';
import { AtributoService } from '../atributo.service';
import { Component, OnInit } from '@angular/core';
import { Atributo } from '../atributo';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-atributo-list',
  templateUrl: './atributo-list.component.html',
  styleUrls: ['./atributo-list.component.css']
})
export class AtributoListComponent implements OnInit {

  atributo: Atributo = new Atributo();
  atributos: Atributo[];
  exibirDialog: boolean;
  novoRegistro: boolean;

  entidades: SelectItem[] = [];
  tipos: SelectItem[] = [];


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private atributoService: AtributoService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.consultar();
    this.atributo = new Atributo();
    this.entidades = [];
    this.tipos = [
      { label: 'Selecione', value: null },
      { label: 'BOOLEAN', value: 'BOOLEAN' },
      { label: 'STRING', value: 'STRING' },
      { label: 'LONG', value: 'LONG' },
      { label: 'INTEGER', value: 'INTEGER' },
      { label: 'DOUBLE', value: 'DOUBLE' },
      { label: 'FLOAT', value: 'FLOAT' },
      { label: 'DATE', value: 'DATE' },
      { label: 'TIME', value: 'TIME' },
      { label: 'ENUM', value: 'ENUM' },
      { label: 'FK', value: 'FK' },
      { label: 'LIST', value: 'LIST' }];
    this.activatedRoute.params.subscribe(params => {
      const id = params.id ? Number(params.id) : null;
      console.log(id);
      if (id != null) {
        console.log("contem id" + id);
        this.buscar(id);
      }
    });

  }

  buscar(id: number) {
    this.atributoService.buscar(id).subscribe(resposta => {
      this.atributo = resposta as Atributo;
    }, error => {
      console.log(error);
      alert('erro atributos.' + error);
    });
  }

  consultar() {
    this.atributoService.consultar().subscribe(resposta => {
      this.atributos = resposta as Atributo[];
    }, error => {
      console.log(error);
      alert('erro atributos.' + error);
    });
  }

  novo() {
    const atributo = new Atributo();
    this.exibirModal(atributo);
  }

  exibirModal(atributo: Atributo) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    this.atributo = atributo;
  }

  salvar() {
    console.log('salvar');
    this.atributoService.adicionar(this.atributo).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({ severity: 'success', summary: 'OK', detail: 'Registro adicionado com sucesso.' });
      this.router.navigate(['/aplicacao/aplicacao-list']);
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
    this.atributoService.excluir(this.atributo).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({ severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.' });
    }, error => alert('erro atributos.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }

  onSubmit(atributoForm) {

  }

}

