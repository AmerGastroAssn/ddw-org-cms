import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { CalendarModule } from './calendar/calendar.module';
import { CardModule } from './card/card.module';
import { ContentSectionModule } from './content-section/content-section.module';
import { FileModule } from './file/file.module';
import { ImageModule } from './image/image.module';
import { PageModule } from './page/page.module';
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
        FileModule,
        AuthModule,
        CardModule,
        PageModule,
    ]
})
export class AppRoutingModule {}
