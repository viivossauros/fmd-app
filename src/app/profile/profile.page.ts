import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileFormGroup: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createProfileForm();
  }

  createProfileForm(): void {
    this.profileFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: [],
      passwordConfirm: []
    });
  }
}
