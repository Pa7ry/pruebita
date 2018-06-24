import { Injectable } from '@angular/core';

@Injectable()
export class MonthService {
    private month: any[] = [
        {
            day: 21,
            word: '<ion-icon ios="ios-star" md="md-star"></ion-icon>',
        },
        {
            day: 22,
            word: '<ion-icon ios="ios-flower" md="md-flower"></ion-icon>',
        },
        {
            day: 23,
            word: 'SE',
        },
        {
            day: 24,
            word: 'EL',
        },
        {
            day: 25,
            word: 'CADA',
        },
        {
            day: 26,
            word: 'DÍA',
        },
        {
            day: 27,
            word: 'NO',
        },
        {
            day: 28,
            word: 'SOLO',
        },
        {
            day: 29,
            word: 'TÚ',
        },
        {
            day: 30,
            word: 'VE',
        },
        {
            day: 31,
            word: 'CORAZÓN',
        },
        {
            day: 1,
            word: 'QUE',
        },
        {
            day: 2,
            word: 'HACE',
        },
        {
            day: 3,
            word: 'FALTA',
        },
        {
            day: 4,
            word: 'ME',
        },
        {
            day: 5,
            word: 'PUEDES',
        },
        {
            day: 6,
            word: 'BIEN',
        },
        {
            day: 7,
            word: 'PASA',
        },
        {
            day: 8,
            word: 'ME',
        },
        {
            day: 9,
            word: 'NIRVANA',
        },
        {
            day: 10,
            word: 'PARA',
        },
        {
            day: 11,
            word: 'HACER',
        },
        {
            day: 12,
            word: 'TAN',
        },
        {
            day: 13,
            word: 'SINO'
        },
        {
            day: 14,
            word: 'ENAMORAS',
        },
        {
            day: 15,
            word: 'MÁS',
        },
        {
            day: 16,
            word: 'LLEGAR',
        },
        {
            day: 17,
            word: 'AL',
        },
        {
            day: 18,
            word: 'FELIZ',
        },
        {
            day: 19,
            word: 'NO',
        },
        {
            day: 20,
            word: 'CON',
        },
        {
            day: 21,
            word: 'Y',
        },
        {
            day: 22,
            word: 'MÁS',
        },
        {
            day: 23,
            word: 'NIRVANA',
        },
        {
            day: 24,
            word: '<ion-icon ios="ios-heart" md="md-heart"></ion-icon>',
        }

    ]
    
    constructor() {
        console.log('Servicio listo para usarse');
    }

    getMonth(): Month[] {
        return this.month;
    }
}

export interface Month {
    day: number;
    word: string;
}
