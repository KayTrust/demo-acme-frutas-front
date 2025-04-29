import { Injectable, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import io, { Socket } from 'socket.io-client';
import { ApplicantDto } from '../pages/applicants/applicants.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService implements OnDestroy {

  socket = io(`${environment.api_host}/`, {
    // path: "/ws/socket.io", 
    autoConnect: false, 
    transports: ['websocket'],
  })

  private _last_applicant = new Subject<ApplicantDto>()
  last_applicant = this._last_applicant.asObservable();

  constructor() {
    this.socket.connect();
    this.socket.on('vp_inserted', (applicant: ApplicantDto) => {
      this._last_applicant.next(applicant);
    })
  }
  ngOnDestroy() {
    this.socket.disconnect();
  }
}
