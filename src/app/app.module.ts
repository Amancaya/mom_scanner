import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyCM7iuSXT8LHpQqdYpuLVPdnvuebDnmv8Q",
  authDomain: "momscanner-a3d4e.firebaseapp.com",
  projectId: "momscanner-a3d4e",
  storageBucket: "momscanner-a3d4e.appspot.com",
  messagingSenderId: "639328760240",
  appId: "1:639328760240:web:8b576142452b283d51e675"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    // provide modular style for AppCheck, see app.browser/server
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
