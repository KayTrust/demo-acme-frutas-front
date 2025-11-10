import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitleHeaderStore {
  private router = inject(Router);

  constructor() {
    this.router.events.subscribe(()=>{
      const currentRoute = this.router.routerState.root;
      let route = currentRoute;
      while (route.firstChild) {
        route = route.firstChild;
      }
      const titleFromData = route.snapshot.data['customTitle'];
      if (titleFromData) {
        this.title.set(titleFromData);
      } else {
        this.title.set(this.defaultTitle);
      }
    });
  }


  private defaultTitle = 'MELÓN UNIVERSITY';

  title = signal(this.defaultTitle);
}
