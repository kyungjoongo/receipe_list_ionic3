import {Injectable} from '@angular/core';

@Injectable()
export class GlobalVars {

  public  imageFetchUrl: string;

  constructor() {
    this.imageFetchUrl = "http://kyungjoon.ipdisk.co.kr:8080/";
  }

}
