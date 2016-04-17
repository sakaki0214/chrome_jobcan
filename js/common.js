$(function(){
  //common
  $html = $('html');
  $body = $('body');
  $header = $('#header');
  $headerInner = $('#header #header-inner');
  $logo = $('#header h1 a');
  $logoutContents = $('#login-contents');
  $headerName = $('#login-contents span');
  $headerNameLink = $('#login-contents span a');
  $btnLogout = $('#login-contents .btn-small');
  $headerTd = $('#header td');
  $footer = $('#all-footer');
  $footerInside = $('#all-footer p');
  $navBar = $('.navbar');
  $navBarInner = $('.navbar-inner');
  $nav = $('.nav');


  //top
  $loginBlock = $('#login-block');
  $loginBlockLabel = $('#login-block label');
  $selectLang = $('#select_lang');
  $btnselectLangLabel = $('#select_lang .btn');
  $btnSelectLangActive = $('#select_lang .btn.active');
  $loginBlock = $('#login-block');
  $loginBlockHeading = $('#login-block h3');
  $loginButton = $('#login-block .btn-block');
  $loginButtonHover = $('#login-block .btn-block:hover');
  $inputText = $('input.form-control');

  $('head').append("<link href='https://fonts.googleapis.com/css?family=Poiret+One' rel='stylesheet' type='text/css'>");

  //common
  $html.css({
    'min-width':'1px'
  });
  $body.css({
    'background':'linear-gradient(-135deg, #2c3e50, #3498db) fixed'
  });
  $headerInner.css({
    'width':'auto',
    'border':'none'
  });
  $footer.css({
    'width':'100%',
    'margin-top':'50px',
    'border-top':'0',
    'position':'relative'
  });
  $('#all-footer a:last-child').after('<br>');
  $footerInside.css({
    'width':'auto',
    'text-align':'center'
  });
  $logo.text('JOBCAN').css({
    'text-decoration':'none',
    'color':'rgb(3, 165, 255)',
    'font-size':'36px',
    'font-weight':'normal',
    'font-family':'"Poiret One",Avenir, sans-serif'
  });
  $headerName.css({
    'color':'#fff',
    'padding':'1px 0 5px',
    'display':'inline-block'
  });
  $headerNameLink.css({
    'color':'#fff'
  })
  $btnLogout.css({
    'height':'auto',
    'font-family':'Avenir, sans-serif',
    'font-size':'10px',
    'font-weight':'lighter',
    'line-height':'1',
    'padding':'5px 10px',
    'letter-spacing':'.1em',
    'background':'none',
    'border':'1px solid #fff',
    'color':'#fff',
    'text-shadow':'0 0 0 #000'
  }).mouseenter(function(){
    $(this).css({
      'color':'#ccc',
      'border-color':'#ccc'
    });
  }).mouseleave(function(){
    $(this).css({
      'color':'#fff',
      'border-color':'#fff'
    });
  });
  $headerTd.css({
    'vertical-align':'middle'
  });
  $logoutContents.css({
    'padding-top':'10px'
  });
  $navBarInner.css({
    'background':'#fff',
    'border':'none'
  });
  $nav.css({
    'width':'1280px'
  })

  //login page
  $selectLang.css({
    'float':'none',
    'position':'absolute',
    'top':'25px',
    'right':'10px',
    'width':'auto'
  });

  $btnselectLangLabel.css({
    'border-radius':'0',
    'background':'none',
    'color':'#fff',
    'text-shadow':'#000 0 0 0'
  });
  $btnSelectLangActive.css({
    'color':'#fff',
    'background':'rgba(0,0,0,.3)'
  });

  $loginBlock.css({
    'position':'relative',
    'width':'600px',
    'margin':'50px auto',
    'padding':'40px',
    'border':'none',
    'background':'#131b23',
    'box-shadow':'0px 10px 35px -10px rgba(0,0,0,.2)',
    'border-radius':'0',
    'color':'#fff'
  });
  $loginBlockHeading.html('STAFF MYPAGE LOGIN').css({
    'margin-bottom':'15px',
    'font-family':'"Poiret One",Avenir, sans-serif',
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
    $(this).velocity({
      borderColor: "#3498DB",
      color: "#3498DB"
    }, { duration : 300});
  }).mouseleave(function(){
    $(this).velocity({
      borderColor: "#fff",
      color: "#fff"
    }, { duration : 300 });
  });
  $loginBlockLabel.css({
    'font-weight':'normal',
    'font-size':'14px'
  });
  $inputText.css({
    'height':'auto',
    'border-radius':'0',
    'font-size':'18px',
    'padding':'10px',
    'color':'#333'
  });
  $('#login-block a').css({
    'color':'#fff',
    'text-decoration':'underline'
  })
  .mouseenter(function(){
    $(this).velocity({
      borderColor: "#3498DB",
      color: "#3498DB"
    }, { duration : 300});
  }).mouseleave(function(){
    $(this).velocity({
      borderColor: "#fff",
      color: "#fff"
    }, { duration : 300 });
  });
  $('#login-block .error').css({
    'color':'#FA346E'
  });


});
