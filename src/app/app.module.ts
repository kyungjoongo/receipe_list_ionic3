import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {LocalNotifications} from '@ionic-native/local-notifications';
import {MyApp} from './app.component';
import {ReceipeListPage} from '../pages/home/receipe_list';
import {List01Page} from "../pages/list01/list01";
import {AboutPage} from "../pages/about/about";
import {HttpProvider} from '../providers/http/http';
import {AdMobPro} from '@ionic-native/admob-pro';
import {GlobalVars} from "./constants";
import {DataProvider} from '../providers/data/data';

import {ImgLoader, IonicImageLoader} from "ionic-image-loader";
import { SearchModalPage} from "../pages/search-modal/search-modal";

@NgModule({
    declarations: [
        MyApp,
        ReceipeListPage,
        List01Page,
        AboutPage,
        SearchModalPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        IonicImageLoader.forRoot()

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ReceipeListPage,
        List01Page,
        AboutPage,
        SearchModalPage
    ],
    providers: [
        StatusBar,
        GlobalVars,
        SplashScreen,
        AdMobPro,
        InAppBrowser,
        LocalNotifications,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        HttpProvider,
        DataProvider
    ]
})
export class AppModule {
}
