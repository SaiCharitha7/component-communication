import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';
import { Model } from 'src/app/model';
@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  sVendor!:Model;
  constructor(private blockservice:VendorServiceService) { }
  ngOnInit(): void {
    this.blockservice.VendorObs.subscribe((a)=>{
      this.sVendor=a;
    })
  }
  }
