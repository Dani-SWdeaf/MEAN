import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListingComponent } from './components/invoice-listing/invoice-listing.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    InvoiceListingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [InvoiceListingComponent]
})
export class InvoicesModule { }