import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RubricaPage } from './rubrica/rubrica.page';
import { AddContactComponent } from './rubrica/add-contact/add-contact.component';
import { DetailContactComponent } from './rubrica/detail-contact/detail-contact.component';
import { TableContactsComponent } from './rubrica/table-contacts/table-contacts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RubricaPage,
    AddContactComponent,
    DetailContactComponent,
    TableContactsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
