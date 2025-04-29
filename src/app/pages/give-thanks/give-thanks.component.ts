import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-give-thanks',
  standalone: true,
  imports: [],
  templateUrl: './give-thanks.component.html',
  styleUrl: './give-thanks.component.css'
})
export class GiveThanksComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener los parámetros de consulta usando snapshot
    const queryParams = this.route.snapshot.queryParams;
    // console.log('Query Params (snapshot):', queryParams);
    if (queryParams["close"]) {
      setTimeout(()=>{
        window.close()
      }, 4000)
    }
  }

}
