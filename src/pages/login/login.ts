import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: string;
  pass: string;

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController) {

                this.menuCtrl.enable(false);
  }

  access(user, pass) {
	console.log(this.pass);

	let color = document.getElementById('color');
		color.style.color = '#6200EE';

    let boton = document.getElementById('boton');
    if (this.user == 'Gianmarco' && this.pass == '4mesesdeinfinitos') {
      boton.removeAttribute('disabled');
    }
  }

  login() {
    this.menuCtrl.enable(true);
    document.getElementById('log').className = 'hide';
	document.getElementById('menu').className = '';
	document.getElementById('welcome').className = '';
  }


}
