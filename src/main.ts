import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {LicenseManager} from '@ag-grid-enterprise/core';

LicenseManager.setLicenseKey('CompanyName=QSSI LLC,LicensedGroup=QSSI,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=2,LicensedProductionInstancesCount=0,AssetReference=AG-010198,ExpiryDate=3_September_2021_[v2]_MTYzMDYyMzYwMDAwMA==ef55ed69caaa0068ec49783cd04da49e');
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
