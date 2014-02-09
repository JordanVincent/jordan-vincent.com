fitScreen = ->
  height = $(window).height()
  $('.header').add('.background').height(height)

$(document).ready ->
  fitScreen()

$(window).resize ->
  fitScreen()