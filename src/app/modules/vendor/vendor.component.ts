import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from 'src/app/vendor-service.service';
import { VendorModule } from './vendor.module';
import { Model } from 'src/app/model';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  public va:Model[] = [{"name":"sai", "age":24, "city": "guntur"},
              {"name":"sindhu","age":21,"city":"hyderabad"},
              {"name":"charitha","age":21,"city":"hyderabad"}
 ]
   
   constructor() { }

  ngOnInit(): void {
  }

}
