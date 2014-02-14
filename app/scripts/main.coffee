fitScreen = ->
  height = $(window).height()
  $('.fullscreen').height(height)

initSmoothScroll = ->
  $('a').smoothScroll()

$(document).ready ->
  fitScreen()
  initSmoothScroll()

$(window).resize ->
  fitScreen()