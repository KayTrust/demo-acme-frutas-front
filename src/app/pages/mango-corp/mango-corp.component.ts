import { Component, inject } from '@angular/core';
import { QrImgComponent } from '../../components/qr-img/qr-img.component';
import { SectionQrComponent } from '../../components/section-qr/section-qr.component';
import { OpenidService } from '../../common/openid.service';

@Component({
  selector: 'app-mango-corp',
  standalone: true,
  imports: [SectionQrComponent],
  templateUrl: './mango-corp.component.html',
  styleUrl: './mango-corp.component.css'
})
export class MangoCorpComponent {
  openidService = inject(OpenidService);

  mango_qr = this.openidService.getOpenIdStep2()
}
