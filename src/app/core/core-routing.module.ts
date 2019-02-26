import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const coreRoutes: Routes = [
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
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
