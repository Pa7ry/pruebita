import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-carta',
  templateUrl: 'carta.html'
})
export class CartaPage {

  user: string;
  pass: string;
  amor: number = 20;
  
  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {

  }

  access(user, pass) {
    console.log(this.pass);
    let boton = document.getElementById('btn');
    if (this.user == 'Gianmarco' && this.pass == 'te amo pringao') {
      boton.removeAttribute('disabled');
    }
  }

  see() {
    document.getElementById('carta').className = '';
    document.getElementById('level').className = '';
    document.getElementById('decision').className = '';
    document.getElementById('secret').className = 'hide';
  }

  loveyou(amor) {
      console.log(amor)
      if (amor > 50) {
        document.getElementById('decision').className = '';
        document.getElementById('carta').className = 'hide';
        document.getElementById('level').className = 'hide';
      } else {
        document.getElementById('decision').className = 'hide';
        document.getElementById('carta').className = '';
        document.getElementById('level').className = '';
      }
  }

  

}
