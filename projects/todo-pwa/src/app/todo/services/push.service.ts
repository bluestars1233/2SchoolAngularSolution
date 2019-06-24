import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { TodoItem } from '../../shared';
import { TodoService } from './todo.service';

// {
//   "notification": {
//      "title": "2do PWA",
//      "body": "Something happened, do you like to update?",
//      "icon": "assets/icons/android-chrome-192x192.png",
//      "vibrate": [100, 50, 100],
//      "data": {
//         "id": 1,
//     "checked": true,
//     "lastModified": "2019-05-03T14:25:43.511Z"
//      },
//     "actions": [{
//         "action": "update",
//         "title": "Let's see what happened!"
//    }]
//  }
// }

@Injectable({
  providedIn: 'root'
})
export class PushService {
  private lastNotifcation: NotificationOptions;

  constructor(private swPush: SwPush, private todoService: TodoService) {
    // Acquire push subscription and afterwards react onto pushes
    this.swPush
      .requestSubscription({ serverPublicKey: 'BGypBH3LCt-tzAV1zcjdpXaWcdBNm8RGpV-bRDR5ihE81BseWw-zp8XYuQ88RfK3Pc72ytmDKiGInMizhOlZ3YU' })
      .then((subscription: PushSubscription) => {
        this.acquiredSubscription();
      });
  }

  acquiredSubscription(): any {
    this.swPush.messages.subscribe((message: any) => {
      this.lastNotifcation = message.notification as NotificationOptions;
    });

    this.swPush.notificationClicks.subscribe(() => {
      const payload: TodoItem = this.lastNotifcation.data;

      if (payload) {
        const item = this.todoService.todos.find(
          (itemToFilter: TodoItem) =>
            itemToFilter.id === payload.id
        );

        if (item) {
          item.checked = payload.checked;
          item.description = payload.description;
          item.lastModified = payload.lastModified;
        }
      }
    });
  }
}
