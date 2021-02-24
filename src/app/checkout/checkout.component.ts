import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  AddressFormGroup: FormGroup;
  PaymentFormGroup: FormGroup;
  // paymentMethod: 'MTN' | 'AIRTEL' | 'CASH' = 'CASH';
  favoriteSeason: string;
  paymentMethod: string;
  paymentMethods: string[] = ['AIRTEL Money', 'MTN MoMo', 'Cash on Delivery'];


  displayedColumns: string[] = ['item', 'cost'];
  isLinear = false;
  
  transactions: Transaction[] = [
    {item: 'Sub Total', cost: 4},
    {item: 'Discount', cost: 5},
    {item: 'Transportation Fee', cost: 2},
  ];

  constructor(private formBuilder: FormBuilder) {
    this.AddressFormGroup = new FormGroup({
      location: new FormControl("")
    });

    this.PaymentFormGroup = new FormGroup({
      paymentMethod: new FormControl("")
    });
   }

  ngOnInit() {
  }

  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

}
