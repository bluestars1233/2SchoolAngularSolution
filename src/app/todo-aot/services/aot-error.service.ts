import { Injectable, Inject } from '@angular/core';

@Injectable()
export class TodoAotService {
    constructor() {
        console.log('this will not work with aot compiler!');
    }
}
