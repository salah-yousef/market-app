import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SlidesPage } from '../pages/slides/slides';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SlidesPage;
  @ViewChild('nav') nav: NavController;
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
    });
  }

  openPage() {
    this.menuCtrl.close();
  }
  closeMenu() {
    this.menuCtrl.close();
  }
}

