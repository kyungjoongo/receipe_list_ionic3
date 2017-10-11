import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobalVars} from "../../app/constants";

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
    url2: any;
    result: any;

    constructor(public http: Http, public globalvars: GlobalVars) {
        console.log('Hello HttpProvider Provider');
        this.url2 = globalvars.imageFetchUrl + 'receipe/receipeListToJsonForPaging';
    }


    getJsonData(searchTerm: string, pageNo:number) {

        //alert("searchTerm-->"+ searchTerm);

        this.result = this.http.get(this.url2 +"?pageNo="+ pageNo+ "&searchTerm="+ searchTerm).map(res => res.json());
        console.log(this.result);


        return this.result;
    }


/*
    filterItems(searchTerm) {
        return this.result.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }*/

}
