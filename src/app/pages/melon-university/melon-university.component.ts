import { Component, signal } from '@angular/core';
import { SectionQrComponent } from '../../components/section-qr/section-qr.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-melon-university',
  standalone: true,
  imports: [SectionQrComponent],
  templateUrl: './melon-university.component.html',
  styleUrl: './melon-university.component.css'
})
export class MelonUniversityComponent {
  qr_content = signal(environment.melon_openid4vci_deeplink)
}
