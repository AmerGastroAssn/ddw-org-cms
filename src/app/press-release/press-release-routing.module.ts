import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PressReleaseDetailsComponent } from './components/press-release-details/press-release-details.component';
import { PressReleaseEditComponent } from './components/press-release-edit/press-release-edit.component';
import { PressReleaseListComponent } from './components/press-release-list/press-release-list.component';
import { PressReleaseNewComponent } from './components/press-release-new/press-release-new.component';
import { PressReleaseComponent } from './components/press-release.component';

const pressReleaseRoutes: Routes = [
    {
        path: 'press-releases', component: PressReleaseComponent,
        children: [
            { path: '', component: PressReleaseListComponent },
            { path: 'new', component: PressReleaseNewComponent },
            { path: ':id', component: PressReleaseDetailsComponent },
            { path: ':id/edit', component: PressReleaseEditComponent },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(pressReleaseRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PressReleaseRoutingModule {}
