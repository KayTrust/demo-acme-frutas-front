import { Component, computed, input } from '@angular/core';
import { QrImgComponent } from '../qr-img/qr-img.component';
import { MarkdownModule } from 'ngx-markdown';
import { LogoStepComponent } from '../logo-step/logo-step.component';

@Component({
  selector: 'app-section-qr',
  standalone: true,
  imports: [QrImgComponent, MarkdownModule, LogoStepComponent],
  templateUrl: './section-qr.component.html',
  styleUrl: './section-qr.component.css'
})
export class SectionQrComponent {
  qr_title = input('')
  qr_content = input.required<string>()
  class_content = input<string>()
  section_title = input<string>()
  description = input<string>()
  logo_url = input<string>()
  is_reverse = input(false, {
    transform: (value: boolean|string) => typeof value === 'string' ? value === '' : value,
  })
  qr_width = input(130)
  qr_class = input('p-12')
  logo_width = input<number>()
  logo_size = computed(()=>(this.logo_width() ?? (this.qr_width() + 10)) + 'px')

  order_qr = computed(()=>this.is_reverse() ? 'order-3' : 'order-1')
  order_logo = computed(()=>this.is_reverse() ? 'order-1' : 'order-3')

  bg_class = input<string>("bg-accent")

  bg_qr = computed(()=>!this.is_reverse() ? this.bg_class() : "bg-white")

  bg_section = computed(()=>{
    // let cls = this.is_reverse() ? this.bg_class() : undefined;
    const cls = [];
    if (this.is_reverse()) cls.push(this.bg_class());
    if (this.class_content()) cls.push(this.class_content());

    return cls.join(" ") || undefined;
  })
}
