import {Component, OnInit} from '@angular/core';
import {SwPush, SwUpdate} from '@angular/service-worker';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'pca-explorador-continentes-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {

  public siteName = 'Continental geographic region explorer';

  constructor(private swUpdate: SwUpdate,
              private swPush: SwPush,
              public title: Title,
              private meta: Meta) {
    this.checkVersionUpdates();
    // this.subscribeToNotifications();
  }

  ngOnInit(): void {
    this.title.setTitle(this.siteName);
    this.meta.addTag({property: 'og:title', content: this.siteName}, true);
    this.meta.addTag({property: 'og:description', content: 'Landing page SEO friendly generada con SSR que muestra la lista de continentes'}, true);
    this.meta.addTag({property: 'og:locale', content: 'en_US'}, true);
    this.meta.addTag({property: 'og:type', content: 'website'}, true);
    // this.meta.addTag({property: 'og:image', content: ''}, true);
    // this.meta.addTag({property: 'og:url', content: ''}, true);
  }

  private checkVersionUpdates() {
    if (this.swUpdate.isEnabled) {
      // this.swUpdate.checkForUpdate().then(data => console.log(data));
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
