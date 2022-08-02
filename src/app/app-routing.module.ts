import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DominoContComponent } from './domino-cont/domino-cont.component';
import { RamiContComponent } from './rami-cont/rami-cont.component';
import { Sba3Component } from './sba3/sba3.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'domino',component:DominoContComponent},
  {path:'rami',component:RamiContComponent},
  {path:'sba3',component:Sba3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
