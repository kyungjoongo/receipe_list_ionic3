import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ReceipeListPage} from "./receipe_list";
import {IonicImageLoader} from 'ionic-image-loader';

@NgModule({
    declarations: [
        ReceipeListPage,
    ],
    imports: [
        IonicPageModule.forChild(ReceipeListPage),
        IonicImageLoader
    ],
})
export class ReceipeListPageModule {


}
