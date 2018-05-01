import { Ingredients } from "../shared/ingredients.model";
import { Subject } from "rxjs/Subject";

export class ShoppingViewService {
  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 10),
    new Ingredients('Tomato', 5)    
  ];

  addIng = new Subject<void>();

  getIngrd() {
    return this.ingredients.slice();
  }

  addNewIng(ingDetails: Ingredients) {
    this.ingredients.push(ingDetails);
    this.addIng.next();
  }

  addIngredients(ingredients: Ingredients[]) {
    console.log('shopping view service received the ingrendients to add');
    // ingredients.forEach(ingredient => {
    //   this.ingredients.push(ingredient);  
    // });
    this.ingredients.push(...ingredients);
    this.addIng.next();
    console.log('ingrendients to added');
  }
}