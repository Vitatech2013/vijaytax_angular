import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddFilesComponent } from './add-files/add-files.component';
import { ExpensesComponent } from './expenses/expenses.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuardService],
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'add-files', component: AddFilesComponent },
      { path: 'expenses', component: ExpensesComponent },


    ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
