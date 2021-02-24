import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Supermarket {
  name: string;
  viewName: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear = false;
  panelOpenState = false;
  badge: number = 9;
  
  superMarkets: Supermarket[] = [
    {name: 'CapitalShoppers', viewName: 'Capital Shoppers'},
    {name: 'MegaStandard', viewName: 'Mega Standard'},
    {name: 'BestBuy', viewName: 'Best Buy'}
  ];
  categories: any = ["Phones & Tablets", "Grocery", "Fashion", "Health & Beauty", "Computing", "Electronics", "Baby products"]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['']
    });
  }

}
