import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingViewService } from "../shopping-view/shopping-view.service";

@Injectable()
export class RecipeBookService {

  constructor(private shoppingViewService: ShoppingViewService) {}

  recipes: Recipe[] = [
    new Recipe('Butter Chicken', 
      'Sweet Chicken red gravy with threaded barbequed chicken pieces', 
      'https://c1.staticflickr.com/8/7046/6967779901_766191202b_b.jpg',
      [
        new Ingredients('Chicken', 1),
        new Ingredients('Butter', 2),
        new Ingredients('Tomato', 5)
      ]),
    new Recipe('Chicken Kheema', 'Chicken pieces chopped to very small chunks with red spices', 'http://opencage.info/pics/files/800_14054.jpg',
      [
        new Ingredients('Chicken', 1),
        new Ingredients('Masala', 5),
        new Ingredients('Onions', 5)
      ]
    ),
    new Recipe('Mutton Kabab', 'Mutton chopped to small chunk rolls and barbequed.', 'https://meatspice-hszhpctgbpaedf6prrg.netdna-ssl.com/wp-content/uploads/2017/08/MUTTON-SEEKH-KABAB.jpg',
      [
        new Ingredients('Chicken', 1),
        new Ingredients('Masala', 2),
        new Ingredients('Ginger', 2)
      ]
    )
  ];
  
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeDetails(recipeIndex: number) {
    return this.recipes[recipeIndex];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    console.log('in recipe book service add ingredients method of shopping service called');
    this.shoppingViewService.addIngredients(ingredients);    
  }
}