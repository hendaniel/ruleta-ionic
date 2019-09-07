import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assignitem",
  templateUrl: "./assignitem.page.html",
  styleUrls: ["./assignitem.page.scss"]
})
export class AssignitemPage implements OnInit {
  text: string = "";
  people: string = "";
  members: string[];
  elements: string[];
  prueba: string[];
  asign: string = "";
  sorprise = true;
  constructor() {}

  ngOnInit() {}

  sort() {
    console.log(this.prueba);
    
    this.prueba = new Array();
    this.asign = '';
  
    console.log(this.prueba + 'DESPUES');
    if (
      this.text != null &&
      this.text.trim() != "" &&
      this.people != null &&
      this.people.trim() != ""
    ) {
      this.elements = this.text.split(",");
      this.members = this.people.split(",");

      if (this.elements.length == this.members.length) {
        this.shuffle(this.elements);
        this.shuffle(this.members);
        for (var i = 0; i < this.elements.length; i++) {
          this.asign += this.elements[i] + " le toca " + this.members[i] + ",";
        }
        this.prueba = this.asign.split(",");
      } else {
        alert("Ingrese una igual cantidad de items y personas");
      }
    } else {
      alert("Ingrese informacion en ambas casillas");
    }
  }

  shuffle(a: { [x: string]: any; length: number }) {
    var j: number, x: any, i: number;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
}
