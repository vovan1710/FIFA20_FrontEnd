import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-NavComponent',
  templateUrl: './NavComponent.component.html',
  styleUrls: ['./NavComponent.component.css']
})
export class NavComponentComponent implements OnInit {
  Hamburger = faBars;
  constructor() { }

  ngOnInit() {
  }
  logedIn():  Boolean{
    return false;
  }
  Admin(): Boolean{
    return false;
  }

  }
  
  