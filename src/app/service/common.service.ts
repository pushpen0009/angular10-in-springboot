import { Injectable } from '@angular/core';
import MasterDataModel from '../model/MasterDataModel';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, concat} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements Resolve<MasterDataModel>{

  masterData: MasterDataModel;
  // staticDataUrl = '/api-gateway/general-service-app/general-service/api/v1/staticdata';
  // masterDataUrl = '/api-gateway/general-service-app/general-service/api/v1/masterData';

  constructor(private httpClient: HttpClient) { }

  getMasterData = () => {
    return this.masterData;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<MasterDataModel> | Promise<MasterDataModel> | MasterDataModel {
    if (this.masterData) {
      return this.masterData;
    }else {
      const staticData =  this.httpClient.get('assets/master-data.json').pipe(map(data => {
        return  (data as MasterDataModel);
      }));

      const master = this.httpClient.get('assets/master-data1.json').pipe(map(data => {
        // @ts-ignore
        const masterData = data?.usrGrpList?.[0];
        return  ({warehouses: masterData.warehouseIds, owners: masterData.ownerIds} as MasterDataModel);
      }));

      return concat(staticData, master).pipe(map(data => {
        this.masterData = {...this.masterData, ...data};
        return this.masterData;
      }));
    }
  }
}
