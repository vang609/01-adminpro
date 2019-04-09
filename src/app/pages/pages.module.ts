import { NgModule } from "@angular/core";

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { GraphComponent } from './graph/graph.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        GraphComponent,
        PagesComponent
      ], 
      exports: [
        DashboardComponent,
        ProgressComponent,
        GraphComponent
      ],
      imports: [
        SharedModule,
        PAGES_ROUTES
      ]
})

export class PagesModule {  }