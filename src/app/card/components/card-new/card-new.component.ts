import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../../image/services/image.service';
import { PageService } from '../../../page/services/page.service';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';


@Component({
    selector: 'app-card-new',
    templateUrl: './card-new.component.html',
    styleUrls: ['./card-new.component.css']
})
export class CardNewComponent implements OnInit {
    newPageCardForm: FormGroup;
    photoURL: string;
    title: string;
    body: string;
    buttonString: string;
    url: string;
    orderNumber: number;
    uid: string;
    $key: string;
    author: string;
    updatedAt: any;
    isExtURL: boolean;
    // State for dropzone CSS toggling
    isHovering: boolean;
    isInvalid: boolean;
    value: any;

    constructor(
        private pageService: PageService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private cardService: CardService,
        private storage: AngularFireStorage,
        private afs: AngularFirestore,
        private sbAlert: MatSnackBar,
        private imageService: ImageService,
    ) {
    }

    // For Form Validations
    get f() {
        return this.newPageCardForm.controls;
    }


    ngOnInit() {
        this.newPageCardForm = this.fb.group({
            orderNumber: [this.orderNumber || ''],
            title: [this.title,
                    Validators.compose([
                        Validators.required, Validators.minLength(3)
                    ])
            ],
            body: [this.body,
                   Validators.compose([
                       Validators.required, Validators.minLength(10)
                   ])
            ],
            photoURL: [this.photoURL, Validators.required],
            buttonString: [this.buttonString, Validators.required],
            url: [this.url],
            isExtURL: [this.isExtURL || false],
        });

        this.orderNumber = this.newPageCardForm.value.orderNumber;
        this.title = this.newPageCardForm.value.title;
        this.body = this.newPageCardForm.value.body;
        this.photoURL = this.newPageCardForm.value.photoURL;
        this.buttonString = this.newPageCardForm.value.buttonString;
        this.url = this.newPageCardForm.value.url;
        this.isExtURL = this.newPageCardForm.value.isExtURL;

    }

    onCreateCard(formData: Card) {
        if (!this.newPageCardForm.valid) {
            this.sbAlert.open('Form not valid', 'Dismiss', {
                duration: 3000,
                verticalPosition: 'bottom',
                panelClass: ['snackbar-danger']
            });
        } else {
            this.cardService.setPageCard(formData)
                .then(() => this.newPageCardForm.reset())
                .catch((error) => console.log(error));
        }


    }


}
