import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CartelesPage } from '../pages/carteles/carteles';
import { CartaPage } from './../pages/carta/carta';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MonthService } from './../assets/service/month.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CartelesPage,
    CartaPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CartelesPage,
    CartaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MonthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
