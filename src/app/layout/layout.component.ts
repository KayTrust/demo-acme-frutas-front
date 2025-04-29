import { Component } from '@angular/core';
import { HeaderComponent } from '../components/generic/header/header.component';
import { FooterComponent } from '../components/generic/footer/footer.component';
import { SocketService } from '../common/socket.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private socketService: SocketService) {}
}
