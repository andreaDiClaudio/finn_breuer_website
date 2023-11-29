import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorksPageComponent } from './works-page.component';

const routes: Routes = [{ path: '', component: WorksPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksPageRoutingModule { }
