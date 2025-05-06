import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-failed-share',
  standalone: true,
  imports: [],
  templateUrl: './failed-share.component.html',
  styleUrl: './failed-share.component.css'
})
export class FailedShareComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener los parámetros de consulta usando snapshot
    const queryParams = this.route.snapshot.queryParams;
    // console.log('Query Params (snapshot):', queryParams);
    if (queryParams["close"]) {
      setTimeout(()=>{
        window.close()
      }, 10000)
    }
  }

}
