import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CmpRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { CmpCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { CmpLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { CmpDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { CmpTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { CmpEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { CmpJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { CmpJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        CmpRegionMySuffixModule,
        CmpCountryMySuffixModule,
        CmpLocationMySuffixModule,
        CmpDepartmentMySuffixModule,
        CmpTaskMySuffixModule,
        CmpEmployeeMySuffixModule,
        CmpJobMySuffixModule,
        CmpJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CmpEntityModule {}
