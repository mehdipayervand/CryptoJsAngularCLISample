import { Component } from '@angular/core';
import * as CryptoJS from "crypto-js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  password: string;
  inputString: string;
  outputString: string;

  constructor() {
    this.password = '919';
    this.inputString = 'MehdiPayervand';
  }

  encrypt() {
    this.outputString = "";
    this.outputString = this._encrypt(this.inputString, this.password);
  }

  decrypt() {
    this.inputString = "";
    this.inputString = this._decrypt(this.outputString, this.password);
  }

  private _encrypt(body: string, password: string) {
    var key =  CryptoJS.enc.Utf8.parse('7061737323313233');
    var iv = CryptoJS.enc.Utf8.parse('7061737323313233');
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(body), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    body = encrypted.toString();
    return body;
  }

  private _decrypt(encrypted: string, password: string) {
    debugger;

    var key =  CryptoJS.enc.Utf8.parse('7061737323313233');
    var iv = CryptoJS.enc.Utf8.parse('7061737323313233');

    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    let body = decrypted.toString(CryptoJS.enc.Utf8);
    return body;
  }



  sample() {
    debugger;
    var key = CryptoJS.enc.Utf8.parse('7061737323313233');
    var iv = CryptoJS.enc.Utf8.parse('7061737323313233');
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse("It works"), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });

    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    alert('Encrypted :' + encrypted);
    alert('Key :' + encrypted.key);
    alert('Salt :' + encrypted.salt);
    alert('iv :' + encrypted.iv);
    alert('Decrypted : ' + decrypted);
    alert('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));
  }


}



