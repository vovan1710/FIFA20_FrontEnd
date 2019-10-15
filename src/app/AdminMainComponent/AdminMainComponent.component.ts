import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-AdminMainComponent',
  templateUrl: './AdminMainComponent.component.html',
  styleUrls: ['./AdminMainComponent.component.css']
})
export class AdminMainComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ActivePS4():  Boolean{
    return true;
  }
  ActiveXbox():  Boolean{
    return true;
  }

}
