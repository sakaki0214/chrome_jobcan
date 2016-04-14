$(function(){
  //common
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
  $navBar = $('.navbar');
  $navBarInner = $('.navbar-inner');
  $nav = $('.nav');


  //top
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
  $logo.text('JOBCAN').css({
    'text-decoration':'none',
    'color':'rgb(3, 165, 255)',
    'font-family':'Avenir, sans-serif',
    'font-size':'36px'
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
    $(this).velocity({
      borderColor: "#3498DB",
      color: "#3498DB"
    }, { duration : 300});

    // $(this).velocity(
    //   { opacity: .4 },
    //   { curation: 1000}
    // );

  }).mouseleave(function(){
    $(this).velocity({
      borderColor: "#fff",
      color: "#fff"
    }, { duration : 300 });
    // $(this).velocity(
    //   { opacity: 1 },
    //   { curation: 1000}
    // );
  });

  $inputText.css({
    'height':'auto',
    'border-radius':'0',
    'font-size':'18px',
    'padding':'10px',
    'color':'#333'
  });

});
