import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Invoice} from "../models/invoice";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  url = "http://localhost:3000/api"
  constructor(private http : HttpClient) { }

  getInvoices() : Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.url + "/invoices");
  }

  createInvoice(body: Invoice) : Observable<Invoice> {
    return  this.http.post<Invoice>(this.url + "/invoices", body);
  }

  deleteInvoice(id: string) : Observable<Invoice> {
    return this.http.delete<Invoice>(`${this.url}/invoices/${id}`);
  }

  getInvoice(id: string) : Observable<Invoice> {
    return this.http.get<Invoice>(`${this.url}/invoices/${id}`);
  }

  updateInvoice(id: string, body: Invoice) {
    return this.http.put<Invoice>(`${this.url}/invoices/${id}`, body);
  }

}
