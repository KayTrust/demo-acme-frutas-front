import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, signal, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { LangCode, LanguageService } from '../../../common/language.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public langService = inject(LanguageService)

  lang = signal(this.langService.getCurrentLang())

  langInfo = computed(()=>({...this.langService.langs[this.lang()], key: this.lang()}))

  constructor() {
    this.langService.lang$.subscribe(lang=>{
      this.lang.set(lang);
    })
  }

  @ViewChild('drop') drop!: ElementRef<HTMLDivElement>;

  pickLang(lang: LangCode) {
    this.langService.setLang(lang);
    setTimeout(()=>{
      this.drop.nativeElement.querySelectorAll("*:focus").forEach((ele)=>{
        (ele as HTMLDivElement)?.blur();
      })
    }, 100)
  }
}
