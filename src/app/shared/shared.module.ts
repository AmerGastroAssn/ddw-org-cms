import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBar, MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';
import { CKEditorModule } from 'ng2-ckeditor';
import { BsDatepickerModule, PopoverModule, ProgressbarModule, TabsModule, TimepickerModule } from 'ngx-bootstrap';
import { LogoWatermarkComponent } from './components/logo-watermark/logo-watermark.component';
import { MobileFooternavComponent } from './components/mobile-footernav/mobile-footernav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { RunScriptsDirective } from './directives/run-scripts.directive';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
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
        SafeHtmlPipe,
    ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        MatSidenavModule,
        MatButtonModule,
        MatMenuModule,
        ProgressbarModule,
        BsDatepickerModule.forRoot(),
        PopoverModule,
        TabsModule,
        TimepickerModule,
        CKEditorModule,
        MatExpansionModule,
        MatTooltipModule,
        MatBottomSheetModule,
        MatDividerModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatCardModule,
        MatSnackBarModule,
    ],
    exports: [
        MobileFooternavComponent,
        NavbarComponent,
        SidenavComponent,
        LogoWatermarkComponent,
        RunScriptsDirective,
        DropZoneDirective,
        MatSidenavModule,
        MatButtonModule,
        MatMenuModule,
        ProgressbarModule,
        BsDatepickerModule,
        PopoverModule,
        TabsModule,
        TimepickerModule,
        CKEditorModule,
        MatExpansionModule,
        MatTooltipModule,
        MatBottomSheetModule,
        MatDividerModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatCardModule,
        SafeHtmlPipe,
        MatSnackBarModule,

    ],
    providers: [
        AuthService,
        UserService,
    ]
})
export class SharedModule {}
