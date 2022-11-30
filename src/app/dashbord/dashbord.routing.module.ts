import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListingComponent } from '../clients/components/client-listing/client-listing.component';
import { InvoiceListingComponent } from '../invoices/components/invoice-listing/invoice-listing.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { DashbordComponent } from './dashbord.component';

const routes: Routes = [
  {
    path: '',
    component: DashbordComponent,
    children: [
      {
        path: '',
        component: MainContentComponent
      },
      {
        path: 'invoices',
        component: InvoiceListingComponent
      },
      {
        path: 'clients',
        component: ClientListingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
