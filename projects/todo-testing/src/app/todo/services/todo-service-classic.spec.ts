import { Observable, Observer } from 'rxjs';
import { TodoItem } from '../../shared';
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
        const fakeHttp = { get: () => { } } as any;
        let observerFake: Observer<TodoItem[]>;
        const obs = new Observable((observer) => {
            observerFake = observer;
        });
        const items = makeTodoData();

        spyOn(fakeHttp, 'get').and.returnValues(obs);
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
