import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingViewService } from '../shopping-view.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredients[];
  subscription: Subscription;

  constructor(private shoppingViewService: ShoppingViewService) { }

  ngOnInit() {
    this.ingredients = this.shoppingViewService.getIngrd();
    this.subscription = this.shoppingViewService.addIng.subscribe(
      () => {
        console.log('subscriber invoked and getting ingredients to showup');
        this.ingredients = this.shoppingViewService.getIngrd();
      } 
    );
  }

  // onNewIngAdded(ingDetails: Ingredients) {
  //   this.ingredients.push(ingDetails);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
