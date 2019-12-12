import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeStudentsPage } from './liste-students.page';

const routes: Routes = [
  {
    path: '',
    component: ListeStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeStudentsPageRoutingModule {}
