import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateProfileService {

  interestInfo: any = [];
  basicInfo: any = {};
  allInfo: any = {};

  constructor() { }

  setInfo(type: string, data: any) {
    if (type == 'interest') {
      this.interestInfo= data;
    }
    if (type == 'basic') {
      this.basicInfo = data;
    }
    if (type == 'all') {
      this.allInfo = data;
    }
  }

  getInfo(type: string) {
    if (type == 'interest') {
      return this.interestInfo;
    }
    if (type == 'basic') {
      return this.basicInfo;
    }
    if (type == 'all') {
      return this.allInfo;
    }
  }

}
