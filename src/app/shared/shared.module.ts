import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MobileFooternavComponent } from './components/mobile-footernav/mobile-footernav.component';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
    declarations: [
        MobileFooternavComponent,
        NavbarComponent,
        SidenavComponent,
    ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ]
})
export class SharedModule {}
