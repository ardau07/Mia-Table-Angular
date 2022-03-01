import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';

export class TableAnimation {

    static componentAnimation = trigger('componentAnimation',[
        transition('void => *', [
          query('tr', style({ transform: 'translateY(100px)', opacity: 0 })),
          query('tr' ,
          stagger('100ms', [
            animate('400ms ease', style({ transform: 'translateY(0)', opacity: 1 }))
          ]))
        ])
    ]);
}
