import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dominop',
  templateUrl: './dominop.component.html',
  styleUrls: ['./dominop.component.scss']
})
export class DominopComponent implements OnInit {
@Input() dominop!:number;
  constructor() { }
  score!:number;
  incScore(){this.score++;}
  decScore(){if(this.score!=0)this.score--;}
  ngOnInit(): void {
    this.score=0;
  }

}
