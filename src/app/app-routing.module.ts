import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from './calendar/calendar.module';
import { ContentSectionModule } from './content-section/content-section.module';
import { ImageModule } from './image/image.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes,
            // { enableTracing: true }  // For route debugging.
        ),
    ],
    exports: [
        RouterModule,
        CalendarModule,
        ContentSectionModule,
        UserModule,
        ImageModule,
    ]
})
export class AppRoutingModule {}
