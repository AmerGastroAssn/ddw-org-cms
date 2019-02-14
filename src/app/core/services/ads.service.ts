import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable } from 'rxjs';
import { Ads } from '../models/ad';

@Injectable({
    providedIn: 'root'
})
export class AdsService {
    adsCollection: AngularFirestoreCollection<Ads[]>;
    adsDoc: AngularFirestoreDocument<Ads>;
    ads: Observable<Ads>;
    $key: string;

    constructor(
        private afs: AngularFirestore,
        private router: Router,
        private flashMessage: FlashMessagesService,
        public sbAlert: MatSnackBar,
    ) {
        this.$key = 'stB5CaEitpZxkJ1KF7rJ';
    }

    getAds(): Observable<Ads> {
        this.adsDoc = this.afs.doc<Ads>(`ads/${this.$key}`);
        this.ads = this.adsDoc.snapshotChanges().map((action) => {
            if (action.payload.exists === false) {
                return null;
            } else {
                const data = action.payload.data() as Ads;
                data.$key = action.payload.id;
                return data;
            }
        });

        return this.ads;
    }

    updateAds(updatedAds): void {
        this.adsDoc = this.afs.doc<Ads>(`ads/${this.$key}`);

        this.adsDoc.update(updatedAds)
            .then(() => {
                this.sbAlert.open('Ads Saved!', 'Dismiss', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    panelClass: ['snackbar-success']
                });
                console.log('Ads updated', updatedAds);
            })
            .catch((error) => {
                this.sbAlert.open('Ads were NOT Saved!', 'Dismiss', {
                    duration: 3000,
                    verticalPosition: 'bottom',
                    panelClass: ['snackbar-danger']
                });
                console.log(`ERROR~uA: `, error);
            });
    }
}
