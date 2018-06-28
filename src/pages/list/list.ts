import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController) {

}
  amor: boolean;

  love(amor) {
    console.log('hola')
    let secreto = document.getElementById('secreto');
    if (this.amor == true ){
      secreto.className = '';
    } else {
    secreto.className = 'hide';
    }
  }

  holi() {
    document.getElementById('yop').className = '';
  }

}
