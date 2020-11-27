import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
 formData: PaymentDetail;
  list: PaymentDetail[];
  readonly url= "http://localhost:8081/api";

  constructor(private http:HttpClient) { }

   PostPaymentDetail(){
   return  this.http.post(this.url + '/PaymentDetail',this.formData);
   }
   PutPaymentDetail(){
   return  this.http.put(this.url + '/PaymentDetail/' + this.formData.PMId ,this.formData);
   }

   DeletePaymentDetail(id){
   return  this.http.delete(this.url + '/PaymentDetail/'+ id);
   }

   RefereshList(){
     this.http.get(this.url + '/PaymentDetail').toPromise().then(
       res=> this.list=res as PaymentDetail[])
   }

  


}
