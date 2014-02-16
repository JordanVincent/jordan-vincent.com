fitScreen = ->
  height = $(window).height()
  $('.fullscreen').each (index, element) ->
    $el = $(element)
    $el.height('auto')
    if $el.height() > height then $el.height('auto') else $el.height(height)

initSmoothScroll = ->
  $('a').smoothScroll()

$(document).ready ->
  fitScreen()
  initSmoothScroll()

$(window).resize ->
  fitScreen()