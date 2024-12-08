import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productModel, productList } from '../product.model';
import { FormBuilder, Validators } from '@angular/forms';
import { CartserviceService } from 'src/app/core/services/cartservice.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})

/**
 * Ecommerce product-detail component
 */
export class ProductdetailComponent implements OnInit {
validSubmit() {
throw new Error('Method not implemented.');
}

  breadCrumbItems: Array<{}>;
  public productDetail: productModel[];

  isImage;
productForm: any;
submit: any;
config: any;

constructor(private fb: FormBuilder ,private route: ActivatedRoute,private cartserviceService:CartserviceService) {
    this.route.params.subscribe(params =>
      this.productDetail = productList.filter(function (product) {
        return product.id == parseInt(params.id)
      })
    );
    this.isImage = this.productDetail[0].images[0];
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Product Detail', active: true }];
    this.productForm = this.fb.group({
      distanceCategory: ['', Validators.required],
      month: ['', Validators.required],
      addTshirt: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
    });
  }

  /**
   * onclick Image show
   * @param event image passed
   */
  imageShow(event) {
    const image = event.target.src;
    this.isImage = image;
    const expandImg = document.getElementById('expandedImg') as HTMLImageElement;
    expandImg.src = image;
  }

  get form() {
    return this.productForm.controls;
  }

  onSubmit(): void {
    this.submit = true;
    if (this.productForm.valid) {
      console.log('Form Data:', this.productForm.value);
      let { name,disRate,id } = this.productDetail[0]
      this.cartserviceService.addToCart({id,name,disRate,...this.productForm.value})
      alert('Item Added to cart')
      // Perform actions like adding the product to the cart
    } else {
      console.error('Form is invalid');
    }
  }

  onCancel(): void {
    this.productForm.reset();
    this.submit = false;
  }
}
