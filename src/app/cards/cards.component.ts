import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../models/card.models';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() card!:Card;
  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  onviewgame(id:number){
    if(id==1){
      this.router.navigateByUrl('domino');
    }else 
      if(id==2){
        this.router.navigateByUrl('rami');
    }else{
      this.router.navigateByUrl('sba3');
    }
  }
}
