import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  product: any;
  imgLoad: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = this.navParams.get('product');
    console.log(this.product);
  }


  
  imgLoaded() {
    this.imgLoad ++;
    if(this.imgLoad === 1){
      console.log(this.imgLoad);
    }
  }

  onError(err) {
    this.imgLoad = 1;
    console.error(err);
  }

}
