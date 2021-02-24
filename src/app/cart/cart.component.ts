import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}

export interface CartItems{
  item: string;
  quantity: number;
  unitCost: number;
  subTotal: number;
}

export interface Total{
  (unitCost: number, quantity: number): number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['item', 'cost'];
  
  transactions: Transaction[] = [
    {item: 'Total', cost: 4},
    {item: 'Discount', cost: 5},
    {item: 'Transportation Fee', cost: 2},
  ];
  cartColumns: string[] = ['Item', 'Quantity', 'Unit Price', 'Sub Total'];
  cartItems: CartItems[];

  selected = 2;
  unitPrice = 120;
  total = this.selected * this.unitPrice;

  constructor() {
   }

  

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems(): void{
    this.cartItems = [
      {item:"Pencil", unitCost: 500, quantity: 1, subTotal: 9},
      {item:"Pen", unitCost: 700, quantity: 1, subTotal: 9},
      {item:"Book", unitCost: 1500, quantity: 1, subTotal: 9},
      {item:"Ruler", unitCost: 1000, quantity: 1, subTotal: 9}
    ];
    
  }

}
