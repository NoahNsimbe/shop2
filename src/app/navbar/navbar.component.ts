import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface Supermarket {
  name: string;
  viewName: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchForm: FormGroup = this.formBuilder.group({
    
  });

  superMarkets: Supermarket[] = [
    {name: 'CapitalShoppers', viewName: 'Capital Shoppers'},
    {name: 'MegaStandard', viewName: 'Mega Standard'},
    {name: 'BestBuy', viewName: 'Best Buy'}
  ];

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
  }

}
