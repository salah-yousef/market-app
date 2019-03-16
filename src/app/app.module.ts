import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

import { MyApp } from './app.component';
import { SlidesPage } from '../pages/slides/slides';
import { HomePageModule } from '../pages/home/home.module';
import { CategoryPageModule } from '../pages/category/category.module';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageModule } from '../pages/product/product.module';

@NgModule({
  declarations: [
    MyApp,
    SlidesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    CategoryPageModule,
    ProductPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SlidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions,
    DataProvider
  ]
})
export class AppModule {}
