class App

  constructor: ->
    $(document).ready =>
      @fitScreen()
      @initSmoothScroll()
      @initToggleNavigation()
      @activateNavigationLinks()
      @runHeaderCarousel()

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
    $('a').smoothScroll
      offset: -$('#nav').outerHeight()

  initToggleNavigation: ->
    $nav = $('#nav')

    closeNav = ->
      $nav.addClass('closed')

    openNav = ->
      $nav.removeClass('closed')

    $nav.find('.menu-btn').click ->
      if $nav.hasClass('closed') then openNav() else closeNav()

    $nav.find('li a').click ->
      closeNav()

  runHeaderCarousel: ->
    $carouselItems = $('#header .carousel .carousel-item')
    carouselIndex = 0

    $($carouselItems[carouselIndex]).show()

    setInterval ->
      carouselIndex = ($carouselItems.length-1) if --carouselIndex < 0
      $carouselItems.filter(':visible').fadeOut 800, ->
        $($carouselItems[carouselIndex]).fadeIn(800)
    , 4000

  displayNavigation: ->
    scrollY = $(document).scrollTop()
    headerHeight = $('#header').height()
    navHeight    = $('#nav').outerHeight()

    navTop = if scrollY > (headerHeight-2*navHeight) then 0 else -navHeight
    $('#nav').css('top',navTop)

  activateNavigationLinks: ->
    $('section').bind 'inview', (e, isInView, visibleX, visibleY) ->
      $('#nav li a').each (index, link) =>
        $link = $(link)
        return unless $link.attr('href') is '#' + $(@).attr('id')
        return $link.removeClass('active') unless isInView
        $link.addClass('active')


app = new App