import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css'],
})
export class DetailContactComponent implements OnInit {
  @Input() detailContact: Contact = new Contact();

  constructor() {}

  ngOnInit(): void {}
}
