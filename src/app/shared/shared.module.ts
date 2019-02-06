import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoWatermarkComponent } from './components/logo-watermark/logo-watermark.component';
import { MobileFooternavComponent } from './components/mobile-footernav/mobile-footernav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
    declarations: [
        MobileFooternavComponent,
        NavbarComponent,
        SidenavComponent,
        LogoWatermarkComponent,
    ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ],
    exports: [
        MobileFooternavComponent,
        NavbarComponent,
        SidenavComponent,
        LogoWatermarkComponent,
    ]
})
export class SharedModule {}
