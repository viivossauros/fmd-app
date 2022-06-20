import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(
      private userService: UserService
  ) {}

  ngOnInit() {
    this.subscription = this.userService.getUser$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
