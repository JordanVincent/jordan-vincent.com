class App

  constructor: ->
    $(document).ready =>
      @fitScreen()
      @initSmoothScroll()
      @activateNavigationLinks()

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
    navHeight    = $('#nav').outerHeight()

    navTop = if scrollY > (headerHeight-navHeight) then 0 else -navHeight
    $('#nav').css('top',navTop)

  activateNavigationLinks: ->
    $('section').bind 'inview', (e, isInView, visibleX, visibleY) ->
      $('#nav li a').each (index, link) =>
        $link = $(link)

        return unless $link.attr('href') is '#' + $(@).attr('id')
        if (isInView and visibleY is 'bottom')
          $link.addClass('active')
        else $link.removeClass('active')


app = new App