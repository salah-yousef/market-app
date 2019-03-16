import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {
  @ViewChild(Slides) slidesCtrl: Slides;
  options: NativeTransitionOptions = {};
  myLastSlideState : boolean = false;
  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];
  constructor(
    public navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions) {

  }

  ionViewWillLeave() {

     this.options = {
       direction: 'left',
       duration: 500       
      };
   
    this.nativePageTransitions.slide(this.options)
      .then()
      .catch();   
   }

  goToHome() {
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.push(HomePage);
  }
}
