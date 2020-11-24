import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toster: ToastrService) { }

  ngOnInit(): void {
    this.service.RefereshList();
  }

  PopulateData(pd: typeof PaymentDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  DeleteRecord(id) {
    if(confirm("Are you sure want to Delete this record")){
      this.service.DeletePaymentDetail(id).subscribe(
        res => {
          this.service.RefereshList();
          this.toster.warning("Record Deleted", "Payment Detail ");
        },
        err => {
          console.log(err);
        }

      )
    }
  }



}
