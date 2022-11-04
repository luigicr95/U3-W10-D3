import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-table-contacts',
  templateUrl: './table-contacts.component.html',
  styleUrls: ['./table-contacts.component.css'],
})
export class TableContactsComponent implements OnInit {
  @Input() contactList?: Contact[];
  @Output() deleteContact = new EventEmitter();
  @Output() contactDetail = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  removeContact(contact: Contact): void {
    this.deleteContact.emit(contact);
  }

  showDetail(contact: Contact): void {
    this.contactDetail.emit(contact);
  }
}
