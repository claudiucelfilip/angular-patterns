import { Pipe, PipeTransform } from '@angular/core';
import { columnNameMappings } from './column.utils';

@Pipe({
    name: 'mapper'
})
export class MapperPipe implements PipeTransform {
    transform(items: any[], mapper: any|Function = columnNameMappings) {
        if (typeof mapper === 'function') {
            return items.map(mapper);
        }
        return items.map(item => mapper[item] || item);
    }
}