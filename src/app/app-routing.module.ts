import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './views/tela-inicial/tela-inicial.component';
import { DetalheFilmeComponent } from './views/detalhe-filme/detalhe-filme.component';

const routes: Routes = [
  {path: '', component: TelaInicialComponent},
  {path: 'detalhe-filme', component: DetalheFilmeComponent },
  {path: 'inicio', component: TelaInicialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
