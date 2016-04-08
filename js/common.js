$(function(){
  $body = $('body');
  $header = $('#header');
  $headerInner = $('#header #header-inner');
  $footer = $('#all-footer');

  $loginBlock = $('#login-block');
  $selectLang = $('#select_lang');
  $loginBlock = $('#login-block');
  $loginBlockHeading = $('#login-block h3');
  $loginButton = $('#login-block .btn-block');
  $loginButtonHover = $('#login-block .btn-block:hover');
  $inputText = $('input.form-control');

  //common
  $body.css({
    'background':'linear-gradient(-135deg, #2c3e50, #3498db) fixed'
  });
  $headerInner.css('border','none');
  $footer.css({

  });

  //top page
  $selectLang.css({
    'float':'none',
    'position':'absolute',
    'top':'25px',
    'left':'0'
  });

  $loginBlock.css({
    'width':'600px',
    'margin-top':'50px',
    'padding':'40px',
    'border':'none',
    'background':'#131b23',
    'box-shadow':'0px 10px 35px -10px rgba(0,0,0,.2)',
    'border-radius':'0',
    'color':'#fff'
  });
  $loginBlockHeading.html('STAFF MYPAGE LOGIN').css({
    'font-family':'Avenir, sans-serif',
    'font-size':'30px',
    'font-weight':'lighter',
    'letter-spacing':'.1em'
  });
  $loginButton.html('LOGIN').css({
    'height':'auto',
    'font-family':'Avenir, sans-serif',
    'font-size':'20px',
    'font-weight':'lighter',
    'padding':'20px',
    'letter-spacing':'.2em',
    'background':'none',
    'border':'1px solid #fff'
  }).mouseenter(function(){
    $(this).animate({
      fontSize:'23px'
    }, 200);
  }).mouseleave(function(){
    $(this).animate({
      fontSize:'20px'
    }, 200);
  });

  $inputText.css({
    'height':'auto',
    'border-radius':'0',
    'font-size':'18px',
    'padding':'10px',
    'color':'#333'
  });

});
