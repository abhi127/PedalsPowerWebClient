import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartserviceService } from 'src/app/core/services/cartservice.service';
import { UserProfileService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

/**
 * Ecommerce checkout component
 */
export class CheckoutComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  selectValue = [];
  stateValue = [];
  addressForm: FormGroup;
  activeId = 1;
  Checkoutcart: any[];
  IsAddressSaved: boolean = false;
  BillTotal: any;

  constructor(private fb: FormBuilder,private Cart:CartserviceService,private user:UserProfileService) {
    this.addressForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      notes: ['']
    });
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Checkout', active: true }];
    this.Checkoutcart = this.Cart.getCartItems()
    this.getUserAddress()
    this.gettotal()
  }

  onSubmitAddress(){
    this.activeId = 3
    return
    this.user.saveAddress(this.addressForm.value).subscribe(res=>{
      console.log('Address Saved')
    },err=>{
      console.log(err)
    })
  }

  getUserAddress(){
    this.user.getAddress().subscribe((res:any)=>{
      this.addressForm.patchValue(res.data)
    })
  }

  gettotal(){

    this.BillTotal = this.Checkoutcart.reduce((pre:any,curr:any)=>{
      pre += (parseFloat(curr.disRate) * curr.quantity) 
      return pre
    },0)
  }

}
