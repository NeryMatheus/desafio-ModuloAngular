import { Component } from '@angular/core';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  constructor(private pedidoService: PedidoService) { }

  getItens(){
    return this.pedidoService.getItens();
  }

  limparCarrinho(){
    this.pedidoService.limparCarrinho();
  }

  getValorTotal(): number{
    return this.pedidoService.getValorTotal();
  }

}
