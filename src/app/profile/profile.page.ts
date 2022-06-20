import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Store } from '../shared/user.store';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User;
  profileFormGroup: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private userStore: Store
  ) { }

  ngOnInit() {

    this.userStore.getUser().subscribe(
        user => {
          this.createProfileForm(user);
        },
        error => {
          console.log(error);
        }
    );
  }

  createProfileForm(user: User): void {
    this.profileFormGroup = this.formBuilder.group({
      name: [user.name, [Validators.required]],
      email: [user.email, [Validators.email, Validators.required]],
      password: [user.password],
      passwordConfirm: ['']
    });
  }
}
