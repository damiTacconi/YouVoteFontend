import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectionsRoutingModule } from './elections-routing.module';
import { SelectElectionsComponent } from './pages/select-elections/select-elections.component';


@NgModule({
  declarations: [SelectElectionsComponent],
  imports: [
    CommonModule,
    ElectionsRoutingModule
  ]
})
export class ElectionsModule { }
