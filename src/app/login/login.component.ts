import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  form: any;
  data: any;
  showAlert:boolean=false;
  UserName: any;
  Password: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,

  ) {}

  ngOnInit(): void {
    // this.form = this.formBuilder;
    this.initForm();
  }

  initForm() {
    this.form= this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.status === 'INVALID') {
      return;
    }
    console.log();

    this.UserName=this.form.controls['UserName'].value
    this.Password=this.form.controls['Password'].value

    this.loginService.Login(this.UserName,this.Password).subscribe(
      (data: any) => {
        this.data = data;
        console.log(this.data[0]._id);

        // this.jwtService.setToken(this.data.token);
        window.localStorage.setItem('id', this.data[0]._id);
        // window.localStorage.setItem('image', this.data.user.user.image);
        // window.localStorage.setItem('lastLogin', this.data.lastLogin);
         this.router.navigate(['/admin']);
      },
      (err: any) => this.errorHandler(err, 'Invalid Credentials!')
    );
    // this.router.navigate(['/admin']);

  }

  private errorHandler(error: any, message: string) {
    // this.snackbar.open(message, 'Error', {
    //   duration: 2000,
    // });
    this.showAlert=true
  }
}
