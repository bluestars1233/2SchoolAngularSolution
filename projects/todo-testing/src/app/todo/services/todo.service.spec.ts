import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { TodoItem } from '../../shared';
import { TodoService } from './todo.service';

const todoDataResult = [
    { id: 1, checked: false, description: 'test1' },
    { id: 2, checked: false, description: 'test2' },
    { id: 3, checked: false, description: 'test3' },
    { id: 4, checked: false, description: 'test4' }
] as TodoItem[];

////////  Tests  /////////////
describe('Http-TodoService (mockBackend)', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                TodoService,
            ]
        })
            .compileComponents();
    }));

    it('can instantiate service when inject service',
        inject([TodoService], (service: TodoService) => {
            expect(service instanceof TodoService).toBe(true);
        }));

    it('load heroes from fake', inject(
        [HttpTestingController, TodoService],
        (
            httpMock: HttpTestingController,
            sut: TodoService
        ) => {
            // Action
            sut.load();

            const mockReq = httpMock.expectOne((sut as any).url);

            // Assert
            expect(mockReq.cancelled).toBeFalsy();
            expect(mockReq.request.responseType).toEqual('json');

            mockReq.flush(todoDataResult);
            expect(sut.todos).toEqual(todoDataResult);

            httpMock.verify();
        }
    ));
});
