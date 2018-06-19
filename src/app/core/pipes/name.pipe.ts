import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nameFilter',
    pure: false
})

export class NameFilterPipe implements PipeTransform {
    transform(list: any[], query: string): any {
        if (query.length === 0) {
            return list;
        } else {
            return list.filter(item =>
                item.todoName.toLowerCase().includes(query.toLocaleLowerCase())
            )
        }
    }
}