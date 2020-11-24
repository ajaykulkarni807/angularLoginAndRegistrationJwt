import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {


  constructor(public Service: PaymentDetailService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm()
    }
    this.Service.formData={
      PMId: 0
    }

  }

  onSubmit(form: NgForm) {
     let id=this.Service.formData.PMId;
    if(id==0){
     this.posteRecord(form);
    }
    this.UpdateRecord(form);
    
  }

  posteRecord(form: NgForm) {
    this.Service.PostPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.Service.RefereshList();
        this.toaster.success("Submitted Successfully", "Payment Detail Register")
      },
      error => {
        console.log(error);
      }
    )
  }


  UpdateRecord(form: NgForm) {
    this.Service.PutPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.Service.RefereshList();
        this.toaster.info("Updated successfuly", "Payment Details");
      }, error => {
        console.log(error);
      }
    )
  }


}
