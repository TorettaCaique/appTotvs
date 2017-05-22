import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {Storage} from '@ionic/storage';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import {Home} from '../pages/home/home';
import {Detalhes} from '../pages/detalhes/detalhes'
import { PagAdd } from '../pages/pag-add/pag-add';
import {TarefasService} from "../services/tarefas.services"


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    Home,
    PagAdd,
    Detalhes
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    Home,
    PagAdd,
    Detalhes
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TarefasService,
    
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
