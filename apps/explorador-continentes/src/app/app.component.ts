import { Component } from '@angular/core';
import {SwPush, SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'pca-explorador-continentes-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'explorador-continentes';

  constructor(private swUpdate: SwUpdate,
              private swPush: SwPush) {
    this.checkVersionUpdates();
    // this.subscribeToNotifications();
  }

  private checkVersionUpdates() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate().then(data => console.log(data));
      this.swUpdate.available.subscribe(event => {
        if (event.current.appData) {
          const appData: any = event.current.appData;
          let msg = `Nueva versión ${appData.version} disponible.`;
          msg += `${appData.changelog}.`;
          msg += 'Actualizar ahora?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      });
    }
  }

  private subscribeToNotifications() {
    if (this.swPush.isEnabled) {
      this.swPush
        .requestSubscription({ serverPublicKey: 'VAPID_PUBLIC_KEY' })
        .then(sub => {
          console.log('subscription to server', sub.toJSON());
          this.swPush.messages.subscribe(msg => console.log('Received: ', msg));
        })
        .catch(err => console.error('Could not subscribe', err));
    }
  }
}
