import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import {NavbarModule} from "../navbar/navbar.module";


@NgModule({
  declarations: [
    LandingPageComponent
  ],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        NavbarModule
    ]
})
export class LandingPageModule { }
