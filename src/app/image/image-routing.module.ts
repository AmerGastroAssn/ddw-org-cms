import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ImageComponent } from './components/image.component';

const imageRoutes: Routes = [
    {
        path: 'images', component: ImageComponent, children: [
            { path: '', component: ImageListComponent },
            { path: 'uploader', component: ImageUploaderComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(imageRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ImageRoutingModule {}
