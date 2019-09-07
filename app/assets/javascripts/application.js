// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


// jQueryでSEを再生する様に修正

$(window).on('load', function(){

  var se_error = $('#se_error'); //id="se_error"をse_errorと定義
  var se_warning = $('#se_warning') //id="se_warning"をse_warningと定義
  var se_confirm = $('#se_confirm') //id="se_confirm"をse_confirmと定義
  var se_notice = $('#se_notice'); //id="se_notice"をse_noticeと定義

  //フォームエラー時にエラー音を再生する
  if($('.form-error').is(':visible')){
    se_error[0].currentTime = 0;
    se_error[0].play();
//    alert('form-error\n音なるはず！'); //ここあとでコメントアウトしてね！
  }
  //フラッシュエラー時にエラー音を再生する
  if($('.flash-error').is(':visible')){
    se_error[0].currentTime = 0;
    se_error[0].play();
//    alert('flash-error\n音なるはず！'); //ここあとでコメントアウトしてね！
  }
  //フラッシュノーティス時にピコ音を再生する
  if($('.flash-notice').is(':visible')){
    se_notice[0].currentTime = 0;
    se_notice[0].play();
//    alert('flash-notice\n音なるはず！'); //ここあとでコメントアウトしてね！
  }
  $('.post-menus').on('click','#delete_button', function() {
    se_warning[0].currentTime = 0;
    se_warning[0].play();
    $('.post-delete-check').css('display','block');
  });
  $('.post-delete-check').on('click','.cancel_btn', function() {
    $('.post-delete-check').css('display','none');
  });

//新規登録
  $('.new-reg').on('click','#user_reg_button', function() {
    se_warning[0].currentTime = 0;
    se_warning[0].play();
    $('.user-reg-check').css('display','block');
  });
  $('.user-reg-check').on('click','.cancel_btn', function() {
    $('.user-reg-check').css('display','none');
  });

//ログアウト
  $('.logout').on('click','#logout_button', function() {
    se_confirm[0].currentTime = 0;
    se_confirm[0].play();
    $('.logout-check').css('display','block');
  });
  $('.logout-check').on('click','.cancel_btn', function() {
    $('.logout-check').css('display','none');
  });

//ユーザー情報編集
  $('.save').on('click','#user_save_button', function() {
    se_confirm[0].currentTime = 0;
    se_confirm[0].play();
    $('.user-save-check').css('display','block');
  });
  $('.user-save-check').on('click','.cancel_btn', function() {
    $('.user-save-check').css('display','none');
  });

  $(document).on("keypress", "input:not(.allow_submit)", function(event) {
    return event.which !== 13;
  });

});
