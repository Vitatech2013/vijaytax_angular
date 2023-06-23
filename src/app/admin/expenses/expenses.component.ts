import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpensesService } from 'src/app/shared/services/expenses.service';
import { IncomeService } from 'src/app/shared/services/income.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  formGroup:FormGroup | any
  login_id:any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    // public datepipe: DatePipe,
    private router: Router,
    private snackBar: MatSnackBar,
    private incomeService: IncomeService,
    private expensesService:ExpensesService
     ) { }

  ngOnInit(): void {
    this.login_id = window.localStorage.getItem('id');
  this.formGroup = this.formBuilder.group({
    expenseType: ['', Validators.required],
    amount: new FormControl('', [
      Validators.required,
    ]),
    paymentType: new FormControl('', [
      Validators.required,
    ]),
    note: new FormControl('', ),
    // status: new FormControl('', ),
  });
}
  onSubmit(){
    if (this.formGroup.status === 'INVALID') {
      this.snackBar.open('Please Fill The Details!', 'Warning', {
        duration: 2000,
      });
    // this.formGroup.controls['expenseType'].,
    this.formGroup.markAllAsTouched();
      return
    }

    let expenseData = {
      expenseType:this.formGroup.controls['expenseType'].value,
      amount:this.formGroup.controls['amount'].value,
      paymentType:this.formGroup.controls['paymentType'].value,
      note:this.formGroup.controls['note'].value,
      login_id:this.login_id,
      status:"1"
    }
    this.expensesService.addExpenses(expenseData).subscribe((data) => {
      // this.employeesData = data;
      if (data) {
        this.snackBar.open('Added Successfully!', 'Success', {
          duration: 2000,
        });
        // this.router.navigate(['/admin/employees']);
      }
    });

  }
}

