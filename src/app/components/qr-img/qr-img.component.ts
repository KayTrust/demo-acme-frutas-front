import { Component, computed, effect, input, signal } from '@angular/core';
import {toDataURL} from 'qrcode';

@Component({
  selector: 'app-qr-img',
  standalone: true,
  imports: [],
  templateUrl: './qr-img.component.html',
  styleUrl: './qr-img.component.css'
})
export class QrImgComponent {
  qr_content = input.required<string>()
  width = input(130)
  size_px = computed(()=>this.width() + 'px')

  // prev_content = "";
  bg_class = input('bg-accent')
  pdd_class = input('p-12')

  cnt_clas = computed(()=>{
    const cls = [];
    if (this.bg_class()) cls.push(this.bg_class())
    if (this.pdd_class()) cls.push(this.pdd_class())
    return cls.join(" ");
  })

  src = signal("");

  constructor() {
    effect(async ()=>{
      const new_content = this.qr_content();
      try {
        // this.prev_content = new_content;
        this.src.set(await toDataURL(new_content, {
          width: this.width()
        }))
      } catch (error) {
        this.src.set("");
      }
    });
  }

}
