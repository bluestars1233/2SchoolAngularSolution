import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class Disposer {
    private subscriptions: Subscription[] = [];

    public safeSubscribe(...subscribe: Subscription[]) {
        subscribe.forEach((subscription: Subscription) => this.subscriptions.push(subscription));
    }

    public dispose(): void {
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }
}
