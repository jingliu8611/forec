import {trigger, transition, style, animate, state} from '@angular/animations';

export const routerAnimations = trigger('routerAnimations', [
    state('*', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    transition('void => *', [
        style({
            opacity: 0,
            transform: 'translateX(100px)'
        }),
        animate(300)
    ]),
    transition('* => void', [
        animate(300, style({
            transform: 'translateX(100px)',
            opacity: 0
        }))
    ])
]);