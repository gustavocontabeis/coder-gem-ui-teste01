import { Entidade } from '../entidade/entidade';

export class Atributo {
    id: number;
    entidade: Entidade;
    nome: string;
    rotulo: string;
    coluna: string;
    tipo: string;
    obritatorio: boolean;
    tamanhoMinimo: number;
    tamanhoMaximo: number;
}
