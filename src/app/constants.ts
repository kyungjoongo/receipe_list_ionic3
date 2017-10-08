import {Injectable} from '@angular/core';

@Injectable()
export class GlobalVars {

    public imageFetchUrl: string;

    constructor() {
        /*this.imageFetchUrl = "http://kyungjoon.ipdisk.co.kr:8080/";*/

        this.imageFetchUrl = "http://35.194.249.125:8080/";

        /*this.imageFetchUrl = "http://kyungjoon.ipdisk.co.kr:8080/";*/
    }

}
