import { NgModule } from '@angular/core';
import { IonicPageModule,IonicModule } from 'ionic-angular';
import { SearchModalPage } from './search-modal';

@NgModule({
  declarations: [
    SearchModalPage,
  ],
  imports: [
      IonicModule.forRoot(SearchModalPage),
  ],
})
export class SearchModalPageModule {}
