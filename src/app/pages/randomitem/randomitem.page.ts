import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomitem',
  templateUrl: './randomitem.page.html',
  styleUrls: ['./randomitem.page.scss'],
})
export class RandomitemPage implements OnInit {


  text: string = "";
  elements: string[];
  final: string = "";
  sorprise = true;
  constructor() { }

  ngOnInit() {
  }

  sort() {
    this.sorprise = true;
    if (this.text != null && this.text.trim() != '') {
      this.elements = this.text.split(',');
      for (var i = 0; i < 10; i++) {
        let k = i;
        setTimeout(()=> {
          this.final = this.elements[Math.floor(Math.random() * (this.elements.length))];
        }, 100 * (k + 1));
      }
    setTimeout(()=>{
      this.sorprise = false;
    }, 1000);
    }
    else {
      alert("Ingresa Texto");
    }
    console.log(this.elements);
  }

}
