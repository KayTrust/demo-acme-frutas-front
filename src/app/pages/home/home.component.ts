import { Component, inject } from '@angular/core';
import { SectionQrComponent } from '../../components/section-qr/section-qr.component';
import { OpenidService } from '../../common/openid.service';
import { MangoCorpComponent } from '../mango-corp/mango-corp.component';
import { MelonUniversityComponent } from '../melon-university/melon-university.component';
import { ApplicantsComponent } from '../applicants/applicants.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionQrComponent, MangoCorpComponent, MelonUniversityComponent, ApplicantsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  openidService = inject(OpenidService);

  mango_qr = this.openidService.getOpenIdStep2()
}
