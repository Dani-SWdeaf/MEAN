import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InvoiceService} from "../../services/invoice.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {Invoice} from "../../models/invoice";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  private invoice: Invoice;
  invoiceForm: FormGroup;
  constructor(private fb: FormBuilder, private apInvoice: InvoiceService, private snakBar: MatSnackBar, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.createForm();
    this.setInvoiceToForm();
  }
  onSave(){
    if (this.invoice) {
      this.apInvoice.updateInvoice(this.invoice._id, this.invoiceForm.value).subscribe(data => {
        this.snakBar.open('Invoice updated', 'Success', {
          duration: 200
        });
        this.router.navigate(['dashbord','invoices'])
      }, error => this.errorHandler(error, 'Failed to updated invoice'))
    }
    else {
      this.apInvoice.createInvoice(this.invoiceForm.value).subscribe(data => {
        this.snakBar.open('Inovice created', 'Success', {
          duration: 2500
        });
        this.invoiceForm.reset();
        this.router.navigate(['/dashbord'])
        console.log(data);
      }, err => this.errorHandler(err, 'Failed to create Inovice'))
    }
  }

  regresar() {
    this.router.navigate(['dashbord']);
  }

  private setInvoiceToForm() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(!id)
      {
        return
      }
      this.apInvoice.getInvoice(id).subscribe(invoice => {
        this.invoice = invoice;
        this.invoiceForm.patchValue(this.invoice);
      }, error => this.errorHandler(error, 'Falied id to get Invoice'))
      console.log(id);
    })
  }

  private createForm() {
    this.invoiceForm = this.fb.group({
      item: ['', Validators.required],
      date: ['', Validators.required],
      due: ['', Validators.required],
      qty: ['', Validators.required],
      tax: ['', Validators.required],
      rate: ['', Validators.required]
    })
  }

  private errorHandler(error:any, message:any) {
    console.error(error);
    this.snakBar.open(message, 'Error', {
      duration: 2000
    })
  }
}
