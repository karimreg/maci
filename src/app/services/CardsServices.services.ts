import { Injectable } from "@angular/core";
import { Card } from "../models/card.models";

@Injectable({
    providedIn: 'root'
  })

export class CardsService{
    getAllCards():Card[]{
        return this.cards;
    }
    cards:Card[]=[
        {
            id:1,
            imgURL:'assets/domino.jfif',
            description:'domino'
        },
        {
            id:2,
            imgURL:'assets/rami.jfif',
            description:'rami'
        },
        {
            id:3,
            imgURL:'assets/chno.jfif',
            description:'sba3'
        }
    ]
}