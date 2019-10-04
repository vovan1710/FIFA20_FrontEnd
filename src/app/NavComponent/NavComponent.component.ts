import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-NavComponent',
  templateUrl: './NavComponent.component.html',
  styleUrls: ['./NavComponent.component.css']
})
export class NavComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  logedIn():  Boolean{
    return false;
  }
  
  }