$(document).ready(function(){

  var i = 1;
  var footerNumber = 0;

  $('.footer__page').text("0"+i)


  var uiWaypoint = $('.ui').waypoint(function(direction){
    $(".ui-ani").addClass("ui-ani2")
    // if (direction==="down") {
    //   footerNumber = i+1
    //   $('.footer__page').text("0"+footerNumber++)
    // }
    // else {
    //   footerNumber = i
    //   $('.footer__page').text("0"+footerNumber--)
    // }
  }, {
    offset: '50%'
  })

  var ilWaypoint = $('.illustration').waypoint(function(direction){
    $(".il-ani").addClass("il-ani2")
    // if (direction==="down") {
    //   footerNumber = i+2
    //   $('.footer__page').text("0"+footerNumber++)
    // }
    // else {
    //   footerNumber = i+1
    //   $('.footer__page').text("0"+footerNumber--)
    // }
  }, {
    offset: '40%'
  })

  var moWaypoint = $('.motion').waypoint(function(direction){
    $(".mo-ani").addClass("mo-ani2")
    // if (direction==="down") {
    //   footerNumber = i+3
    //   $('.footer__page').text("0"+footerNumber++)
    // }
    // else {
    //   footerNumber = i+2
    //   $('.footer__page').text("0"+footerNumber--)
    // }
  }, {
    offset: '40%'
  })

  // var bioWaypoint = $('.about').waypoint(function(direction){
  //   if (direction==="down"){
  //     $('.footer__page').text("")
  //   }
  //   else {
  //     footerNumber = i+3
  //     $('.footer__page').text("0"+footerNumber--)
  //   }
  // }, {
  //   offset: '30%'
  // })

  //END FOOTER ANIMATION

  $('.header__menu').click(function(){
    $('.overlay').css("height","100vh");
    $('html').css("overflow","hidden");
    $('.header__home').css("display", "block");
  })

  $('.header__home').click(function(){
    $('.overlay').css("height","0");
    $('html').css("overflow","auto");
    $('.header__home').css("display","none");
  })

  $('.section-links').click(function(){
    $('.overlay').css("height","0");
    $('html').css("overflow","auto");
    $('.header__home').css("display","none");
  })

  $('.ui__info__cta-link').click(function(){
    event.preventDefault();
    $('.uiworks-hider').slideToggle();

    // if ($('.ilworks-hider').css("display","block")) {
    //   $('.ilworks-hider').slideToggle();
    // }
    //
    // if ($('.moworks-hider').css("display","block")) {
    //   $('.moworks-hider').slideToggle();
    // }
  })

  $('.illustration__info__cta-link').click(function(){
    event.preventDefault();
    $('.ilworks-hider').slideToggle();

    // if ($('.uiworks-hider').css("display","block")) {
    //   $('.uiworks-hider').slideToggle();
    // }
    //
    // if ($('.moworks-hider').css("display","block")) {
    //   $('.moworks-hider').slideToggle();
    // }
  })

  $('.motion__info__cta-link').click(function(){
    event.preventDefault();
    $('.moworks-hider').slideToggle();

    // if ($('.ilworks-hider').css("display","block")) {
    //   $('.ilworks-hider').slideToggle();
    // }
    //
    // if ($('.uiworks-hider').css("display","block")) {
    //   $('.uiworks-hider').slideToggle();
    // }
  })

});
