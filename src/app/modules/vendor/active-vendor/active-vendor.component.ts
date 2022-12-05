import { Component, Input, Output, OnInit , EventEmitter} from '@angular/core';
import { VendorComponent } from '../vendor.component';
import { VendorServiceService } from 'src/app/vendor-service.service';
import { Model } from 'src/app/model';
@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {
    @Input() vendorlist: Model[]=[];
    selectedvendor?:Model;
    OnselectedVendor(vendor:Model):void {
      this.selectedvendor=vendor;
      console.log(this.selectedvendor);
      this.vendorservice.setVendor(this.selectedvendor)
    }
    constructor(private vendorservice:VendorServiceService) { }
  ngOnInit(): void {
  }

}
