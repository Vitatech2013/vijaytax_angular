import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { FileComponent } from './file/file.component';
import { AddFilesComponent } from './add-files/add-files.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { NewNavComponent } from './new-nav/new-nav.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NavComponent,
    FileComponent,
    AddFilesComponent,
    ExpensesComponent,
    NewNavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // GoogleChartsModule,
    // MatTableExporterModule,

  ],
})
export class AdminModule { }
