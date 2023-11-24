import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import {NavbarModule} from "../navbar/navbar.module";
import { ShowreelWorksComponent } from './showreel-works/showreel-works.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FooterModule} from "../footer/footer.module";


@NgModule({
  declarations: [
    LandingPageComponent,
    ShowreelWorksComponent,
    ClientsComponent,
    ContactsComponent
  ],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        NavbarModule,
        FooterModule,
        NgOptimizedImage
    ]
})
export class LandingPageModule { }
