import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MonthService, Month } from './../../assets/service/month.service';


@Component({
  selector: 'page-carteles',
  templateUrl: 'carteles.html'
})
export class CartelesPage {

    month: Month[];
	vuelto: boolean = false;

    constructor(public navCtrl: NavController,
                private _monthService: MonthService) {

    }

    ngOnInit() {

        this.month = this._monthService.getMonth();
    }

    girar(vuelto) {
		let dia = document.getElementById('dia');
		let palabra = document.getElementById('palabra');
        
		if (vuelto == false) {
			palabra.className = 'hide';
			dia.className = '';
			return vuelto = true;
		} else {
			dia.className = 'hide';
			palabra.className = '';
			return vuelto = false;
		}
    }

 
}
