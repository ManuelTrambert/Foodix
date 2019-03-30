import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class RecipeDetailPage {
  isFav: boolean;

  constructor(private router: Router) {
    this.isFav = false;
  }

  fav() {
    this.isFav = !this.isFav;
  }

  goHome() {
    this.router.navigate([`/tabs/home`]);
  }
}
