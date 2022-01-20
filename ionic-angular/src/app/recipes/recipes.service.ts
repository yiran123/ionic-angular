import { Injectable } from '@angular/core';
import { Recipe } from './recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Miso soup',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://www.simplyrecipes.com/thmb/4IexM1GNbsn9fzx6Ffk398IruFQ=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Miso-Soup-LEAD-2-0e1c8aa2ca93496c934854541ab812c7.jpg',
      ingredients: ['seaweed', 'kombu', 'miso paste', 'tofu'],
    },
    {
      id: 'r2',
      title: 'Kimchi Fried Rice',
      imageUrl:
        // eslint-disable-next-line max-len
        'https://www.simplyrecipes.com/thmb/88NHpcvI65vUeATOqd21W8_b6uU=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Kimchi-Fried-Rice-LEAD-3-54b92bdf81a845478e1b28e9bc66cbb7.jpg',
      ingredients: ['rice', 'kimchi', 'bacon', 'onion', 'egg'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => recipe.id === recipeId),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
    console.log(this.recipes);
  }
}
