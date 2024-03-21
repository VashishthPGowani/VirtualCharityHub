import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  public encrypt(txt: string,secretKey:string){
    return CryptoJS.AES.encrypt(txt, secretKey).toString();
  }
  
  public decrypt(txtToDecrypt: string,secretKey:string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, secretKey).toString(CryptoJS.enc.Utf8);
  }
}
