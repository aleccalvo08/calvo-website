$(document).ready(function(){

  var i = 1;
  var footerNumber = 0;

  $('.footer__page').text("0"+i)


  var uiWaypoint = $('.ui').waypoint(function(direction){
    $(".ui-ani").addClass("ui-ani2")
    if (direction==="down") {
      footerNumber = i+1
      $('.footer__page').text("0"+footerNumber++)
    }
    else {
      footerNumber = i
      $('.footer__page').text("0"+footerNumber--)
    }
  }, {
    offset: '50%'
  })

  var ilWaypoint = $('.illustration').waypoint(function(direction){
    $(".il-ani").addClass("il-ani2")
    if (direction==="down") {
      footerNumber = i+2
      $('.footer__page').text("0"+footerNumber++)
    }
    else {
      footerNumber = i+1
      $('.footer__page').text("0"+footerNumber--)
    }
  }, {
    offset: '40%'
  })

  var moWaypoint = $('.motion').waypoint(function(direction){
    $(".mo-ani").addClass("mo-ani2")
    if (direction==="down") {
      footerNumber = i+3
      $('.footer__page').text("0"+footerNumber++)
    }
    else {
      footerNumber = i+2
      $('.footer__page').text("0"+footerNumber--)
    }
  }, {
    offset: '40%'
  })

});
