import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredients } from '../../shared/ingredients.model';
import { RecipeBookService } from '../recipe-book.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetails: Recipe;
  id: number;

  constructor(
    private recipeBookService: RecipeBookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeDetails = this.recipeBookService.getRecipeDetails(this.id);
      }
    );
  }

  addToShoppingList(ingredients: Ingredients) {
    console.log('add Ingredients method called from recipe details');
    this.recipeBookService.addIngredientsToShoppingList(this.recipeDetails.ingredients);    
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {
      relativeTo: this.route
    });

    // Complex way to navigate from 1 directory back.
    // this.router.navigate(['../', this.id, 'edit'], {
    //   relativeTo: this.route
    // });

    // Another way to navigate from root path 
    // this.router.navigate(['/recipe-book', this.id, 'edit']);
  }

}
