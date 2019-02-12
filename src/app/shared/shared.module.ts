import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoWatermarkComponent } from './components/logo-watermark/logo-watermark.component';
import { MobileFooternavComponent } from './components/mobile-footernav/mobile-footernav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { RunScriptsDirective } from './directives/run-scripts.directive';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
    declarations: [
        MobileFooternavComponent,
        NavbarComponent,
        SidenavComponent,
        LogoWatermarkComponent,
        RunScriptsDirective,
        DropZoneDirective,
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
        RunScriptsDirective,
        DropZoneDirective,
    ],
    providers: [
        AuthService,
        UserService,
    ]
})
export class SharedModule {}
