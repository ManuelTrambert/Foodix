import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {
  isFav: boolean;

  constructor(private router: Router) {
  }

  goHome() {
    this.router.navigate([`/tabs/home`]);
  }
}
