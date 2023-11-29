import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksPageRoutingModule } from './works-page-routing.module';
import { WorksPageComponent } from './works-page.component';
import {NavbarModule} from "../navbar/navbar.module";


@NgModule({
  declarations: [
    WorksPageComponent
  ],
    imports: [
        CommonModule,
        WorksPageRoutingModule,
        NavbarModule
    ]
})
export class WorksPageModule { }
