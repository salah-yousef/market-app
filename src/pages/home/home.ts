import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  


}
