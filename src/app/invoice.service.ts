import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection } from 'firebase/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  INVOICE = "invoice"

  constructor(private afs: AngularFirestore, private firestore: Firestore) {  }

  getAll() {
    let invoces = collection(this.firestore, "invoice")
    return collectionData(invoces)
  }

  deleteAll() {
    this.afs.collection(this.INVOICE).get().forEach(data => {
      data.docs.forEach(doc => {
        this.afs.collection(this.INVOICE).doc(doc.id).delete()
      })
    })
  }
}
