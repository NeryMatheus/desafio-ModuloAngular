import { Component, OnInit } from '@angular/core';
import { Cardapio } from '../cardapio';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  cardapio: Cardapio[] = [];
  
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.listCardapio().subscribe(cardapio => {
      this.cardapio = cardapio;
    });
  }

  addItem(produto: Cardapio){
    this.pedidoService.addItem(produto);
  }

  getQtdTotal(): number{
    return this.pedidoService.getQtdTotal();
  }
  getValorTotal(): number{
    return this.pedidoService.getValorTotal();
  }
}
