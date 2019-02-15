import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BottomSheetComponent } from '../shared/components/bottom-sheet/bottom-sheet.component';
import { AdsComponent } from './components/ads/ads.component';
import { AnalyticsDashboardComponent } from './components/analytics-dashboard/analytics-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MetaComponent } from './components/meta/meta.component';
import { ModalComponent } from './components/modal/modal.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SignupComponent } from './components/signup/signup.component';
import { CoreRoutingModule } from './core-routing.module';
import { AdsService } from './services/ads.service';
import { FileService } from '../file/services/file.service';
import { ImageService } from '../image/services/image.service';
import { MetaService } from './services/meta.service';
import { ModalService } from './services/modal.service';
import { PrivacyPolicyService } from './services/privacy-policy.service';
import { SettingsService } from './services/settings.service';

@NgModule({
    declarations: [
        ModalComponent,
        AdsComponent,
        BottomSheetComponent,
        AnalyticsDashboardComponent,
        // FilesComponent,
        // ImagesComponent,
        LoginComponent,
        MetaComponent,
        PrivacyPolicyComponent,
        ResetPasswordComponent,
        SettingsComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
    ],
    providers: [
        AdsService,
        FileService,
        ImageService,
        MetaService,
        ModalService,
        PrivacyPolicyService,
        SettingsService,
    ]
})
export class CoreModule {}
