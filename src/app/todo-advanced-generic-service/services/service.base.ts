import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { cloneArray } from '../../state';

import { Cache } from './cache';

export abstract class ServiceBase<TItem> {
    public items: TItem[];
    protected cache: Cache<TItem[]>;
    private orig: TItem[];

    constructor(protected http: HttpClient, protected cacheKey: string) {
        this.cache = new Cache<TItem[]>(cacheKey);
    }

    public load(forceReload: boolean = false): Observable<TItem[]> {
        if (this.cache.hasCache() && !forceReload) {
            this.items = this.cache.readCache();
            this.orig = this.cache.readCache();

            const ubs =  Observable.create((observer) => {
                observer.next(this.cache.readCache());
                console.log('cache read');
                observer.complete();
            });
            return ubs;
        }
        const obs = this.http.get<TItem[]>(this.getServiceUrl());

        obs.subscribe((res) => {
                this.cache.writeCache(res);
                console.log('cache written');
                this.items = res;
                this.orig = res;
                return res as TItem[];
        });

        return obs;
    }

    public add(newItem: TItem): void {
        this.items.push(newItem);

        this.persist();
    }

    public reset(): void {
        this.items = cloneArray(this.orig);
        this.persist();
    }

    public persist(): void {
        this.cache.writeCache(this.items);
    }

    protected abstract getServiceUrl(): string;
}
