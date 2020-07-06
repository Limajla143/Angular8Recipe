import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-spinner',
  template: `<div class="lds-hourglass"></div>`,
  styleUrls: ['./loader-spinner.component.css']
})
export class LoaderSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
