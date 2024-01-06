import { Component } from '@angular/core';

@Component({
  selector: 'app-card-de-depoimento',
  templateUrl: './card-de-depoimento.component.html',
  styleUrls: ['./card-de-depoimento.component.scss']
})
export class CardDeDepoimentoComponent {
  depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `
  autoria: string = 'Mariana Faustino'
}
