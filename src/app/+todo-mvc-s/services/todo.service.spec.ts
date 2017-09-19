import {
    async, inject, TestBed
} from '@angular/core/testing';

import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';

import {
    HttpModule, Http, XHRBackend, Response, ResponseOptions
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
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
describe('Http-TodoService (mockBackend)', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                TodoService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        })
            .compileComponents();
    }));

    it('can instantiate service when inject service',
        inject([TodoService], (service: TodoService) => {
            expect(service instanceof TodoService).toBe(true);
        }));

    it('can instantiate service with "new"', inject([Http], (http: Http) => {
        expect(http).not.toBeNull('http should be provided');
        let service = new TodoService(http);
        expect(service instanceof TodoService).toBe(true, 'new service should be ok');
    }));

    it('can provide the mockBackend as XHRBackend',
        inject([XHRBackend], (backend: MockBackend) => {
            expect(backend).not.toBeNull('backend should be provided');
        }));

    describe('when load on TodoService', () => {
        let backend: MockBackend;
        let service: TodoService;
        let fakeTodos: TodoItem[];
        let response: Response;

        beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
            backend = be;
            service = new TodoService(http);
            fakeTodos = makeTodoData();
            let options = new ResponseOptions({ status: 200, body: { data: fakeTodos } });
            response = new Response(options);
        }));

        it('should have expected fake todos (then)', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            service.load().toPromise()
                // .then(() => Promise.reject('deliberate'))
                .then((todos) => {
                    expect(todos.length).toBe(fakeTodos.length,
                        'should have expected no. of heroes');
                });
        })));

        it('should have expected fake todos (Observable.do)', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            service.load()
                .do((todos) => {
                    expect(todos.length).toBe(fakeTodos.length,
                        'should have expected no. of heroes');
                })
                .toPromise();
        })));

        it('should be OK returning no todos', async(inject([], () => {
            let resp = new Response(new ResponseOptions({ status: 200, body: { data: [] } }));
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

            service.load()
                .do((todos) => {
                    expect(todos.length).toBe(0, 'should have no heroes');
                })
                .toPromise();
        })));

        it('should treat 404 as an Observable error', async(inject([], () => {
            let resp = new Response(new ResponseOptions({ status: 404 }));
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

            service.load()
                .do((todos) => {
                    fail('should not respond with heroes');
                })
                .catch((err) => {
                    expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
                    return Observable.of(null); // failure is the expected test result
                })
                .toPromise();
        })));
    });
});
