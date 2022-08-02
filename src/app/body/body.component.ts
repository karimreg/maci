import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.models';
import { CardsService } from '../services/CardsServices.services';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  cards!:Card[];
  constructor(private cardsService:CardsService) { }

  ngOnInit(): void {
    this.cards=this.cardsService.getAllCards();
  }

}
