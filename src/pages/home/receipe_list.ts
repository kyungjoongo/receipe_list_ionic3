import {Component} from '@angular/core';
import {NavController, LoadingController, AlertController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {GlobalVars} from "../../app/constants";
import {AdMobPro} from "@ionic-native/admob-pro";
import {Platform, ModalController} from "ionic-angular";
import {LocalNotifications} from '@ionic-native/local-notifications';
import {SampleModalPage} from "../sample-modal/sample-modal";

import * as moment from 'moment';

@Component({
    selector: 'receipe-list',
    templateUrl: 'receipe_list.html',
    providers: [HttpProvider, GlobalVars, LocalNotifications]
})
export class ReceipeListPage {
    loading: any;
    imageUrl: string;
    searchTerm?: string = '';
    items: any;
    pageNo: number;

    posts: any;


    constructor(public navCtrl: NavController, private httpProvider: HttpProvider
        , public loadingController: LoadingController
        , private inAppBrowser: InAppBrowser
        , public globalVars: GlobalVars
        , private admob: AdMobPro
        , private platform: Platform
        , public alertCtrl: AlertController, public localNotifications: LocalNotifications
        , public modalcontroller: ModalController) {


        platform.ready().then(() => {


        });//plafFOrm Ready End

        this.imageUrl = globalVars.imageFetchUrl;
        this.loading = this.loadingController.create({
            content: '<ion-spinner></ion-spinner>'
        });
        this.pageNo = 1;

        this.getData(this.loading, '', this.pageNo);

    }//컨스트럭터 end


    /**
     * 리푸래쉬 이벤트.
     * @param refresher
     */
    doRefresh(refresher) {
     /*   var loading = this.loadingController.create({
            content: '<ion-spinner></ion-spinner>'
        });
        loading.present();
*/
        this.pageNo = 1;

        this.getData(this.loading, '', this.pageNo);
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


    getData(loading: any, searchTerm: string, pageNo) {
        //loading.present();

        // alert(this.pageNo);

        this.httpProvider.getJsonData(searchTerm, pageNo).subscribe(jsonResult => {
                this.posts = jsonResult;
                //this.initializeItems();
                /* console.log(JSON.stringify(this.posts));*/
            },
            error => {
                alert('애러다 이놈아');
            },
            () => {
                // loading.dismiss();
                // alert('완료했어요 ~~~');
            }
        );
    }

    doInfinite(infiniteScroll: any) {
        this.pageNo++;
        //alert(this.pageNo);
        this.httpProvider.getJsonData('', this.pageNo).subscribe(jsonResult => {

                console.log(jsonResult);

                if (jsonResult.length > 0) {
                    for (var i = 0; i < jsonResult.length; i++) {
                        this.posts.push(jsonResult[i]);
                    }


                }

                infiniteScroll.complete();

            },
            error => {
                alert('애러다 이놈아');
            },
            () => {

            }
        );


    }

    /*openModal() {

        let obj = {userId: '1', name: 'Bob', email: 'kyungjoongo@unicorn.com'};

        let myModal = this.modalcontroller.create(SampleModalPage, obj);

        //모달 윈도우가 해제 되었을떄 이벤트
        myModal.onDidDismiss(data => {
            // alert("검색어는-->"+ data.searchTerm);
            var loading = this.loadingController.create({
                content: '<ion-spinner></ion-spinner>'
            });


            this.getData(loading, data.searchTerm);


        });

        myModal.present();
    }*/

    /*getSearchItems(event: any) {
       this.initializeItems();
        // set val to the value of the searchbar
        let val = event.target.value;

        //alert(val);

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.posts = this.items.filter((filteredItem) => {

                return (filteredItem.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }*/


}
