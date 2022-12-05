import { Injectable } from '@angular/core';
import { Model } from './model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {
 VendorObs=new Subject<Model>();
  ve?:Model;
  setVendor(vendor:Model) {
    this.ve=vendor;
    this.VendorObs.next(vendor);
  }
  constructor() { 

  }
}
