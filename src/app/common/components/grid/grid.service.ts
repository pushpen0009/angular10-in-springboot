import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private httpClient: HttpClient) {}

  loadData(formData: any, request: any, url: string): Observable<any> {
    const size = request.endRow - request.startRow;
    const page = (request.endRow / size) - 1;
    const paginatedURL = url + '?page=' + page + '&size=' + size;
    const req = {
      ...formData
    };
    return this.httpClient.post(paginatedURL, req).pipe(map(data => {
      return data;
    }));
  }
}
