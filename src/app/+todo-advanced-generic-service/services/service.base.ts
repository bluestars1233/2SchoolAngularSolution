import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Cache } from './cache';

export abstract class ServiceBase<TItem> {
    protected cache: Cache<TItem[]>;

    constructor(protected http: Http, protected cacheKey: string) {
        this.cache = new Cache<TItem[]>(cacheKey);
    }

    public get(forceReload: boolean = false): Observable<TItem[]> {
        if (this.cache.hasCache() && !forceReload) {
            return Observable.create((observer) => {
                observer.next(this.cache.readCache());
                console.log('cache read');
                observer.complete();
            });
        }

        return this.http.get(this.getServiceUrl()).map((res) => {
            let orderStatus = res.json();
            this.cache.writeCache(orderStatus);
            console.log('cache written');
            return (<TItem[]> orderStatus);

        });
    }

    protected abstract getServiceUrl(): string;
}
