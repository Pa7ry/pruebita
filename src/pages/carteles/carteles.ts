import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MonthService, Month } from './../../assets/service/month.service';


@Component({
  selector: 'page-carteles',
  templateUrl: 'carteles.html'
})
export class CartelesPage {

    month: Month[];
	vuelto: boolean;

    constructor(public navCtrl: NavController,
                private _monthService: MonthService) {

    }

    ngOnInit(vuelto) {

        this.month = this._monthService.getMonth();
        console.log(this.vuelto);
    }

    girar(vuelto) {  
        this.vuelto = true;
    }

 
}
