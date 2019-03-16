import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { DataProvider } from "../../providers/data/data";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  categories: any = [];
  loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration: 30000
  });
  dataFetch :boolean = false;
  imgLoad: number = 0;
  slides = [
    {
      image: "assets/imgs/ica-slidebox-img-5.png",
    },
    {
      image: "assets/imgs/ica-slidebox-img-6.png",
    },
    {
      image: "assets/imgs/ica-slidebox-img-7.png",
    }
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private dataProvider: DataProvider,
    private loadingCtrl: LoadingController) {
      this.loader.present();
      this.dataProvider.getData().subscribe((categories) => {
        this.dataFetch = true;
        this.categories = categories;        
        this.loader.dismiss();
        console.log('d');
      });
    }
    
    openCategory(category: string, id: number) {
      this.navCtrl.push(CategoryPage,{category: category, id: id});
    }
    
    imgLoaded() {
      this.imgLoad ++;
      if(this.imgLoad === 4){
        console.log(this.imgLoad);
      }
    }
}
