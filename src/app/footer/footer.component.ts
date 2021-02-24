import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: Number;

  constructor() { 
    this.currentYear = (new Date()).getFullYear();
  }

  ngOnInit() {
  }

  toTop() {
    window.scroll(0,0);
}

}
