import { UtilitarioService } from './../providers/utilitario.service';
import { DashBoardPage } from './../pages/dash-board/dash-board';
import { CurriculosListaPage } from './../pages/curriculos-lista/curriculos-lista';
import { CurriculoService } from './../providers/curriculo.service';
import { InMemoryDataService } from './../providers/in-memory-data.service';
import { DialogoService } from './../providers/dialogo.service';
import { ValidadorService } from './../providers/validador.service';
import { CadastroCurriculoPage } from './../pages/cadastro-curriculo/cadastro-curriculo';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpModule } from '@angular/http';
import { Keyboard } from '@ionic-native/keyboard';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import './../util/rxjs-extensions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroCurriculoPage,
    CurriculosListaPage,
    DashBoardPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TextMaskModule,
    IonicModule.forRoot(MyApp),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroCurriculoPage,
    CurriculosListaPage,
    DashBoardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ValidadorService,
    DialogoService,
    CurriculoService,
    UtilitarioService,
    Keyboard
  ]
})
export class AppModule {}
