import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  recipeTypes = [
    {
      name: 'Tunisienne',
      path: '../assets/food/tunisia.jpeg'
    },
    {
      name: 'Américaine',
      path: '../../assets/food/american.jpeg'
    },
    {
      name: 'Francaise',
      path: '../../../assets/food/french.jpeg'
    },
    {
      name: 'Chilienne',
      path: '../../../../assets/food/chilian.jpeg'
    },
    {
      name: 'Marseillaise',
      path: '/assets/food/marseille.jpeg'
    },
    {
      name: 'Corse',
      path: 'assets/food/corsican.jpeg'
    },
    {
      name: 'Italienne',
      path: 'assets/food/italia.jpeg'
    },
    {
      name: 'Russe',
      path: 'assets/food/russian.jpeg'
    }
  ]

  recipes = [
    {
      id: 0,
      'name': 'Andouillette',
      'type': 'Francaise',
      'path': 'assets/food/russian.jpeg',
      'time': 1,
      'price': '€',
      description: 'SALUT JE SUIS LANDOUILLETTE',
      expand: false,
      isFav: false
    },
    {
      id: 1,
      'name': 'Coquillette',
      'type': 'Italienne',
      'path': 'assets/food/russian.jpeg',
      'time': 9,
      'price': '€',
      description: 'SALUT JE SUIS LANDOUILLETTE',
      expand: false, 
      isFav: false
    },
    {
      id: 2,
      'name': 'Caviar',
      'type': 'Russe',
      'path': 'assets/food/russian.jpeg',
      'time': 1,
      'price': '€€€',
      description: 'SALUT JE SUIS LANDOUILLETTE',
      expand: false, 
      isFav: true
    },
    {
      id: 3,
      'name': 'Lasagne',
      'type': 'Italienne',
      'path': 'assets/food/russian.jpeg',
      'time': 50,
      'price': '€€',
      description: 'SALUT JE SUIS LANDOUILLETTE',
      expand: false, 
      isFav: true
    },
    {
      id: 4,
      'name': 'Burger',
      'type': 'Americaine',
      'path': 'assets/food/russian.jpeg',
      'time': 15,
      'price': '€€',
      description: 'SALUT JE SUIS LANDOUILLETTE',
      expand: false, 
      isFav: false
    },
    {
      id: 5,
      'name': 'Couscous',
      'type': 'Marocaine',
      'path': 'assets/food/russian.jpeg',
      'time': 120,
      'price': '€€',
      description: 'SALUT JE SUIS LANDOUILLETTE',
      expand: false, 
      isFav: true
    },
    {
      id: 6,
      'name': 'Tacos',
      'type': 'Chilienne',
      'path': 'assets/food/russian.jpeg',
      'time': 20,
      'price': '€',
      description: 'SALUT JE SUIS LANDOUILLETTE',
      expand: false, 
      isFav: false
    },
  ]

  constructor(private router: Router) {
  }

  expand(recipe) {
    recipe.expand = !recipe.expand;
  }

  fav(recipe) {
    recipe.isFav = !recipe.isFav;
  }

  redirect(recipe) {
    this.router.navigate([`recipe/${recipe.id}`]);
  }

  redirectSettings() {
    this.router.navigate([`settings`]);
  }
}
