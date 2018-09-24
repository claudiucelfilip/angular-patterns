import { Pipe, PipeTransform } from '@angular/core';
import { columnNameMappings } from './column.utils';

@Pipe({
    name: 'map'
})
export class MapPipe implements PipeTransform {
    transform(item, mapper: any|Function = columnNameMappings) {
        if (typeof mapper === 'function') {
            return mapper(item) || item;
        }
        return mapper[item] || item;
    }
}