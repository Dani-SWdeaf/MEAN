import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListingComponent } from './components/client-listing/client-listing.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
@NgModule({
  declarations: [
    ClientListingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [ClientListingComponent]
})
export class ClientsModule { }
