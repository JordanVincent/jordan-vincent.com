class App

  constructor: ->
    $(document).ready =>
      @fitScreen()
      @initSmoothScroll()

    $(window).resize =>
      @fitScreen()

    $(document).scroll =>
      @displayNavigation()

  fitScreen: ->
    height = $(window).height()
    $('.fullscreen').each (index, element) ->
      $el = $(element)
      $el.height('auto')
      if $el.height() > height then $el.height('auto') else $el.height(height)

  initSmoothScroll: ->
    $('a').smoothScroll()

  displayNavigation: ->
    scrollY = $(document).scrollTop()
    headerHeight = $('#header').height()
    navTop = if scrollY > headerHeight then 0 else -72
    $('#nav').css('top',navTop)



app = new App