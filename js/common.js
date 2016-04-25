$(function(){

  $('head').append("<link href='https://fonts.googleapis.com/css?family=Poiret+One' rel='stylesheet' type='text/css'>");
  $('head').append("<link href='https://fonts.googleapis.com/css?family=Roboto:100' rel='stylesheet' type='text/css'>");

  //common
  var
  $html = $('html'),
  $body = $('body'),
  $header = $('#header'),
  $headerInner = $('#header-inner'),
  $logo = $('#header h1 a'),
  $logoutContents = $('#login-contents'),
  $headerName = $logoutContents.find('span'),
  $headerNameLink = $headerName.find('a'),
  $btnLogout = $('#login-contents .btn-small'),
  $headerTd = $('#header td'),
  $footer = $('#all-footer'),
  $footerInside = $('#all-footer p'),
  $navBar = $('.navbar'),
  $navBarInner = $('.navbar-inner'),
  $nav = $('.nav'),
  $navDropDown = $('#menu_order table'),
  $pageTitle = $('.page-title'),
  $table1 = $('.note1'),
  $table2 = $('.note2'),
  $all = $('#all');

  //余分な空白を削除
  $('#menu_order table a').each(function(){
    $(this).text($.trim($(this).text()));
    var tx = $(this).html();
    $(this).html(tx.replace(/&nbsp;/g, ''));
  });

  //common
  $html.css({
    'min-width':'1px'
  });
  $body.css({
    'background':'linear-gradient(-135deg, #2c3e50, #3498db) fixed',
    'color':'#000',
    'font-family':'"Lucida Grande", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif'
  });
  $headerInner.css({
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
    'display':'inline-block',
    'font-size':'11px'
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
    $(this).stop(true).velocity({
      color : '#03A5FF',
      borderColor : '#03A5FF'
    }, { duration : 300});
  }).mouseleave(function(){
    $(this).velocity({
      color : '#fff',
      borderColor : '#fff'
    }, { duration : 300});
  });
  $headerTd.css({
    'vertical-align':'middle'
  });
  $logoutContents.css({
    'padding-top':'13px'
  });
  $navBarInner.css({
    'background':'#2C3E50',
    'border':'1px solid #03A5FF',
    'box-shadow':'#000 0 0 0',
    'border-radius':'0',
    'margin-bottom':'15px'
  }).find('li').css({
    'border-color':'#03A5FF'
  }).find('a').css({
    'color':'#03A5FF',
    'text-shadow':'#000 0 0 0',
    'font-weight':'normal'
  }).mouseenter(function(){
    $(this).stop(true).velocity({
      color: "#79CFFF"
    }, { duration : 300});
  }).mouseleave(function(){
    $(this).velocity({
      color: "#03A5FF"
    }, { duration : 300 });
  });
  $nav.css({
    'width':'1280px'
  })
  $navDropDown.css({
    'background':'#2C3E50',
    'border':'none'
  }).find('td').css({
    'border':'none'
  }).find('a').css({
    'display':'inline-block',
    'padding':'5px 10px',
    'background':'none',
    'font-size':'12px'
  });
  $pageTitle.css({
    'color':'#fff',
    'font-weight':'normal',
    'background':'none',
    'padding':'0'
  });
  $all.css({
    'margin-top':'20px'
  });



  //login
  var
  $loginBlock = $('#login-block'),
  $loginBlockLabel = $('#login-block label'),
  $selectLang = $('#select_lang'),
  $btnselectLangLabel = $('#select_lang .btn'),
  $btnSelectLangActive = $('#select_lang .btn.active'),
  $loginBlock = $('#login-block'),
  $loginBlockHeading = $('#login-block h3'),
  $loginButton = $('#login-block .btn-block'),
  $loginButtonHover = $('#login-block .btn-block:hover'),
  $inputText = $('input.form-control'),
  $txSave = $loginBlock.find('.checkbox-inline.col-md-offset-3'),
  $linkAdmin = $loginBlock.find('.col-md-offset-8');

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
  $loginBlock.find('.col-md-offset-4').css({
    'margin-left':'0'
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
    'border':'1px solid #fff',
    'border-radius':'0'
  }).mouseenter(function(){
    $(this).stop(true).velocity({
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
    $(this).stop(true).velocity({
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
  $txSave.css({
    'margin':'0'
  });
  $linkAdmin.css({
    'margin':'0',
    'text-align':'right'
  });

  //employee
  var
  $contents = $('#contents'),
  $contentsWrapMiddle = $('.contents-wrap-middle'),
  $clock = $('#clock'),
  $workStyle = $('#working_status'),
  $hoge = $('#main h3'),
  $aditControlArea = $('#adit-control-area'),
  $aditBtn = $('.aditBtn'),
  $monthlySummaryInfo = $('#monthly_summary_information'),
  $nightMode = $('#adit-control-area label'),
  $h3Heading = $('#wrap-management-page h3'),
  $infoArea = $('.info'),
  $topInfoArea = $('#top_info_area');


  //employee
  $contents.css({
    'padding-top':'45px',
    'padding-bottom':'40px',
    'background':'rgba(255,255,255,.2)',
    'border':'none'
  });
  $contentsWrapMiddle.css({
    'background':'none',
    'text-align':'center',
    'color':'#fff'
  }).find('a').css({
    'color':'#79CFFF'
  });
  $clock.css({
    'color':'#fff',
    'font-family':'"Roboto", sans-serif'
  });
  $workStyle.css({
    'color':'#fff',
    'text-align':'center',
    'display':'inline-block',
    'margin':'30px 0 0',
    //'border':'1px solid #fff',
    'background':'#2C3E50',
    'padding':'3px 10px',
    'font-size':'18px',
    'font-weight':'normal'
  });
  $aditControlArea.find('textarea')
  .css({
    'border-radius':'0',
    'border':'none',
    'padding':'5px 10px',
    'margin-bottom':'15px',
    'width':'482px'
  });
  $aditBtn.css({
    'margin':'0 0 15px',
    'background':'none',
    'border':'1px solid #fff',
    'color':'#fff'
  });
  $monthlySummaryInfo.css({
    'color':'#fff'
  });
  $nightMode.css({
    'color':'#fff'
  });
  $h3Heading.css({
    'color':'#000',
    'background':'rgba(255,255,255,.5)',
    'padding':'7px'
  });
  $infoArea.children('div').css({
    'margin':'50px auto 0',
    'float':'none',
    'background':'none',
    'border':'1px solid #2C3E50'
  }).filter(':last').css({
    'border':'none',
    'background':'none',
    'margin':'0'
  });
  $topInfoArea.css({
    'padding-bottom':'1px'
  });

  $h3Heading.each(function(){
    var tx = $(this).html();
    $(this).html(tx.replace(/▼/g, ''));
  });


  //adit modify
  var $pageHeaderBlock = $('.page-header-block'),
      $btnInfo = $('#search-box .btn-info');

  $pageHeaderBlock.css({
    'margin':'10px 0 5px',
    'color':'#fff',
    'border':'none'
  }).find('select').css({
    'margin':'0 10px 0 5px'
  });
  $pageHeaderBlock.find('img').css({
    'margin':'0 0 0 10px'
  });
  $btnInfo.css({
    'background':'none',
    'border':'1px solid #fff',
    'border-radius':'0',
    'padding':'2px 20px',
    'margin':'0 0 0 15px'
  });
  $('#time-table').next('p').css({
    'color':'#2C3E50'
  })

  // 休暇申請完了画面
  var $hoge = $('.hoge');


});
