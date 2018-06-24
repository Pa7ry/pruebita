import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: string;
  pass: string;
  
  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {

  }

  access(user, pass) {
    console.log(this.pass);
    let boton = document.getElementById('boton');
    if (this.user == 'Gianmarco' && this.pass == '4mesesdeinfinitos') {
      boton.disabled = false;
    }
  }

  see() {
    document.getElementById('slides').className = '';
    console.log('hola');
    document.getElementById('login').className = 'hide';

    const toast = this.toastCtrl.create({
      message: '¡TE QUIERO!',
      duration: 3000
    });
    toast.present();
  }

}
