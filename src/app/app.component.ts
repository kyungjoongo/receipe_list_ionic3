import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {ReceipeListPage} from '../pages/home/receipe_list';
import {List01Page} from "../pages/list01/list01";
import {AdMobPro} from "@ionic-native/admob-pro";
import {AboutPage} from "../pages/about/about";
import {ImageLoader, ImageLoaderConfig} from 'ionic-image-loader';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = ReceipeListPage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private admob: AdMobPro
                ,imageLoader: ImageLoader
                ,private imageLoaderConfig: ImageLoaderConfig
    ) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();


            var admobid = {
                interstitial: 'ca-app-pub-6826082357124500/9307296734',
                banner: 'ca-app-pub-6826082357124500/7593091515'

            };

            this.admob.createBanner({
                adId: admobid.banner,
                isTesting: false,
                autoShow: true,
                position: this.admob.AD_POSITION.BOTTOM_CENTER
            })

            this.admob.prepareInterstitial({
                adId: admobid.interstitial,
                isTesting: false,
                autoShow: true
            })


        });


        // this.imageLoaderConfig.useImageTag(true);
        /*imageLoader.preload('http://demo.masscode.ru/masspaging/pic/1.png');*/


        this.initializeApp();

        //#########################
        // 레프트 메뉴 아이템s
        //#########################
        this.pages = [
            {title: '래시피 리스트', component: ReceipeListPage},
            {title: '앱 정보', component: AboutPage}
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

}

