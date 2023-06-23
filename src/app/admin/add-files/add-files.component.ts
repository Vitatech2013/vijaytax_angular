import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomeService } from 'src/app/shared/services/income.service';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.scss']
})
export class AddFilesComponent implements OnInit {
formGroup:FormGroup | any
  login_id:any;
  totalamount: any;
  paidamount: any;
  dueamount: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    // public datepipe: DatePipe,
    private router: Router,
    private snackBar: MatSnackBar,
    private incomeService: IncomeService,
     ) { }

  ngOnInit(): void {
    this.login_id = window.localStorage.getItem('id');
  this.formGroup = this.formBuilder.group({
    incomeType: new FormControl('', Validators.required),
    // fullName: new FormControl('', Validators.required),
    // phone: new FormControl(''),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[6-9]\d{9}$/),
    ]),
    totalAmount: new FormControl('0', [
      Validators.required,
    ]),
    paidAmount: new FormControl('0', [
      Validators.required,
    ]),
    dueAmount: new FormControl('0', [
      Validators.required,
    ]),
    paymentType: new FormControl('', [
      Validators.required,
    ]),
    year: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    // bloodGroup: new FormControl(''),
    panNo: new FormControl('', Validators.required),
    note: new FormControl('', ),


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
    let IncomeData = {
      incomeType:this.formGroup.controls['incomeType'].value,
      panNo:this.formGroup.controls['panNo'].value,
      userName:this.formGroup.controls['userName'].value,
      mobile:this.formGroup.controls['mobile'].value,
      year:this.formGroup.controls['year'].value,
      totalAmount:this.formGroup.controls['totalAmount'].value,
      paidAmount:this.formGroup.controls['paidAmount'].value,
      dueAmount:this.formGroup.controls['dueAmount'].value,
      paymentType:this.formGroup.controls['paymentType'].value,
      note:this.formGroup.controls['note'].value,
      login_id:this.login_id,
      status:"1"
    }
    this.incomeService.addIncome(IncomeData).subscribe((data) => {
      // this.employeesData = data;
      if (data) {
        this.snackBar.open('Added Successfully!', 'Success', {
          duration: 2000,
        });
        // this.router.navigate(['/admin/employees']);
      }
    });

  }
  onKeyUpEvent(event:any){
if(this.formGroup.controls['totalAmount'].value==""||this.formGroup.controls['totalAmount'].value==null){
  this.formGroup.controls['totalAmount'].setValue('0')
}
if(this.formGroup.controls['paidAmount'].value==""||this.formGroup.controls['paidAmount'].value==null){
  this.formGroup.controls['paidAmount'].setValue('0')
}
    this.totalamount=parseInt(this.formGroup.controls['totalAmount'].value)
    this.paidamount=parseInt(this.formGroup.controls['paidAmount'].value)
    this.dueamount=this.totalamount-this.paidamount
    this.formGroup.controls['dueAmount'].setValue(this.dueamount)

  }
}
