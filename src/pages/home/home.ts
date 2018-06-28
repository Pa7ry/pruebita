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

  ngOnInit(): void {
    const toast = this.toastCtrl.create({
      message: '¡TE QUIERO!',
      duration: 3000
    });
    toast.present();
  }

}
