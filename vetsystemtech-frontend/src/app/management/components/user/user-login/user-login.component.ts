import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/management/services/user/auth/auth-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  public errorMessage: string | null = null;

  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: NonNullableFormBuilder,
    private service: AuthUserService,
    private router: Router
  ) { }

  onSubmit() {
    const username = this.form.value.username;
    const password = this.form.value.password;

    if (username && password) {
      this.service.login(username, password).subscribe(
        () => {
          this.router.navigate(['home']);
        },
        (error) => {
          this.onError(error);
        }
      );
    }
  }

  private onError(errorMessage: string) {
    this.snackBar.open(errorMessage, '', { duration: 5000 });
  }
}
