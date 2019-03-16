import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";
import { ProductPage } from '../product/product';



@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  title: string ='';
  id: number = 0;
  categories: any = [];
  products: any = [];
  tap: string = '';
  imgLoad: number = 0;
  loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration: 30000
  });
  dataFetch :boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private dataProvider: DataProvider,
    private loadingCtrl: LoadingController) {
      this.loader.present();
      this.dataProvider.getData().subscribe((categories) => {
        this.dataFetch = true;
        this.categories = categories;
        this.products = this.categories[this.id].products;       
        this.tap = 'tap1';
        this.dataFetch = true;
        this.loader.dismiss();
      });
  }
  ionViewDidLoad() {
    this.title = this.navParams.get('category');
    this.id = this.navParams.get('id');
  }

  imgLoaded() {
    this.imgLoad ++;
    if(this.imgLoad === 5){
      console.log(this.imgLoad);
    }
  }

  onError(err) {
    this.imgLoad = 5;
    console.error(err);
  }

  onOpenProduct(product) {
    this.navCtrl.push(ProductPage, {product:product});
  }
}
