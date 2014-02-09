fitHeader = ->
  height = $(window).height()
  $('.header').height(height)

$(document).ready ->
  fitHeader()

$(window).resize ->
  fitHeader()


