import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cardapio } from './cardapio';


export interface ItemCardapio{
  quantidade: number,
  produto: Cardapio;
}

const urlBase = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})


export class PedidoService {

  itens: ItemCardapio[] = [];

  constructor(private http: HttpClient) { }

  // Lista os produtos do cardápio
  listCardapio(){
    return this.http.get<Cardapio[]>(`${urlBase}/cardapio`);
  }

  // Adiciona um produto no carrinho
  addItem(produto: Cardapio){
    const item = this.itens.find(item => item.produto.descricao === produto.descricao);
    if(item){
      item.quantidade++;
    }else{
      this.itens.push({
        quantidade: 1,
        produto
      });
    }
  }

  // Incrementa um produto ao ícone do carrinho
  getQtdTotal(): number{
    let total = 0;
    for(let item of this.itens){
      total += item.quantidade;
    }
    return total;
  }

  // Soma o valor dos produtos que estão sendo adicionados no carrinho
  getValorTotal(): number{
    let total = 0;
    for(let item of this.itens){
      total += item.quantidade * item.produto.preco;
    }
    return total;
  }

  // Retorna os valores salvos no ItemCardapio
  getItens(){
    return this.itens;
  }

  //Limpar Carrinho
  limparCarrinho(){
    this.itens = [];
  }
}
