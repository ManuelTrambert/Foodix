import { Component } from '@angular/core';

import { RecipePage } from '../recipe/recipe';
import { ProfilePage } from '../profile/profile';
import { ShopPage } from '../shop/shop';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  HomeRoot = HomePage;
  RecipeRoot = RecipePage;
  ShopRoot = ShopPage;
  ProfileRoot = ProfilePage;

  constructor() {

  }
}
