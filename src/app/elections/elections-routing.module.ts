import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectElectionsComponent } from './pages/select-elections/select-elections.component';

const routes: Routes = [
  {
    path: '',
    component: SelectElectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionsRoutingModule { }
