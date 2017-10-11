import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the SearchModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-search-modal',
    templateUrl: 'search-modal.html',
})
export class SearchModalPage {

    @ViewChild('myInput') myInput ;

    searchTerm :string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SearchModalPage');

        setTimeout(() => {
            this.myInput.setFocus();
        },1500);
    }


    searchReceipe() {
        let searchTerm = this.searchTerm;
        this.viewCtrl.dismiss({result: 'success', 'searchTerm': searchTerm});

    }
   /* closeModal() {
        this.navCtrl.pop({result: 'close'});
    }*/

    keyPress(event: any) {
        if (event.keyCode == 13) {

            this.searchReceipe();
        }
    }

}
