import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredients } from '../../../shared/ingredients.model';
import { ShoppingViewService } from '../../shopping-view.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('ingName') ingName: ElementRef;
  @ViewChild('ingAmt') ingAmt: ElementRef;
  

  constructor(private shoppingViewService: ShoppingViewService) { }

  ngOnInit() {}

  onIngAdd() {
    const name = this.ingName.nativeElement.value;
    const amt = this.ingAmt.nativeElement.value;
    const newIng = new Ingredients(name, amt);
    this.shoppingViewService.addNewIng(newIng);
  }

}
