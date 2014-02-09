fitScreen = ->
  height = $(window).height()
  $('.header').add('.background').height(height)

initSmoothScroll = ->
  $('a').smoothScroll()

$(document).ready ->
  fitScreen()
  initSmoothScroll()

$(window).resize ->
  fitScreen()