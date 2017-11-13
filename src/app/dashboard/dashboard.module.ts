import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialUiModule } from '../material-ui/material-ui.module';
import { DashboardComponent } from './containers/dashboard.component';
import { WidgetVisitorComponent } from './components/widget-visitor/widget-visitor.component';
import { WidgetUserComponent } from './components/widget-user/widget-user.component';
import { WidgetSaleComponent } from './components/widget-sale/widget-sale.component';
import { WidgetProfitComponent } from './components/widget-profit/widget-profit.component';
import { VisitorLineChartComponent } from './components/visitor-line-chart/visitor-line-chart.component';
import { SaleLineChartComponent } from './components/sale-line-chart/sale-line-chart.component';
import { SaleMapComponent } from './components/sale-map/sale-map.component';
import { SaleOverviewComponent } from './components/sale-overview/sale-overview.component';

import { DashboardService } from './services/dashboard.service';
import { TransactionEffects } from './effects/transaction.effects';
import { reducers } from './reducers';

export const COMPONENTS = [
  DashboardComponent,
  SaleMapComponent,
  SaleOverviewComponent,
  SaleLineChartComponent,
  WidgetVisitorComponent,
  WidgetUserComponent,
  WidgetSaleComponent,
  WidgetProfitComponent,
  VisitorLineChartComponent
];

@NgModule({
  imports: [
    CommonModule,
    MaterialUiModule,
    ChartsModule,
    FlexLayoutModule,

    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature([TransactionEffects])
  ],
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: [DashboardService]
})
export class DashboardModule { }