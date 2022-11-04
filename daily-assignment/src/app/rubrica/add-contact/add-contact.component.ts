import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  newContact: Contact = new Contact();

  @Output() addContact = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  createContact() {
    this.addContact.emit(this.newContact);
    this.newContact = new Contact();
  }
}
