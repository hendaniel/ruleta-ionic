import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})

export class HomePage {

  text: string = "";
  elements: string[];
  final: string = "";
  constructor(public navCtrl: NavController) {

  }
  sort() {
    if (this.text != null && this.text.trim() != '') {
      this.elements = this.text.split(',');
      for (var i = 0; i < 10; i++) {
        let k = i;
        setTimeout(()=> {
          this.final = this.elements[Math.floor(Math.random() * (this.elements.length))];
        }, 100 * (k + 1));
      }
    }
    else {
      alert("Ingresa Texto");
    }
    console.log(this.elements);
  }
}
