import { Component, OnInit } from '@angular/core';
declare var $: any;
import 'jquery';
import 'jquery-ui';
import { faFilm } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  filmIcon = faFilm;
  constructor (
  ) {}


  ngOnInit() {

    // Скролл по якорю
    $(document).ready(function(){
      $('a[href*="#"]').on("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
      return false;
      });
      });

    
  }

  
}


