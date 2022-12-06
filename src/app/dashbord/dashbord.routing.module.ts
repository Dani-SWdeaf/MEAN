import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListingComponent } from '../clients/components/client-listing/client-listing.component';
import { InvoiceListingComponent } from '../invoices/components/invoice-listing/invoice-listing.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { DashbordComponent } from './dashbord.component';
import {InvoiceFormComponent} from "../invoices/components/invoice-form/invoice-form.component";

const routes: Routes = [
  {
    path: '',
    component: DashbordComponent,
    children: [
      {
        path: 'invoices',
        component: InvoiceListingComponent
      },
      {
        path: 'invoices/new',
        component: InvoiceFormComponent
      },
      {
        path: 'invoices/:id',
        component: InvoiceFormComponent
      },
      {
        path: 'clients',
        component: ClientListingComponent
      },
      {
        path: '**',
        redirectTo: 'invoices'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
