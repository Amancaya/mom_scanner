import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InvoiceService } from './invoice.service';

export interface IDocumentScanneer {
  id: string,
  text: Array<string>
}

export class DocumentScanneer implements IDocumentScanneer {
  constructor(
    public text: Array<string>,
    public id: string
   ) {
    this.id = id
    this.text = text
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'moms-scanner';
  eventSubscriber: Subscription = new Subscription();
  showLoader: Boolean = true;
  documentts: IDocumentScanneer[] = [];

  constructor(private service: InvoiceService) {}


  ngOnInit(): void {
    this.load()
  }

  ngOnDestroy() {
    this.eventSubscriber.unsubscribe();
  }

  load() {
    this.eventSubscriber.unsubscribe();
    this.eventSubscriber = this.service.getAll().subscribe((result) => { 
      this.documentts = result.map(rres => new DocumentScanneer(rres['text'], rres['id']))
    })
  }

  deleteAll() {
    this.service.deleteAll()
  }
}
