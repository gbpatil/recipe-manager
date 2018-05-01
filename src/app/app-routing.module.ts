import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { ShoppingViewComponent } from "./shopping-view/shopping-view.component";
import { RecipeStartComponent } from "./recipe-book/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/recipe-book' },
  { path: 'recipe-book', component: RecipeBookComponent, children: [
    { path: '', component: RecipeStartComponent},
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailComponent},    
    { path: ':id/edit', component: RecipeEditComponent}
  ] },
  { path: 'shopping-view', component: ShoppingViewComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}