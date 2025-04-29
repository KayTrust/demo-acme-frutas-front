import { AfterViewInit, Component, inject, signal, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { LogoStepComponent } from '../../components/logo-step/logo-step.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { catchError, map, merge, startWith, switchMap, of as observableOf, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DatePipe } from '@angular/common';
import { SocketService } from '../../common/socket.service';

export interface ApplicantDto {
  createdAt: string,
  updatedAt: string,
  id: string,
  name: string,
  did: string,
}

type ColumnKey = keyof ApplicantDto | 'entity' | 'actions'

@Component({
  selector: 'app-applicants',
  standalone: true,
  imports: [LogoStepComponent, MatTableModule, MatSortModule, DatePipe],
  templateUrl: './applicants.component.html',
  styleUrl: './applicants.component.css'
})
export class ApplicantsComponent implements AfterViewInit {
  private _httpClient = inject(HttpClient);
  dataSource = signal<ApplicantDto[]>([])
  columns = signal<ColumnKey[]>(['name', 'entity', 'updatedAt', 'actions'])

  @ViewChild(MatSort) sort!: MatSort;
  dataGestor!: DataFromApiDatabase;

  isLoadingResults = signal(false)
  resultsLength = signal(0)

  constructor(private socketService: SocketService) {}

  ngAfterViewInit() {
    this.dataGestor = new DataFromApiDatabase(this._httpClient);

    this.socketService.last_applicant.subscribe((applicant)=>{
      if (applicant) {
        console.log("applicant", applicant)
        this.dataSource.update((data)=>{
          return [applicant, ...data];
        })
      }
    })

    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(this.sort.sortChange/* , this.paginator.page */)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults.set(true);
          return this.dataGestor!.getGetResponse(
            // this.sort.active,
            // this.sort.direction,
            // this.paginator.pageIndex,
          ).pipe(catchError(() => observableOf(null)));
        }),
        map(data_response => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults.set(false);
          // this.isRateLimitReached = data_response === null;

          if (data_response === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          // this.resultsLength.set(data_response.total_count);
          return data_response;
        }),
      )
      .subscribe(data => {
        // for (let index = 0; index < 29; index++) {
        //   data.push(data[0]);
        // }
        this.dataSource.set(data);

        // Actualizar la vista
        // (this.dataSource() as MatTableDataSource<any>)._updateChangeSubscription();
      });
  }
}

export type GetDataListResponseFromApi<T> = {
  data: T[];
  total_count: number
}

export class DataFromApiDatabase<Data extends ApplicantDto = ApplicantDto> {
  // private scrap_route: string
  // private keyId: string
  constructor(private _httpClient: HttpClient, /* scrap_route: string, keyId = 'id' */) {
    // this.scrap_route = scrap_route.trim().replace(/^\/+/, "")
    // this.keyId = keyId;
  }
  
  get baseUrl() {
    return `${environment.api_host}/user`
  }

  // data_response: GetDataListResponseFromApi<Data> | null = null;

  getGetResponse(): Observable<ApplicantDto[]> {
    const href = this.baseUrl;
    const requestUrl = `${href}`;

    const result = this._httpClient.get<ApplicantDto[]>(requestUrl)

    // result.pipe(first()).subscribe((response=>{
    //   this.data_response = response
    // }));
    
    return result;
  }

  // getId(data: any) {
  //   return data[this.keyId];
  // }

  // updateItem<ResponseData=Data, T=Partial<ResponseData>, R=ResponseItemBase<ResponseData>>(data: T, id:TypeIdDatos) {
  //   const href = `${this.baseUrl}/${id}`;
  //   const responseObs = this._httpClient.put<R>(href, data)
  //   return responseObs;
  // }
}