import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../../shared';

@Pipe({
  name: 'myTodoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  public transform(items: TodoItem[], filterStrings: string): any {
    if (!filterStrings) {
      return items;
    }

    const filterStr = filterStrings.toLowerCase();
    return items.filter((i) => i.description.toLowerCase().indexOf(filterStr) !== -1
      || i.description.toLowerCase().indexOf(filterStr) !== -1);
  }

}
