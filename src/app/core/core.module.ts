import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdsComponent } from './components/ads/ads.component';
import { AnalyticsDashboardComponent } from './components/analytics-dashboard/analytics-dashboard.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { FilesComponent } from './components/files/files.component';
import { ImagesComponent } from './components/images/images.component';
import { LoginComponent } from './components/login/login.component';
import { MetaComponent } from './components/meta/meta.component';
import { ModalComponent } from './components/modal/modal.component';
import { CoreRoutingModule } from './core-routing.module';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
    declarations: [
        ModalComponent,
        AdsComponent,
        BottomSheetComponent,
        AnalyticsDashboardComponent,
        FilesComponent,
        ImagesComponent,
        LoginComponent,
        MetaComponent,
        PrivacyPolicyComponent,
        ResetPasswordComponent,
        SettingsComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        CoreRoutingModule
    ]
})
export class CoreModule {}
