import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MonthService, Month } from './../../assets/service/month.service';


@Component({
  selector: 'page-carteles',
  templateUrl: 'carteles.html'
})
export class CartelesPage {

    month: Month[];

    constructor(public navCtrl: NavController,
                private _monthService: MonthService) {

    }

    ngOnInit() {

        this.month = this._monthService.getMonth();
    }

    girar(i) {
        console.log(this.month[i])
    }

 
}
