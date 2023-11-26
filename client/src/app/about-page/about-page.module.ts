import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import {NavbarModule} from "../navbar/navbar.module";
import {FooterModule} from "../footer/footer.module";


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    NavbarModule,
    FooterModule
  ]
})
export class AboutPageModule { }
