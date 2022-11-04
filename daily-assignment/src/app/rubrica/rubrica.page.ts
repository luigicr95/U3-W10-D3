import { Component, OnInit } from '@angular/core';
import { Contact } from '../classes/contact';

@Component({
  templateUrl: './rubrica.page.html',
  styleUrls: ['./rubrica.page.css'],
})
export class RubricaPage implements OnInit {
  infoContact?: Contact;

  listaContatti: Contact[] = [
    {
      name: 'Mario',
      lastname: 'Rossi',
      city: 'Roma',
      phone: '12345',
      email: 'm.rossi@example.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onRemoveContact(contact: Contact) {
    this.listaContatti = this.listaContatti.filter(
      (c) => c.email !== contact.email
    );
    // let index = this.listaContatti.findIndex((c) => c.email === contact.email);
    // this.listaContatti.splice(index, 1);
  }

  onCreateContact(contact: Contact) {
    this.listaContatti.push(contact);
  }

  onShowDetail(contact: Contact) {
    this.infoContact = contact;
  }
}
