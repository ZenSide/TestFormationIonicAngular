import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeStudentsPageRoutingModule } from './liste-students-routing.module';

import { ListeStudentsPage } from './liste-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeStudentsPageRoutingModule
  ],
  declarations: [ListeStudentsPage]
})
export class ListeStudentsPageModule {}
