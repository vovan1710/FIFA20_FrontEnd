import { Component, OnInit } from '@angular/core';
declare var $: any;



@Component({
  selector: 'app-MainComponent', 
  templateUrl: './MainComponent.component.html',
  styleUrls: ['./MainComponent.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }

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
    
    //Show and hide block animation
    $(document).ready(function(){
      $.fn.first_section_show = function(){
          $('.first-section').fadeIn(500);
          $('.nav').removeClass('navbar-noarrow');
      }                                                    
        $.fn.first_section_hide= function(){
          $('.first-section').css('display', 'none');
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

    $('#register').click(function (){
      $.fn.register_show();
      $.fn.login_hide();
      $.fn.first_section_hide();
    });

    // CLOSE BUTTON
    $('.register__close').click(function (){
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



    }

}
