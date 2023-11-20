import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import {NavbarModule} from "../navbar/navbar.module";
import { ShowreelWorksComponent } from './showreel-works/showreel-works.component';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    ShowreelWorksComponent,
    ClientsComponent
  ],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        NavbarModule
    ]
})
export class LandingPageModule { }
