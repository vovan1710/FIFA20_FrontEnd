import { Component, OnInit } from '@angular/core';
declare var $: any;
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-MainComponent', 
  templateUrl: './MainComponent.component.html',
  styleUrls: ['./MainComponent.component.css']
})
export class MainComponentComponent implements OnInit {
  SendIcon = faArrowRight;

  constructor() { }
  

  logedIn():  Boolean{
    return true;
  }

  OrderCreated(): Boolean{
    return true;
  }


  ngOnInit() {
    
    // Расчет монет
    $(document).ready(function(){
      var price = 120; //rub ЦЕНА ЗА 10 ТЫС МОНЕТ   

      var minCoin = 10000; //Минимальное количество монет
      var maxCoin = 5000000 //Максимально количество монет



          var kurs = 1000/price;
          var input = $('input.creating-order__coins');
          var cena= $('input.creating-order__money');
    	    var slider = $( "#slider-ps4" ).slider({
    				value : minCoin,//Значение, которое будет выставлено слайдеру при загрузке
    				min : minCoin,//Минимально возможное значение на ползунке
            max : maxCoin,//Максимально возможное значение на ползунке
            range: "max",
    				step : 500,//Шаг, с которым будет двигаться ползунок
    				create: function( event, ui ) {
    			//При создании слайдера, получаем его значение в перемен. val
    				},
                slide: function( event, ui ) {
    		            input.val(ui.value);//При изменении значения ползунка заполняем элемент с id
                    cena.val((input.val()/kurs).toFixed(2));
                }

            });
              input.val(slider.slider('value'));
                  cena.val((input.val()/kurs).toFixed(2));
            input.on('change', function() {
          	var value1=input.val();
              if (value1 > maxCoin) { value1 = maxCoin; input.val(maxCoin)}
              if (value1 < minCoin) { value1 = minCoin; input.val(minCoin)}
          	slider.slider('value',value1);
              cena.val((input.val()/kurs).toFixed(2));
            });
    });
    
    // SHOW AND HIDE FIRST SEC , LOGIIN ,REGISTER
        $(document).ready(function(){
      $.fn.first_section_show = function(){
          $('.first-section, .advanteges, .buying, .opinions').fadeIn(500);
      }                                                    
        $.fn.first_section_hide= function(){
          $('.first-section, .advanteges, .buying, .opinions').css('display', 'none');
      }

      $.fn.login_show = function(){
        $('.login').fadeIn(500);
      }                                          
      $.fn.login_hide= function(){
        $('.login').css('display', 'none');
      }

      $.fn.register_show = function(){
        $('.register').fadeIn(500);
      }
      $.fn.register_hide= function(){
        $('.register').css('display', 'none');
      }

    });
    

    //Show and hide block animation
    $(document).ready(function(){
      $.fn.first_section_show = function(){
          $('.first-section, .advanteges, .buying, .opinions').fadeIn(500);
          $('.nav').removeClass('navbar-noarrow');
      }                                                    
        $.fn.first_section_hide= function(){
          $('.first-section, .advanteges, .buying, .opinions').css('display', 'none');
          $('.nav').addClass('navbar-noarrow');
      }

      $.fn.login_show = function(){
        $('.login').fadeIn(500);
      }                                          
      $.fn.login_hide= function(){
        $('.login').css('display', 'none');
      }

      $.fn.register_show = function(){
        $('.register').fadeIn(500);
      }
      $.fn.register_hide= function(){
        $('.register').css('display', 'none');
      }

    });

    // LOGIN

    $(document).ready(function(){
      $.fn.login = function(){ 
        $.fn.login_show();
        $.fn.register_hide();
        $.fn.first_section_hide();   
      }
      $("#login").click(function(){
        $.fn.login();
    });
      $("#login_in").click(function(){
          $.fn.login();
      });    
    });
      //Register

    $(document).ready(function(){
      $.fn.register = function(){ 
        $.fn.register_show();
        $.fn.login_hide();
        $.fn.first_section_hide();  
      }
      $("#register").click(function(){
        $.fn.register();
      });
    });

    // CLOSE BUTTON
    $('.item__close').click(function (){
      $.fn.first_section_show();
      $.fn.register_hide();
      $.fn.login_hide();
    });


    //Проверка совпадения паролей
    $('#register__password, #register__password-repeat').on('keyup', function () {
      if ($('#register__password').val() == $('#register__password-repeat').val()) {
        $('#message').html('').css('color', 'green');
      } else 
        $('#message').html('Пароли не совпадают').css('color', 'red');
    });

    //RANKING

//     var rating = document.querySelector('.rating'),
//     ratingItem = document.querySelectorAll('.rating-item');

// rating.onclick = function(e){
//   var target = e.target;
//   if(target.classList.contains('rating-item')){
//     removeClass(ratingItem,'current-active')
//     target.classList.add('active','current-active');
//   }
// }

// rating.onmouseover = function(e) {
//   var target = e.target;
//   if(target.classList.contains('rating-item')){
//     removeClass(ratingItem,'active')
//     target.classList.add('active');
//     mouseOverActiveClass(ratingItem)
//   }
// }
// rating.onmouseout = function(){
//   addClass(ratingItem,'active');
//   mouseOutActiveClas(ratingItem);
// }

// function removeClass(arr) {
//   for(var i = 0, iLen = arr.length; i <iLen; i ++) {
//     for(var j = 1; j < arguments.length; j ++) {
//       ratingItem[i].classList.remove(arguments[j]);
//     }
//   }
// }
// function addClass(arr) {
//   for(var i = 0, iLen = arr.length; i <iLen; i ++) {
//     for(var j = 1; j < arguments.length; j ++) {
//       ratingItem[i].classList.add(arguments[j]);
//     }
//   }
// }

// function mouseOverActiveClass(arr){
//   for(var i = 0, iLen = arr.length; i < iLen; i++) {
//     if(arr[i].classList.contains('active')){
//       break;
//     }else {
//       arr[i].classList.add('active');
//     }
//   }
// }

// function mouseOutActiveClas(arr){
//   for(var i = arr.length-1; i >=1; i--) {
//     if(arr[i].classList.contains('current-active')){
//       break;
//     }else {
//       arr[i].classList.remove('active');
//     }
//   }
// }



    }


}
