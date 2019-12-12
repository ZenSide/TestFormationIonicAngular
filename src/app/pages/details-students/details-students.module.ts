import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsStudentsPageRoutingModule } from './details-students-routing.module';

import { DetailsStudentsPage } from './details-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsStudentsPageRoutingModule
  ],
  declarations: [DetailsStudentsPage]
})
export class DetailsStudentsPageModule {}
