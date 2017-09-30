import {Component} from '@angular/core';
import {NavController, LoadingController, AlertController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {GlobalVars} from "../../app/constants";
import {AdMobPro} from "@ionic-native/admob-pro";
import {Platform} from "ionic-angular";
import {LocalNotifications} from '@ionic-native/local-notifications';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpProvider, GlobalVars, LocalNotifications]
})
export class HomePage {

  newsData: any;
  loading: any;
  imageUrl: string;

  /**
   * noti 관련 변수..
   */
  notifyTime: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;


  constructor(public navCtrl: NavController, private httpProvider: HttpProvider
    , public loadingController: LoadingController
    , private inAppBrowser: InAppBrowser
    , public globalVars: GlobalVars
    , private admob: AdMobPro
    , private platform: Platform
    , public alertCtrl: AlertController, public localNotifications: LocalNotifications) {


    platform.ready().then(() => {

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

    });//plafFOrm Ready End

    this.imageUrl = globalVars.imageFetchUrl;
    this.loading = this.loadingController.create({
      content: '<ion-spinner></ion-spinner>'
    });
    this.getdata(this.loading);

  }//컨스트럭터 end

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.loading = this.loadingController.create({
      content: '<ion-spinner></ion-spinner>'
    });

    this.loading.present();


    this.httpProvider.getJsonData().subscribe(jsonResult => {

        this.newsData = jsonResult;
        console.log(JSON.stringify(this.newsData));
      },
      error => {
        //alert('애러다 이놈아');
      },
      () => {
        // alert('완료했어요 ~~~');
        this.loading.dismiss();
      }
    );

    refresher.complete();

  }


  openWebPage(item) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    };

    if (item.url.match('https:') || item.url.match('http://')) {
      const browser = this.inAppBrowser.create(item.url, '_self', options);
    } else {
      alert('url 이 유효하지 않습니다');
    }
  }

  itemClicked(item) {
    alert('sdlkfsldkflsdkf');
  }


  getdata(loading: any) {

    loading.present();
    this.httpProvider.getJsonData().subscribe(jsonResult => {

        this.newsData = jsonResult;
        console.log(JSON.stringify(this.newsData));
      },
      error => {
        alert('애러다 이놈아');
      },
      () => {
        loading.dismiss();
        // alert('완료했어요 ~~~');
      }
    );
  }


}
