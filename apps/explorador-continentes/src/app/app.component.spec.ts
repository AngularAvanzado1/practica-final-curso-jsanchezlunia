import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {Title} from '@angular/platform-browser';

describe('GIVEN: the AppComponent', () => {
  describe('WHEN: is rendered', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
        ],
        declarations: [AppComponent],
      }).compileComponents();
    });

    it('THEN: should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`THEN: should have as title 'Continental geographic region explorer'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.siteName).toEqual('Continental geographic region explorer');
    });

    it('THEN: should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain(
        'Welcome to Continental geographic region explorer!'
      );
    });
  });
});
