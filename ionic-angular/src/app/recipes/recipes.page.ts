import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.recipes = this.recipesService.getAllRecipes();
    // console.log(this.recipes);
  }

  ionViewWillEnter() {
    //this.recipes = this.recipesService.getAllRecipes();
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
