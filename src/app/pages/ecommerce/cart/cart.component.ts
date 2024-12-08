import { Component, OnInit } from '@angular/core';

import { Cart } from './cart.model';

import { CartserviceService } from '../../../core/services/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

/**
 * Ecommerce Cart component
 */
export class CartComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  value: number;

  cartData: Cart[];
  BillTotal: any;

  constructor(private cartserviceService:CartserviceService) { }

  ngOnInit() {

    this.value = 4;
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Cart', active: true }];
    

    /**
     * fetches the data
     */
    this._fetchData();
  }
  gettotal(product){

    this.cartserviceService.updateCartItem(product.id,product.quantity)
    this.BillTotal = this.cartData.reduce((pre:any,curr:any)=>{
      pre += (parseFloat(curr.disRate) * curr.quantity) 
      return pre
    },0)
  }

  /**
   * Cart data fetch
   */
  private _fetchData() {
    this.cartData = this.cartserviceService.getCartItems();
    this.gettotal(null)
  }
  removeItem(id){
    this.cartserviceService.removeFromCart(id)
    this._fetchData()
  }

}
