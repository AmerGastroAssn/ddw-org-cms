import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileListComponent } from './components/file-list/file-list.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FileComponent } from './components/file.component';

const fileRoutes: Routes = [
    {
        path: 'files', component: FileComponent, children: [
            { path: '', component: FileListComponent },
            { path: 'uploader', component: FileUploaderComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(fileRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FileRoutingModule {}
