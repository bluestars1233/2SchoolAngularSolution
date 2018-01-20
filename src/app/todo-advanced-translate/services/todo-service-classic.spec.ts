import { async, inject, TestBed } from '@angular/core/testing';
import { Http, HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { POINT_CONVERSION_COMPRESSED } from 'constants';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { TodoItem } from '../../common';
import { TodoService } from './todo.service';

const makeTodoData = () => [
    { id: 1, checked: false, description: 'test1' },
    { id: 2, checked: false, description: 'test2' },
    { id: 3, checked: false, description: 'test3' },
    { id: 4, checked: false, description: 'test4' }
] as TodoItem[];

////////  Tests  /////////////
describe('Http-HeroService (mockBackend)', () => {
    it('load heroes from fake', () => {
        // Arrange
        const fakeHttp = {} as any;
        let observerFake: Observer<TodoItem[]>;
        const obs = new Observable((observer) => {
            observerFake = observer;
        });
        const items = makeTodoData();

        spyOn(fakeHttp, 'get').and.returnValues(makeTodoData());
        const sut = new TodoService(fakeHttp);

        // Action
        let result;
        sut.load().subscribe((resultFromService) => {
            result = resultFromService;
        });
        observerFake.next(items);
        observerFake.complete();

        // Assert
        expect(fakeHttp.get).toHaveBeenCalled();
        expect(result).toBe(items);
    });
});
