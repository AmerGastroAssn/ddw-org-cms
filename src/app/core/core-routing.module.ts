import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './components/ads/ads.component';
import { AnalyticsDashboardComponent } from './components/analytics-dashboard/analytics-dashboard.component';
import { MetaComponent } from './components/meta/meta.component';
import { ModalComponent } from './components/modal/modal.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SettingsComponent } from './components/settings/settings.component';

const coreRoutes: Routes = [
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'dashboard', component: AnalyticsDashboardComponent },
    { path: 'meta', component: MetaComponent },
    { path: 'modal', component: ModalComponent },
    { path: 'ads', component: AdsComponent },
    { path: 'settings', component: SettingsComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(coreRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class CoreRoutingModule {}
