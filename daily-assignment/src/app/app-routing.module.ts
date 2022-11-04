import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RubricaPage } from './rubrica/rubrica.page';

const routes: Routes = [
  {
    path: 'rubrica',
    component: RubricaPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'rubrica',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
