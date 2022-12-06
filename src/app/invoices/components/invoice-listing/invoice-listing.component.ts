import {Component, OnInit} from '@angular/core';
import {InvoiceService} from "../../services/invoice.service";
import {Invoice} from "../../models/invoice";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
// @ts-ignore
import { remove } from "lodash";

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss']
})
export class InvoiceListingComponent implements OnInit {
  constructor(private apInvoices: InvoiceService, private router: Router, private apInvoice: InvoiceService, private snakBar: MatSnackBar) {
  }
  displayedColumns: string[] = ['item', 'date', 'due', 'qty', 'rate', 'tax', 'action'];
  dataSource: Invoice[] = [];

  ngOnInit() {
    this.apInvoices.getInvoices().subscribe(data => {
      this.dataSource = data;
      console.log(data);
    }, error => this.errorHandler(error, 'No hay datos'))
  }

  saveBtn() {
    this.router.navigate(['dashbord','invoices','new']);
  }

  deleteBtn(id:string) {
    this.apInvoice.deleteInvoice(id).subscribe(data => {
      const removedItems = remove(this.dataSource, (item: any) => {
        return item._id === data._id
      });
      this.dataSource = [...this.dataSource];
      this.snakBar.open('Delete :(', 'Danger', {
        duration: 3000
      })
    }, err => this.errorHandler(err, 'Failed to create Inovice'))
  }

  editBtn(id: string) {
    this.router.navigate(['dashbord','invoices', id])
  }

  private errorHandler(error: any, message: any) {
    console.error(error);
    this.snakBar.open(message, 'Error', {
      duration: 3000
    })
  }
}
