import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  mode: any;
  applyForm: FormGroup;
  isFormSubmitted: boolean = false;
  disabled: boolean = false;
  errors: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.mode = this.route.snapshot.paramMap.get('mode')?.trim().toLowerCase();
    !this.mode && (this.mode = 'login');
    !(this.mode === 'login' || this.mode === 'signup') &&
      this.router.navigate(['/auth/login']);

    this.applyForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      ...(this.mode === 'signup' && {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
      }),
    });
  }

  async submitHandler() {
    this.isFormSubmitted = true;
    this.disabled = true;
    if (this.applyForm.invalid) {
      console.log(this.disabled);
      this.disabled = false;
      return;
    }

    this.authService.auth(this.mode, this.applyForm.value).subscribe(
      data => {
        this.disabled = false;
        localStorage.setItem('token', data.token);
        this.router.navigate(['/']);
      },
      error => {
        this.errors = error.error;
        this.disabled = false;
      }
    );
  }

  isValid(controlName: string) {
    return (
      this.applyForm.controls[controlName].invalid &&
      (this.isFormSubmitted ||
        this.applyForm.controls[controlName].touched ||
        this.applyForm.controls[controlName].dirty)
    );
  }

  navigateTo(mode: string) {
    this.router.navigate([`/auth/${mode}`]);
    this.mode = mode;
    this.applyForm.reset();
    this.isFormSubmitted = false;
  }
}
