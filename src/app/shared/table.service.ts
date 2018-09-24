import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class TableService {
    columns;
    private $columns: ReplaySubject<any>;
    tableKey: string;

    constructor(localStoreKey: string) {
        console.log('table', localStoreKey);
        this.$columns = new ReplaySubject(1);
        this.tableKey = localStoreKey;
        this.columns = JSON.parse(localStorage[this.tableKey] || '{}');
        this.$columns.next(this.columns);
    }

    setColumn (key, value) {
        this.columns[key] = value;
        localStorage[this.tableKey] = JSON.stringify(this.columns);
        this.$columns.next(this.columns);
    }


    get restrictedColumns (): Observable<any> {
        return this.$columns.pipe(map(columns => {
            return Object.keys(this.columns)
                .filter(key => this.columns[key] === false);
        }))
    }

}

export const TableServiceFactory = () => tableKey => {
    return new TableService(tableKey);
};