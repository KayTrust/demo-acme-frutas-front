import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenidService {

  constructor() {}

  getOpenIdStep2() {
    const origin = environment.redirect_origin || location.origin;
    return environment.openid_url.replaceAll("<current_uri>", encodeURIComponent(origin))
  }
}
