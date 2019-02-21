import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const cardRoutes: Routes = [
    // { path: 'cards', component: CardsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(cardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CardRoutingModule {}
