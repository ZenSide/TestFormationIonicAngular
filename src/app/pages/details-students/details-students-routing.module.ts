import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsStudentsPage } from './details-students.page';

const routes: Routes = [
  {
    path: ':id',
    component: DetailsStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsStudentsPageRoutingModule {}
