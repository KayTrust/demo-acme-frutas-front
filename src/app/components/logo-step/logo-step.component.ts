import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo-step',
  standalone: true,
  imports: [],
  templateUrl: './logo-step.component.html',
  styleUrl: './logo-step.component.css'
})
export class LogoStepComponent {
  logo_url = input.required<string>()
  logo_size = input<string>()
  cls_cnt = input<string>()
}
