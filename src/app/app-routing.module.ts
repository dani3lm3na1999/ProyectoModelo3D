import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloComponent } from './modelo/modelo.component';

const routes: Routes = [
  { path: 'modelo', component: ModeloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
